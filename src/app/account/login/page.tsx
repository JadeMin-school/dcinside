'use client';

import type { FormEventHandler } from 'react';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

import "./index.css";



export default function Login() {
	const router = useRouter();
	const [id, setId] = useState('');
	const [password, setPassword] = useState('');

	const onSubmit: FormEventHandler = async (event) => {
		event.preventDefault();
		
		const response = await signIn("credentials", {
			id,
			password,
			callbackUrl: "/",
			redirect: false,
		});
		if (response === undefined)
			return alert("로그인에 실패했습니다. 다시 시도해주세요.");

		if (response.error)
			return alert(response.error);

		if (response.ok)
			router.push("/");
	}


	return (
		<div className="login">
			<form onSubmit={onSubmit}>
				<div>
					<label htmlFor="id">ID</label>
					<input
						type="text"
						id="id"
						value={id}
						onChange={(e) => setId(e.target.value)}
					/>
				</div>
				<div>
					<label htmlFor="password">비밀번호</label>
					<input
						type="password"
						id="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<button type="submit">로그인</button>
			</form>
		</div>
	);
}