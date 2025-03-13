'use client';

import Link from 'next/link';
import { useSession } from 'next-auth/react';

import "./index.css";



export default function Links() {
	const { data, status } = useSession();

	return (
		<div className="links">
			<span className="login">
				{status === "authenticated" ? (
					<>
						<span>{data.user.nickname}님 </span>
						<Link href="/account/logout">
							로그아웃
						</Link>
					</>
				) : (
					<Link href="/account/login">
						로그인
					</Link>
				)}
			</span>
		</div>
	);
}