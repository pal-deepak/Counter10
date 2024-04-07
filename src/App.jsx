import { useState } from 'react'
import reactLogo from './assets/react.svg'
// for acess varible curr value we use {} curly bruses without doller
// Using useState we update all value simultaniously
function App() {
  let [count, setCount] = useState(0);
 function increase(){
  if(count<20)
   setCount(count+1);
   
  }
  function decrease(){
    if(count>1)
  setCount(count-1);
  }

  return (
    <>
     <h1>Counter project</h1>
     <button onClick={increase}>inc: {count}</button>
     <br />
    <button onClick={decrease}>dec:  {count}</button> 
    </>
  )
}

export default App
