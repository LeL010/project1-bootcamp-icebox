import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import IngredientList from "./pages/Ingredients/IngredientsPage";
import Recipes from "./pages/Recipes/Recipes";
import Navbar from "./components/Navbar";
import FilteredRecipesList from "./pages/Recipes/FilteredRecipes";

class App extends React.Component {
  render() {
    const Error = () => {
      return <h1>Oops! Page not found!</h1>;
    };

    return (
      <main>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} exact />
          <Route path="/ingredients" element={<IngredientList />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/filteredrecipes" element={<FilteredRecipesList />} />
          <Route element={Error} />
        </Routes>
      </main>
    );
  }
}

export default App;

/*


*/
