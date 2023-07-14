import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './home.css'
import MealCard from '../mealCard/mealCard'
import FirstLetter from '../firstLetter/firstLetter'
import Categories from '../categories/categories'
import RandomMeal from '../randomMeals/randomMeal'

const Home = () => {
    
    const [letter, setLetter] = useState('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
    const [meal, setMeal] = useState()
    const [show, setShow] = useState(false)

    const [search, setSearch] = useState('')

    useEffect(() => {
        axios.get(letter).then((res) => {
            setMeal(res.data.meals)
            setShow(true)
        })
    }, [letter])
    
    const setIndex = (index) => {
        setLetter(`https://www.themealdb.com/api/json/v1/1/search.php?f=${index}`)
    }

    const searchMeal = (e) => {
        e.preventDefault()
        setLetter(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        setSearch('')
    }
    
    return (
        <div className='home'>
            <div className="mainCover">
                <div className='main'>
                    <div className='heading'>
                        <h1>Your favourite <span>food</span> delivered <br /> hot & fresh</h1>
                        <p><span>HEALTHY SWITCHER</span> chefs do all the prep work, like peeling, chopping & <br /> marinating, so youcan cook a fresh homemade dinner in just 15 minutes.</p>
                    </div>

                    <form onSubmit={searchMeal} className='searchBar'>
                        <input type='search' className='searchInput' placeholder='Search for a Meal' value={search} onChange={(e) => setSearch(e.target.value)} />
                        <button type='submit' className='searchBtn'>Search</button>
                    </form>
                    
                    <div className="cards">
                        {
                            show ? <MealCard  data = {meal} /> : <p className='notFound'>Not Found</p>
                        }
                    </div>

                    <div className='container'>
                        <FirstLetter letterIndex = {(index) => setIndex(index)} />
                    </div>

                    <RandomMeal />
                </div>
            </div>
            
            <div>
                <Categories />
            </div>
        </div>
    )
}

export default Home
