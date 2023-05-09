import "../../components/RecipeList.css";
import SearchBar from "./Searchbar";

function RecipeList() {
  return (
    <div className="container mt-5">
      <h2>List of recipes</h2>
      <SearchBar />
    </div>
  );
}

export default RecipeList;
