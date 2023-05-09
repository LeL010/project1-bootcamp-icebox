import React, { useState } from "react";
import { recipes } from "../../data/recipesDatabase";
import Pagination from "../../components/Pagination";

function SearchBar() {
  const [state, setstate] = useState({
    query: "",
    list: recipes,
  });
  const HandleChange = (e) => {
    setCurrentPage(1)
    const results = recipes.filter((recipe) => {
      if (e.target.value === "") {
        return recipes;
      } else {
        return recipe.name.toLowerCase().includes(e.target.value.toLowerCase());
      }
    });
    //console.log(results);
    setstate({
      query: e.target.value,
      list: results,
      start: true
    });
  };

  // User is currently on this page
  const [currentPage, setCurrentPage] = useState(1);
  // No of Records to be displayed on each page
  const [recordsPerPage] = useState(5);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

  // Records to be displayed on the current page
  const currentRecords = state.list.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );

  const nPages = Math.ceil(state.list.length / recordsPerPage);

  return (
    <div>
      <form>
        <input type="search" value={state.query} onChange={HandleChange} />
      </form>
      <div className="container">
        <div className="recipe-list">
          {state.list.length === 0
            ? "Your query did not return any results"
            : currentRecords.map((recipe) => {
                return (
                  <div className="recipe-box" key={recipe.name}>
                    <div className="image-container">
                      <img
                        className="recipe-image"
                        src={recipe.image}
                        alt={recipe.name}
                      />
                      <h3 className="recipe-name">{recipe.name}</h3>
                    </div>
                    <div className="recipe-details">
                      <div className="recipe-ingredients">
                        <h4>Ingredients:</h4>
                        <ul>
                          {recipe.ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="recipe-instructions">
                        <h4>Instructions:</h4>
                        <ol>
                          {recipe.instructions.map((instruction, index) => (
                            <li key={index}>{instruction}</li>
                          ))}
                        </ol>
                      </div>
                    </div>
                  </div>
                );
              })}
        </div>
      </div>
      <Pagination
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default SearchBar;
