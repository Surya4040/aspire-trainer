import { MetadataRoute } from 'next';
import { blogArticles } from '@/lib/seo-content';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.aspireinfoedu.in';

  const coreRoutes = [
    '',
    '/trainers',
    '/web-services',
    '/digital-marketing',
    '/courses',
    '/portal',
    '/about',
    '/contact',
    '/application-development-coimbatore',
    '/training-vendors-coimbatore',
    '/training-vendors-chennai-bangalore',
    '/best-online-course-coimbatore',
    '/courses/mern-stack',
    '/courses/java-fullstack',
    '/courses/python-fullstack',
    '/courses/sdet',
    '/courses/playwright',
    '/courses/ai-ml',
    '/blog',
    ...blogArticles.map((article) => `/blog/${article.slug}`),
  ];

  const highPriorityRoutes = new Set([
    '/trainers',
    '/web-services',
    '/digital-marketing',
    '/application-development-coimbatore',
    '/training-vendors-coimbatore',
    '/training-vendors-chennai-bangalore',
    '/best-online-course-coimbatore',
  ]);

  return coreRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' || highPriorityRoutes.has(route) ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : highPriorityRoutes.has(route) ? 0.9 : 0.8,
  }));
}
