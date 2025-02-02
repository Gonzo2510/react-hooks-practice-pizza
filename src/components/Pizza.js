import React from "react";

function Pizza({ pizza }) {
  const {id, topping, size, vegetarian} = pizza
  return (
    <tr key={id}>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian ? 'Yes' : 'No'}</td>
      <td>
        <button type="button" className="btn btn-primary">
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
