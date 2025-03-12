import type { NextRequest } from 'next/server';
import type { FieldPacket } from 'mysql2';

import { getPool } from "@/server/db.ts";



export async function GET(request: NextRequest) {
	const limit = request.nextUrl.searchParams.get("limit");

	const conn = await getPool();
	const [rows] = await conn.query(
		"SELECT id, title, uploader, createdAt FROM posts ORDER BY id DESC LIMIT ?",
		[Number(limit)]
	) as [Post[], FieldPacket[]];

	return new Response(
		JSON.stringify(rows)
	);
}