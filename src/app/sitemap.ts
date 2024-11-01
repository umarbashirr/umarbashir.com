import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const url = "https://www.umarbashir.com"
    return [
        {
            url: url,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: `${url}/about`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${url}/my-work`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.5,
        },
    ]
}