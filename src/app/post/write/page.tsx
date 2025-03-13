'use client';

import type { FormEventHandler } from 'react';

import { useState } from 'react';



export default function PostWrite() {
	const onSubmit: FormEventHandler = (event) => {
		event.preventDefault();
	};


	return (
		<div className="post-write">
			<h1>글쓰기</h1>
			<form onSubmit={onSubmit}>
				<input type="text" placeholder="제목"/>
				<textarea placeholder="내용"></textarea>
				<button type="submit">작성</button>
			</form>
		</div>
	);
}