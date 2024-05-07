export default function SearchBar() {
	return (
		<form className="searchbar-container">
			<input
				type="text"
				placeholder="Search..."
				className="searchbar"
			></input>
			<label>
				<input type="checkbox" className="search-checkbox" />
				Only show products in stock
			</label>
		</form>
	);
}
