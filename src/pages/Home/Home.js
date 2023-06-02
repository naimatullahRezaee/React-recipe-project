import React from "react";
import "./Home.css";
import { UseFetch } from "../../hooks/UseFetch";
import RecipeList from "../../components/RecipeList";

export default function Home() {
  const { data, isLoading, error } = UseFetch(
    "  http://localhost:3000/recipes"
  );

  return (
    <div className="home">
      {error && <p className="error"> {error}</p>}

      {isLoading && <p className="loading">Loading... </p>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
}
