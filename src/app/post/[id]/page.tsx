import 'server-only';

import { getPost } from "@/server/db";

interface PageProps {
	params: Promise<{
		id: string
	}>;
};



export const revalidate = 0;

export default async function Page({params}: PageProps) {
	const { id } = await params;

	const post = await getPost(id);

	return (
		<div>
			<h1>{post.title}</h1>
			<p>{post.content}</p>
		</div>
	);
}