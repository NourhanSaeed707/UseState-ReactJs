import React, { useState } from 'react';

const UseStateObject = () => {
  const [ person, setPerson ] = useState({
    name: 'Nourhan',
    age: 23,
    message: "random message",
  });
  const changeMessage = () => {
    //to change only message properity and stay name and age as it is.
    setPerson({...person, message: 'hello world'});
  }
  return ( 
  <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className='btn' onClick={changeMessage}>Change message</button>
  </>
  );
};

export default UseStateObject;
