import logo from "@/public/logo.png";

import "./index.css";



export default function Logo() {
	return (
		<div className="logo">
			<img src={logo.src}/>
		</div>
	);
}