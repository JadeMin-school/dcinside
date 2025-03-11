import Link from 'next/link';

import "./index.css";



export default function Links() {
	return (
		<div className="links">
			<span className="login">
				<Link href="./login">
					로그인
				</Link>
			</span>
		</div>
	);
}