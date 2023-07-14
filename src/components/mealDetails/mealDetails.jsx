import React, { useState, useEffect } from 'react'
import './mealDetails.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const MealDetailes = () => {
    
    const { MealId } = useParams()

    const [item, setItem] = useState()
    
    useEffect(() => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${MealId}`).then((res) => {
            setItem(res.data.meals[0])
        })
    })
    
    return (
        <>
            {
                (!item) ? '' : (<>
                    <div className='mealDetailes'>
                        <div className='mealInfo'>
                            <div>
                                <img src={item.strMealThumb} alt="#" />
                                <h1>{item.strMeal}</h1>
                                <h4>Tags: {item.strTags}</h4>
                            </div>
                            
                            <div className='innerContent'>
                                <div className='info'>
                                    <h2>Category: {item.strCategory}</h2>
                                    <h2>Area: {item.strArea}</h2>
                                </div>
                                <div className='Ingredients'>
                                    <h2>Ingredients:</h2>
                                    <ul>
                                        <li>{item.strIngredient1} : {item.strMeasure1}</li>
                                        <li>{item.strIngredient2} : {item.strMeasure2}</li>
                                        <li>{item.strIngredient3} : {item.strMeasure3}</li>
                                        <li>{item.strIngredient4} : {item.strMeasure4}</li>
                                        <li>{item.strIngredient5} : {item.strMeasure5}</li>
                                        <li>{item.strIngredient6} : {item.strMeasure6}</li>
                                        <li>{item.strIngredient7} : {item.strMeasure7}</li>
                                        <li>{item.strIngredient8} : {item.strMeasure8}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <p className='instruction'>{item.strInstructions}</p>
                    </div>
                </>)
            }
            
        </>
    )
}

export default MealDetailes
