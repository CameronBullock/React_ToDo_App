import React from 'react';

//Does this component have state?
//Does this component use lifecycle methods
// If no to both it's not a class it's a function (presentational component)

const Item = ({ text, id, completed, onTodoClick }) => (
  <li onClick={() => onTodoClick(id)} style={ completed ? {textDecoration: 'line-through', color: 'gray' }: {}}>
    { text }
  </li>
)

export default Item;
