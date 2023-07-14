import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './categories.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const Categories = () => {

  const [categories, setCategories] = useState([])

  const [meals, setMeals] = useState([])
  const [products, setProducts] = useState(true)
  const [idMeals, setIdMeals] = useState(false)
  const [details, setDetails] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    axios.get('https://www.themealdb.com/api/json/v1/1/categories.php').then((res) => {
        setCategories(res.data.categories)
      })
  }, [])

  const singleCategory = (category) => {
    axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`).then((res) => {
        setMeals(res.data.meals)
      })
  }

  const ingredients = (idMeal) => {
    axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`).then((res) => {
        setMeals(res.data.meals);
        setOpen(false)
      })
  }

  const filterIngredient = (index)=>{
    axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${index}`).then((res) =>{
      setMeals(res.data.meals)
    })
  }
  
  useEffect(() => {
    console.log(meals);
  }, [meals])

  const btnBack = () => {
        setOpen(false)
        setDetails(false)
        setIdMeals(false)
        setProducts(true)
  }
  
  return (
        <div className="categoriesBlock">
            <h1>Categories:</h1>
            <button className='btnBack' onClick={btnBack}><FontAwesomeIcon icon={faArrowLeft} /></button>

            <div className='cards'>
                {
                  products && (categories.map((meal) => {
                    return (
                      <div className='mealCard' onClick={() => {singleCategory(meal.strCategory)
                        setProducts(false)
                        setIdMeals(true)
                        setOpen(false)}} key={meal.idCategory}>
                          <img src={meal.strCategoryThumb} alt="#" />
                          <h2>{meal.strCategory}</h2>
                      </div>
                    )
                  }))
                }

                {
                  idMeals && (meals.map((index) => {
                    return (
                      <div className='mealCard' onClick={() => {ingredients(index.idMeal)
                        setDetails(true)
                        setProducts(false)
                        setIdMeals(false)}} key={index.idMeal}>
                        <img src={index.strMealThumb} alt="#" />
                        <h2>{index.strMeal}</h2>
                      </div>
                    )
                  }))
                }

                {
                  details && (meals.map((item) => (
                      <div className='detailsBlock'>
                        <div className='productInfo' key={item.idMeal}>
                            <img src={item.strMealThumb} alt="#" />
                            <h2>{item.strMeal}</h2>
                        </div>

                        <div className='productDetails'>
                          <h1>instructions:</h1>
                          <p>{item.strInstructions}</p>
                          <h1>ingredients:</h1>
                            {
                              meals.map((product) => {
                                return (
                                    <div className='filterProducts'>
                                        <div className='filterProduct' onClick={()=>{filterIngredient(product.strIngredient1)
                                        setDetails(false)
                                        setProducts(false)
                                        setOpen(true)
                                        setIdMeals(false)
                                        }}>
                                          <img src={`https://www.themealdb.com/images/ingredients/${product.strIngredient1}.png`} alt="#" />
                                          <h2>{product.strMeasure1}</h2>
                                        </div>

                                        <div className='filterProduct' onClick={()=>{filterIngredient(product.strIngredient2)
                                        setDetails(false)
                                        setProducts(false)
                                        setOpen(true)
                                        setIdMeals(false)
                                        }}>
                                          <img src={`https://www.themealdb.com/images/ingredients/${product.strIngredient2}.png`} alt="#" />
                                          <h2>{product.strMeasure2}</h2>
                                        </div>

                                        <div className='filterProduct' onClick={()=>{filterIngredient(product.strIngredient3)
                                        setDetails(false)
                                        setProducts(false)
                                        setOpen(true)
                                        setIdMeals(false)
                                        }}>
                                        <img src={`https://www.themealdb.com/images/ingredients/${product.strIngredient3}.png`} alt="#" />
                                        <h2>{product.strMeasure3}</h2>
                                        </div>

                                        <div className='filterProduct' onClick={()=>{filterIngredient(product.strIngredient4)
                                        setDetails(false)
                                        setProducts(false)
                                        setOpen(true)
                                        setIdMeals(false)
                                        }}>
                                        <img src={`https://www.themealdb.com/images/ingredients/${product.strIngredient4}.png`} alt="#" />
                                        <h2>{product.strMeasure4}</h2>
                                        </div>

                                        <div className='filterProduct' onClick={()=>{filterIngredient(product.strIngredient5)
                                        setDetails(false)
                                        setProducts(false)
                                        setOpen(true)
                                        setIdMeals(false)
                                        }}>
                                        <img src={`https://www.themealdb.com/images/ingredients/${product.strIngredient5}.png`} alt="#" />
                                        <h2>{product.strMeasure5}</h2>
                                        </div>

                                        <div className='filterProduct' onClick={()=>{filterIngredient(product.strIngredient6)
                                        setDetails(false)
                                        setProducts(false)
                                        setOpen(true)
                                        setIdMeals(false)
                                        }}>
                                        <img src={`https://www.themealdb.com/images/ingredients/${product.strIngredient6}.png`} alt="#" />
                                        <h2>{product.strMeasure6}</h2>
                                        </div>

                                        <div className='filterProduct' onClick={()=>{filterIngredient(product.strIngredient7)
                                        setDetails(false)
                                        setProducts(false)
                                        setOpen(true)
                                        setIdMeals(false)
                                        }}>
                                        <img src={`https://www.themealdb.com/images/ingredients/${product.strIngredient7}.png`} alt="#" />
                                        <h2>{product.strMeasure7}</h2>
                                        </div>

                                        <div className='filterProduct' onClick={()=>{filterIngredient(product.strIngredient8)
                                        setDetails(false)
                                        setProducts(false)
                                        setOpen(true)
                                        setIdMeals(false)
                                        }}>
                                        <img src={`https://www.themealdb.com/images/ingredients/${product.strIngredient8}.png`} alt="#" />
                                        <h2>{product.strMeasure8}</h2>
                                        </div>
                                    </div>
                                )
                              })
                            }
                        </div>
                      </div>
                  )))
                }

                {
                  open && (meals.map((index) => (
                    <div className='mealCard' key={index.idMeal} onClick={()=>{ingredients(index.idMeal);
                      setDetails(true)
                      setProducts(false)
                      setIdMeals(false)}}>
                      <img src={index.strMealThumb} alt="#" />
                      <h2>{index.strMeal}</h2>
                    </div>
                  )))
                }
            </div>
        </div>
  )
}

export default Categories;