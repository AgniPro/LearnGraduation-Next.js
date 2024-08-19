export default async function sitemap() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/get-posts?skip=0&limit=1000`);
    const posts = await response.json();

    const postEntries = posts.map((post) => ({
        url: `${process.env.NEXT_PUBLIC_URL}/posts/${post.url}`,
        lastModified: new Date(post.updatedAt).toISOString(),
        changefreq: 'daily',
        priority: 0.7,
    }));

    return [
        {
            url: `${process.env.NEXT_PUBLIC_URL}/about`,
            lastModified: new Date().toISOString(),
        },
        ...postEntries,
    ];
}
