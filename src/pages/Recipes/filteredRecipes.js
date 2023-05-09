import "../../components/RecipeList.css";
import { useLocation } from "react-router-dom";

import RecipesDisplay from "../../components/recipelist";

function FilteredRecipesList() {
  const { state } = useLocation();
  const filterRecipesList = state.array;
  const inputOptions = state.checkedBoxes;

  const UrlParameters = inputOptions.join(" + ");
  //console.log(UrlParameters);

  return (
    <div className="container mt-5">
      <h2>Searching recipes related for {UrlParameters} ... </h2>
      <RecipesDisplay data={filterRecipesList} />
    </div>
  );
}

export default FilteredRecipesList;
