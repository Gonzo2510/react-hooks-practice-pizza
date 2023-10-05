import React, { useEffect, useState } from "react";
import Pizza from "./Pizza";

function PizzaList({pizzas}) {
  const [displayPizza, setDisplayPizza] = useState([])


  
  
  
  //const pizzaObj = pizzas.map(p => <Pizza pizza={p}/>)
  //console.log(pizzaObj)
  //setDisplayPizza(pizzaObj)

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Topping</th>
          <th scope="col">Size</th>
          <th scope="col">Vegetarian?</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
      {pizzas.map((pizza) => (
          <Pizza key={pizza.id} pizza={pizza} />
        ))}
      </tbody>
    </table>
  );
}

export default PizzaList;
