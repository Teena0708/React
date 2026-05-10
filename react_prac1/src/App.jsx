const App=()=> {
  const todos=[{
    title: "go to gym",
    done: false
  },
{
  title: "study",
  done: true
}]
const todoComponents = todos.map(todo => <Todo title={todo.title} done={todo.done}/>)
 return(
   <div>
    { todoComponents}
   </div>
  );
}

function Todo({title,done}){
  return (
    <div>
  {title}-{done?"Done":"Not done"}
  </div>
  );
}

export default App;
