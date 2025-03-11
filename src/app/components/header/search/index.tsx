import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import "./index.css";



export default function SearchBox() {
	return (
		<div className="searchbox">
			<input
				type="text"
				placeholder="갤러리 & 통합검색"
			/>
			<button>
				<FontAwesomeIcon icon={faSearch}/>
			</button>
		</div>
	);
}