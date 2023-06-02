import { Link } from "react-router-dom";

import "./RecipeList.css";

export default function RecipeList({ recipes }) {
  return (
    <div className="recipe-list">
      sdjkj
      {recipes.map((recipe) => (
        <div key={recipe.id} className="card">
          <h3>{recipe.title}</h3>
          <p> {recipe.cookingTime} To make</p>
          <div>{recipe.method.substring(0, 100)}...</div>
          <Link to={`/recipe/${recipe.id}`}>Cook This</Link>
        </div>
      ))}
    </div>
  );
}
