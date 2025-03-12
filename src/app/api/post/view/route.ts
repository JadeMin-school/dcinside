import type { NextRequest } from 'next/server';
import type { FieldPacket } from 'mysql2';

import { getPool } from "@/server/db.ts";



export async function GET(request: NextRequest) {
	const id = request.nextUrl.searchParams.get("id");

	const conn = await getPool();
	const [rows] = await conn.query(
		"SELECT * FROM posts WHERE id = ?",
		[id]
	) as [Post[], FieldPacket[]];

	return new Response(
		JSON.stringify(rows[0])
	);
}