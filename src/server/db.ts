import mysql from 'mysql2/promise';

import CONFIG from "@/secret.json" assert { type: "json" };

const conn = mysql.createPool({
	host: CONFIG.DB.HOST,
	user: CONFIG.DB.USER,
	password: CONFIG.DB.PASSWORD,
	database: CONFIG.DB.DATABASE
});



export async function getPool() {
	return conn;
}