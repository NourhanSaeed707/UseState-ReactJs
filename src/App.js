import React from 'react'
import Setup from "./tutorial/1-useState/setup/2-useState-basics";
import ArrayUseCase from "./tutorial/1-useState/setup/3-useState-array";
import ObjectUseCase from "./tutorial/1-useState/setup/4-useState-object";
import CounterUseCase from "./tutorial/1-useState/setup/5-useState-counter";

// import Final from "./tutorial/1-useState/final/1-error-example";
function App() {
  return (
    <div className='container'>
      <Setup/>
      <ArrayUseCase/>
      <br/>
      <ObjectUseCase/>
      <CounterUseCase/>
      
    </div>
  )
}

export default App
