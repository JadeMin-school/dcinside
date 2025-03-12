'use client';

import { SessionProvider } from 'next-auth/react';

type Props = Readonly<{
	children: React.ReactNode;
}>;



export default function Providers(props: Props) {
	return (
		<SessionProvider>
			{props.children}
		</SessionProvider>
	);
}