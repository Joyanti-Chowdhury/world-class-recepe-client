import React from "react";

const Recipe = ({ recipe }) => {
  const {
    id,
    recipeName,
    recipeImage,
    recipeDetails,
    country,
    purchasedBy,
    category,
    creatorEmail,
  } = recipe;

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            className="h-80 w-80 rounded-md"
            src={recipeImage}
            alt={recipeName}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {recipeName}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>{recipeDetails}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{category}</div>
            <div className="badge badge-outline">{country}</div>
          </div>
        </div>
         <button className="btn btn-primary"> View Recipe</button>
      </div>
    </div>
  );
};

export default Recipe;
