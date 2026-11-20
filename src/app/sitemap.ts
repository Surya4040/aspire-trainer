import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://aspireinfo.com';

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
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' || route === '/trainers' || route === '/web-services' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : route === '/trainers' || route === '/web-services' ? 0.9 : 0.8,
  }));
}
