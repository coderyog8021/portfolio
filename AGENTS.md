<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Portfolio architecture
- Keep the portfolio as a single index route with hash section navigation, because the requested experience explicitly uses smooth scrolling between sections.
- Keep personal content and nullable external URLs in `src/components/portfolio/content.ts`, so missing links stay unavailable and later updates have one source of truth.
- Use the shared Button component and global semantic design tokens for controls and presentation, so the portfolio remains consistent and accessible.
- Use browser effects only for section observation and reveal animations, so SSR renders complete content without browser APIs.
