import React from "react";
import "./RecipeList.css";
import { recipes } from "../../data/recipesDatabase";

function RecipeList() {
  return (
    <div className="container">
      <div className="recipe-list">
        {recipes.map((recipe) => (
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
        ))}
      </div>
    </div>
  );
}

export default RecipeList;
