import  { useEffect, useState } from 'react';
import Recipe from './recipe/Recipe';

const AllRecipes = () => {
    const [recipesData, setRecipeData] = useState([]);
    useEffect(() => {
        // fetch(`http://localhost:5000/recipe`)
        fetch(`https://world-class-recipes-backend.vercel.app/recipe`)
            .then(res => res.json())
            .then(data =>    setRecipeData(data)  )
              
             
               
              
    }, [])

    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-9 '>
            {
                recipesData.map(recipe => <Recipe key={recipe._id} recipe={recipe}>
                  
                </Recipe>)
            }
        </div>
    );
};

export default AllRecipes;