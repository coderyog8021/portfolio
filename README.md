# Yog Jain — Portfolio

A monochrome, recruiter-friendly portfolio for Yog Jain. Built with React 19, TypeScript, Vite, TanStack Start and Tailwind CSS v4. It preserves the project's existing framework rather than introducing a second router or framework.

## Run locally

Install Node.js 22+ and Bun, then run:

```sh
bun install
bun run dev
```

Open the local URL printed by Vite. To build outside Lovable, run `bun run build`. For checks, run `bun run test`. Bun is recommended because the repository includes `bun.lock`. No secrets, external accounts or database are required.

## Folder structure

```text
src/
  assets/yj-monogram.jpg              Generated YJ visual
  components/portfolio/
    content.ts                       Personal details, skills, projects, URLs
    portfolio.tsx                    Reusable sections and portfolio view
  components/ui/                     Shared accessible design-system controls
  routes/index.tsx                    Home page and search/social metadata
  routes/__root.tsx                   Document shell, fonts and favicon
  styles.css                         Semantic tokens and responsive styling
  router.tsx                         TanStack router
  server.ts                          Existing SSR entry and error wrapper
  test/                              Automated checks
public/
  favicon.png                        Small YJ favicon
vite.config.ts                       Existing Vite / TanStack configuration
```

The site is one scrolling page, as requested. Navigation uses native section anchors. Project visuals are abstract editorial illustrations, not screenshots or claims of actual project interfaces. The content is based only on the supplied facts; there are no fabricated metrics, ratings or achievements.

## Add the missing links

Edit `src/components/portfolio/content.ts`:

- Replace `profile.linkedin: null` with the actual HTTPS LinkedIn profile URL.
- Add the supplied PDF as `public/resume.pdf`, then set `profile.resume` to `'/resume.pdf'`. The main Download Resume control automatically becomes a working download. Keep the file on the same origin for dependable download behavior.
- Replace each project's `github` and `demo` null values with the supplied URLs. Code and demo links automatically become clickable.
- Until then, the website renders unavailable states instead of misleading or broken links.

The email opens the visitor's configured email app using `mailto:yogjainj@gmail.com`; no contact form or email-sending server is required. GitHub links point to the supplied profile.

## Deployment

### Lovable

Use Publish in the Lovable editor. This is the existing project's native deployment path; no configuration change is needed. This delivery has not published the site.

### Vercel

1. Export/connect the source to a GitHub repository and import it in Vercel.
2. Use Node.js 22+, install command `bun install`, and build command `bun run build`.
3. Set the build environment variable `NITRO_PRESET` to `vercel` (or let Nitro detect Vercel). Do not set a generic static `dist` output directory: use Vercel's generated deployment output.
4. Deploy and verify the home page, bundled artwork, navigation and links.

For explicit configuration in a self-hosted copy, add `nitro: { preset: 'vercel' }` at the **top level** of `defineConfig` in `vite.config.ts`, alongside `tanstackStart`, not inside `vite`. The configuration wrapper exposes this option and detects target platforms outside Lovable. Lovable itself pins its own runtime preset.

### Netlify

1. Import the GitHub repository in Netlify.
2. Use Node.js 22+, install command `bun install`, and build command `bun run build`.
3. Set `NITRO_PRESET=netlify`. Nitro generates the Netlify deployment functions and public files. Use the generated public directory reported by the build (normally `dist/client` with this template), not the server bundle.
4. Alternatively set top-level `nitro: { preset: 'netlify' }` in an external copy of `vite.config.ts`.
5. Deploy and verify links and rendered content.

Vercel and Netlify require their own target outputs; do not upload a Cloudflare-targeted server bundle to them. Hosting deployments have not been run from this delivery.

### GitHub Pages (static export)

GitHub Pages cannot run SSR. For this frontend-only portfolio, create a static export in an external copy of the source:

1. Prefer an account site repository named `<username>.github.io`. This keeps the site at `/`, matching the favicon and optional resume paths.
2. In `vite.config.ts`, use top-level `nitro: false`. Keep the existing `tanstackStart.server` setting and add `prerender: { enabled: true }` and `pages: [{ path: '/' }]` inside `tanstackStart`.
3. Run `bun install` and `bun run build`. Check that the public output (normally `dist/client`) contains `index.html` and its referenced assets before uploading. The server output is not needed on Pages.
4. In GitHub Settings → Pages, select GitHub Actions. Create a workflow using `actions/checkout@v4`, `oven-sh/setup-bun@v2`, `actions/configure-pages@v5`, `actions/upload-pages-artifact@v3` (path set to the verified public output) and `actions/deploy-pages@v4`. Grant `contents: read`, `pages: write`, and `id-token: write`; use the `github-pages` environment.
5. Deploy the public output and test the resulting URL.

A project repository hosted at `/<repository>/` additionally needs Vite `base`, router basepath and public asset URLs aligned to that path. Prefer the account-site option unless you are prepared to configure and test those changes. Section hashes need no additional router because every section lives at `/`. Static hosting instructions are provided for a separate export; the preview's SSR configuration has not been altered or externally deployed.

## Accessibility and behavior

- Semantic sections, navigation landmarks and a skip link.
- Keyboard-accessible links and menu controls; Escape closes the mobile menu.
- Smooth scrolling with `prefers-reduced-motion` support.
- Content visible without reveal-animation JavaScript; observation enhances it after hydration.
- Nullable links cannot accidentally navigate to fake destinations.
- Fonts load through the document head with system fallbacks.
