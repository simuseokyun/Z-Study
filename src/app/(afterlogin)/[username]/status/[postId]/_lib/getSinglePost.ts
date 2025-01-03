export const getSinglePost = async ({ queryKey }: { queryKey: [string, string] }) => {
    const [_1, id] = queryKey;
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/${id}`, {
        next: {
            tags: ['post', id],
        },
        credentials: 'include',
        // next15부턴 cache:"no-store" 가 기본이 되서 입력안해줘도 됨
    });
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data');
    }

    return res.json();
};
