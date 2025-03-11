import Links from "./links";
import SearchBox from "./search";

import "./index.css";
import Logo from "./logo";



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