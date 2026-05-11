import { useState } from 'react'
import './App.css'

function App() {
  
  return (
    <>
     <LightBulb/>
    </>
  );
}

function LightBulb(){
  const [bulbOn,setBulbOn]=useState(true);
 return (
    <>
     <BulbState  bulbOn={bulbOn}/>
     <ToggleBulbState setBulbOn={setBulbOn}/>
    </>
  );
}

function ToggleBulbState({setBulbOn}){
  function toggle(){
    setBulbOn(currentState => !currentState)
  }
return (
  <>
  <button onClick={toggle}>Toggle the bulb</button>
  </>
)
}

function BulbState({bulbOn}){
return(
  <>
  {bulbOn ? "Bulb on":"Bulb off"}
  </>
)
}

export default App
