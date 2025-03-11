'use server';

import type { Post } from "./types.d.ts";

import mysql from 'mysql2/promise';

import CONFIG from "@/secret.json" assert { type: "json" };

const conn = mysql.createPool({
	host: CONFIG.DB.HOST,
	user: CONFIG.DB.USER,
	password: CONFIG.DB.PASSWORD,
	database: CONFIG.DB.DATABASE
});

export async function getPosts(limit: number): Promise<Post[]> {
	try {
		const [rows] = await conn.query("SELECT * FROM posts ORDER BY id DESC LIMIT ?", [limit]);

		return rows as Post[];
	} catch (err) {
		throw err;
	}
}

export async function getPost(id: string): Promise<Post> {
	try {
		const [rows] = await conn.query("SELECT * FROM posts WHERE id = ?", [id]);

		return (rows as Post[])[0];
	} catch (err) {
		throw err;
	}
}