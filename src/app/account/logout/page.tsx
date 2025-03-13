'use client';

import { signOut } from 'next-auth/react';

import "./index.css";



export default function Logout() {
	signOut({ callbackUrl: "/" });

	return (
		<div>로그아웃 중...</div>
	);
}