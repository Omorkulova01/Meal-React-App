import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './randomMeal.css'

const RandomMeal = () => {
    
    let navigate = useNavigate()

    const [randomMeal, setRandomMeal] = useState([])

    useEffect(() => {
        axios.get('https://www.themealdb.com/api/json/v1/1/random.php').then((res) => {
            setRandomMeal(res.data.meals)
        })
    }, [])

    return (
        <div>
            {
                randomMeal.map((item) => {
                    return (
                        <div className='randomProducts'>
                            <h1>Your random meal:</h1>
                            <div className='mealCard' key={item.idMeal} onClick={() => {navigate(`/${item.idMeal}`)}}>
                                <img src={item.strMealThumb} alt="#" />
                                <h2>{item.strMeal}</h2>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default RandomMeal
