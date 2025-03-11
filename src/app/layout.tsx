import type { Metadata } from 'next';

import "./layout.css";

type Props = Readonly<{
	children: React.ReactNode;
}>;



export const metadata: Metadata = {
	title: "DCInside",
	description: "Clone Coding - DCInside",
};

export default function RootLayout({ children }: Props) {
	return (
		<html lang="ko">
			<body>
				{children}
			</body>
		</html>
	);
}