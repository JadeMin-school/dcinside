import Links from "./links";
import Logo from "./logo";
import SearchBox from "./search";

import "./index.css";



export default function Header() {
	return (
		<header>
			<div className="first">
				<Links/>
			</div>
			<div className="second">
				<Logo/>
				<SearchBox/>
			</div>
		</header>
	);
}