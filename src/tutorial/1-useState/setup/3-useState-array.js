import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [ people, setPeople ] = React.useState(data);
  const removeItem = (id) => {
//here we filter so we write that every id that doesn't match in array remove it and return the matching the rest of them.
      let newPeople = people.filter( (person) => person.id !== id);
      console.log(newPeople);
      setPeople(newPeople);
  }
  return <>
  {
    people.map( (person) => { 
      const { id, name } = person;
      return(
        <div key={id} className='item'>
          <h4>{name}</h4>
          <button className='btn' onClick={ () => removeItem(id)}>Remove</button>
        </div>
      )
     })}
     <button className='btn' onClick={ () => setPeople([])}>Clear items</button>
  </>;
};

export default UseStateArray;
