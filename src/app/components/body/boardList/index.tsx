import Link from 'next/link';

import "./index.css";



export default async function BoardList() {
	const request = await fetch(
		`${process.env.NEXT_PUBLIC_BASE_URL}/api/post/list?limit=10`
	);
	const posts: PostList[] = await request.json();

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
						}).format(
							new Date(post.createdAt)
						);

						return (
							<tr key={post.id}>
								<td className="no">{post.id}</td>
								<td className="title">
									<Link href={`/post/view/${post.id}`}>
										{post.title}
									</Link>
								</td>
								<td className="uploader">{post.uploaderNick}</td>
								<td className="created-at">{createdAt}</td>
							</tr>
						);
					})
				}
			</tbody>
		</table>
	);
}