import {  useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
 

//conditional rendering
// function App(){
//   let [counterVisible,setcounterVisible] = useState(true);
//   useEffect(function(){
//     setInterval(function() {
//       setcounterVisible(C => !C)
//       let clock = setInterval(function(){
//         console.log("from inside setInterval");
//         setCount(C=>C+1)
//       },1000);

//       return function(){
//     clearInterval(clock)  //cleanup(stops the clock)....if we dont do this then our clock will run infinite times in background
//    }
//     }, 5000);
//   },[])
//   return (
//     <div>
//     <Counter count = {count}></Counter>
//     </div>
//   )
// }
// //life cycle events are mounting(sirf ek bar run hoga),re-rendering,unmounting
// function Counter(){
//   const [count,setCount]=useState(0);
//   //useeffect gaurd our setInterval from re-renders

//   useEffect(function(){
//    setInterval(function(){
//    let clock= setCount(count => count+1);
//    },1000)
// return function(){
//     clearInterval(clock)  //cleanup(stops the clock)....if we dont do this then our clock will run infinite times in background
//    }
   
//   },[]); 
  
// //no matter how many times page re-renders since se-interval is wrapped into useeffect it only runs once..
//    return(
//      <div>
//      <h1 id="text">{count}</h1>
//     </div>
//    )


// }
// export default App 





