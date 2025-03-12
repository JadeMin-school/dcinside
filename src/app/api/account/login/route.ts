import type { NextRequest } from 'next/server';
import type { FieldPacket } from 'mysql2';

import { getPool } from "@/server/db.ts";
import { getSHA256 } from "@/server/hash.ts";

interface RequestBody {
	id: string;
	password: string;
}



export async function POST(request: NextRequest) {
	const body: RequestBody = await request.json();

	if (!body.id || !body.password) {
		return new Response(
			JSON.stringify("Missing parameters"),
			{ status: 400 }
		);
	}

	const conn = await getPool();
	const [rows] = await conn.query(
		"SELECT * FROM users WHERE id = ?",
		[body.id]
	) as [Account[], FieldPacket[]];

	if (rows.length === 0) {
		return new Response(
			JSON.stringify("해당 계정은 존재하지 않습니다."),
			{ status: 404 }
		);
	}

	if (rows[0].password !== await getSHA256(body.password)) {
		return new Response(
			JSON.stringify("ID 혹은 비밀번호가 일치하지 않습니다."),
			{ status: 401 }
		);
	}
	const { password, ...userWithoutPassword } = rows[0];

	return new Response(
		JSON.stringify(userWithoutPassword)
	);
}