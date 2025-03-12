import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';

const handler = NextAuth({
	session: {
		strategy: "jwt",
		maxAge: 60 * 60 * 24,
	},
	pages: {
		signIn: "/login",
	},
	providers: [
		CredentialsProvider({
			name: "Credentials",
			credentials: {
				id: {},
				password: {}
			},
			async authorize(credentials) {
				const response = await fetch(`${process.env.NEXTAUTH_URL}/api/account/login`, {
					method: "POST",
					body: JSON.stringify({
						id: credentials?.id,
						password: credentials?.password
					}),
				});
				const data = await response.json();

				if (response.status === 200) {
					return data;
				}
				throw new Error(data);
			}
		})
	],
	callbacks: {
		async session({ session, token }) {
			session.user = token.user;
			return session;
		},
		async jwt({ token, user }) {
			if (user)
				//@ts-expect-error
				token.user = user;
			return token;
		}
	}
});



export {
	handler as GET,
	handler as POST
};