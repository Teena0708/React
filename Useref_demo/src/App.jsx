import { useState ,useRef} from 'react'
import './App.css'


//here useref is used for focusing on element{on clicking button focus goes to first input}
function App() {
 const inputRef = useRef();

 function focusOnInput(){
  inputRef.current.focus();
 }

  return (
    <>
    sign up
    <input ref={inputRef} id="name" type={"text"}></input>
    <input type={"text"}></input>
    <button onClick={focusOnInput}>submit</button>
    </>
  )
}

export default App
