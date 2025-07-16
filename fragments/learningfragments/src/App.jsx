import FoodItems from "./components/FoodItems"
import ErrorMessage from "./components/ErrorMeassage"
import './App.css'

function App() {
  let foodItems =["f","b","c","d","e"]

  return <>
    <h1> Healthy Foods</h1>
    <ErrorMessage items={foodItems}></ErrorMessage>
    <FoodItems items={foodItems}></FoodItems>
  
  </>
    
  
}

export default App
