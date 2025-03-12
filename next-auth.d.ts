import type { DefaultSession, DefaultUser } from 'next-auth';
import { AdapterUser } from 'next-auth/adapters';
import type { JWT, DefaultJWT } from 'next-auth/jwt';

declare module 'next-auth' {
	interface Session {
		user: Account & DefaultSession['user'];
	}
}

declare module 'next-auth/jwt' {
	interface JWT {
		user: Account & DefaultJWT;
	}
}