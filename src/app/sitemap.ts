import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.aspireinfoedu.in';

  const routes = [
    '',
    '/trainers',
    '/web-services',
    '/digital-marketing',
    '/courses',
    '/about',
    '/contact',
    '/courses/mern-stack',
    '/courses/java-fullstack',
    '/courses/python-fullstack',
    '/courses/sdet',
    '/courses/playwright',
    '/courses/ai-ml',
    '/blog',
    '/blog/crack-product-based-interviews',
    '/blog/mern-vs-mean-stack',
    '/blog/top-automation-frameworks',
    '/blog/future-of-ai-llms',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' || route === '/trainers' || route === '/web-services' || route === '/digital-marketing' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : route === '/trainers' || route === '/web-services' || route === '/digital-marketing' ? 0.9 : 0.8,
  }));
}
