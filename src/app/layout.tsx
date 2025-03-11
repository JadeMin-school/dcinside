import type { Metadata, Viewport } from 'next';

import Header from "./components/header";

import "./layout.css";

type Props = Readonly<{
	children: React.ReactNode;
}>;



export const metadata: Metadata = {
	title: "DCInside",
	description: "Clone Coding - DCInside",
};

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
};

export default function RootLayout({ children }: Props) {
	return (
		<html lang="ko">
			<body>
				<Header/>
				{children}
			</body>
		</html>
	);
}