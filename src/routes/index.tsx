import { createFileRoute } from '@tanstack/react-router';
import { Portfolio } from '@/components/portfolio/portfolio';

export const Route = createFileRoute('/')({
  head: () => ({ meta: [
    { title: 'Yog Jain — AI/ML & Data Science Portfolio' },
    { name: 'description', content: 'Explore Yog Jain’s AI/ML and data science projects, technical skills, education, and smart-city data analytics internship experience.' },
    { property: 'og:title', content: 'Yog Jain — AI/ML & Data Science Portfolio' },
    { property: 'og:description', content: 'Computer Science and Engineering undergraduate specializing in AI/ML. Discover projects, skills, and experience, and connect with Yog Jain.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: Portfolio,
});
