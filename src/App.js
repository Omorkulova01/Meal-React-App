import Header from './components/header/header'
import Home from './components/home/home'
import MealDetails from './components/mealDetails/mealDetails'
import Footer from './components/footer/footer';
import './App.css';
import { Routes, Route } from 'react-router-dom'

function App() {
  
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:MealId' element={<MealDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
