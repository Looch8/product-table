import "./App.css";
import foodData from "./foodData";
import SearchBar from "./components/SearchBar";

function App() {
	foodData.map((food) => {
		console.log(food.category);
	});
	return (
		<form className="product-table">
			<SearchBar />
		</form>
	);
}

export default App;
