import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue ] = useState(0);
  //reference function
  const reset = () => {
     setValue(0);
  }
  //reference function
  const complexIncrease = () => {
     setTimeout(() => {
      //  setValue(value + 1)
    //in this case it will get the new value not the old one so if we click multiple time every
   // the value will change by +1.
      setValue( (preState) => {
        return preState + 1
      })
     }, 2000);
  }
  return (
     <>
     <section style={{ margin: '4rem 0' }}>
      <h2>Regular counter</h2>
      <h1>{value}</h1>
      <button className='btn' onClick={() => setValue(value -1)}>decrease</button>
      <button className='btn'  onClick={reset}>reset</button>
      <button className='btn' onClick={() => setValue(value +1)}>increase</button>
     </section>

     <section style={{ margin: '4rem 0' }}>
      <h2>Complex counter</h2>
      <h1>{value}</h1>
      <button className='btn' onClick={complexIncrease}>later increase</button>
     </section>
     </>
    );
};

export default UseStateCounter;
