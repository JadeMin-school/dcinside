interface PageProps {
	params: Promise<{
		id: string
	}>;
};



export const revalidate = 0;

export default async function Page({params}: PageProps) {
	const { id } = await params;

	const request = await fetch(
		`${process.env.NEXT_PUBLIC_BASE_URL}/api/post/view?id=${id}`
	);
	const post: Post = await request.json();

	return (
		<div>
			<h1>{post.title}</h1>
			<p>{post.content}</p>
		</div>
	);
}