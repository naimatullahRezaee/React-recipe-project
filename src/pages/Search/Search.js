import React from "react";
import "./Search.css";
import RecipeList from "../../components/RecipeList";
import { UseFetch } from "../../hooks/UseFetch";
import { useLocation } from "react-router-dom";
export default function Search() {
  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get("q");

  const url = "  http://localhost:3000/recipes?q=" + query;
  const { error, isLoading, data } = UseFetch(url);

  return (
    <div>
      <h2 className="page-title">Recipes Including "{query}"</h2>
      {error && <p className="error">{error}</p>}
      {isLoading && <p className="loading">Loading... </p>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
}
