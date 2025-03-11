import 'server-only';

import Link from 'next/link';

import { getPosts } from "@/server/db.ts";

import "./index.css";



export default async function BoardList() {
	const posts = await getPosts(10);

	return (
		<table className="board-list">
			<thead>
				<tr>
					<th>번호</th>
					<th>제목</th>
					<th>글쓴이</th>
					<th>작성일</th>
				</tr>
			</thead>
			<tbody>
				{
					posts.map(post => {
						const createdAt = new Intl.DateTimeFormat('ko-KR', {
							dateStyle: 'short',
						}).format(post.createdAt);

						return (
							<tr key={post.id}>
								<td className="no">{post.id}</td>
								<td className="title">
									<Link href={`/post/${post.id}`}>
										{post.title}
									</Link>
								</td>
								<td className="uploader">{post.uploader}</td>
								<td className="created-at">{createdAt}</td>
							</tr>
						);
					})
				}
			</tbody>
		</table>
	);
}