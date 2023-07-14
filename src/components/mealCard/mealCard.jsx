import React from 'react'
import './mealCard.css'
import { useNavigate } from 'react-router-dom'

const MealCard = (props) => {
    
    const { data } = props
    
    let navigate = useNavigate()
    
    return (
        <>
            {
                (!data) ? <p className='notFound'>Not Found</p> : data.map((item) => {
                    return (
                        <div className='mealCard' key={item.idMeal} onClick={() => {navigate(`/${item.idMeal}`)}}>
                            <img src={item.strMealThumb} alt="#" />
                            <h2>{item.strMeal}</h2>
                        </div>
                    )
                })
            }
        </>
    )
}

export default MealCard
