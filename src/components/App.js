import React, {useEffect, useState} from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const [pizzas, setPizzas] = useState([])


  useEffect(() => {
    fetch('http://127.0.0.1:3001/pizzas')
    .then(res => res.json())
    .then(data => setPizzas(data))
  }, [])

 const addPizza = (newPizza) => {
  setPizzas([...pizzas, newPizza])
 }

  return (
    <>
      <Header />
      <PizzaForm addPizza={addPizza}/>
      <PizzaList pizzas={pizzas}/>
    </>
  );
}

export default App;


//test message