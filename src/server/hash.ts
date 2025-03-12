export async function getSHA256(input: string) {
	const buffer = new TextEncoder().encode(input);
	const hashBuffer = await crypto.subtle.digest("SHA-256", buffer);
	const hashArray = Array.from(new Uint8Array(hashBuffer));
	const hash = hashArray
		.map(item => item.toString(16).padStart(2, "0"))
		.join('');

	return hash;
}