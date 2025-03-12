import type { NextRequest } from 'next/server';

import { getPool } from "@/server/db.ts";
import { getSHA256 } from "@/server/hash.ts";

interface RequestBody {
	id: string;
	email: string;
	nickname: string;
	password: string;
}



export async function POST(request: NextRequest) {
	const body: RequestBody = await request.json();

	if (!body.id || !body.password) {
		return new Response(
			"Missing id or password",
			{ status: 400 }
		);
	}

	const conn = await getPool();
	const result = await conn.execute(
		"INSERT INTO users (id, nickname, password) VALUES (?, ?, ?)",
		[body.id, body.nickname, await getSHA256(body.password)]
	);

	return new Response(
		JSON.stringify(result)
	);
}