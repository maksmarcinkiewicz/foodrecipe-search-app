import React, {useState} from 'react'
import RecipeDetails from './RecipeDetails'

const Recipe = ({recipe}) => {
    
    const [show, setShow] = useState(false)

    const {label, image, url, ingredients} = recipe.recipe
    
    return (
        <div className='recipe'>
            
            <img src={image} alt={label} />
            <h2>{label}</h2>
            <a href={url} target='_blank' rel='noopener noreffer'>
                FULL RECIPE URL
            </a>
            <button onClick={() => setShow(!show)}>Ingredients</button>
            {show && <RecipeDetails ingredients={ingredients}/>}
        </div>
    )
}

export default Recipe
