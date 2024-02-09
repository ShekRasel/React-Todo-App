import { useState } from 'react';
import './App.css'
import './responsive.app.css'

function App() {
  let [todo,setTodo] = useState([]);
  console.log(todo);

  let todoList = (event)=>{
    const inputValue = event.target.todoName.value;

    if(todo.includes(inputValue)){
      alert('Already exist')
    }else{
      let todoList  = [...todo,inputValue];
       setTodo(todoList);
    }
    event.preventDefault();
  }

  const task = todo.map((values , i )=>{
    return(
      <List value = {values} key={i} index = {i} todo = {todo} setTodo = {setTodo}/>
    )
  })


  return (
    <div className='TodoCard'>
      <h1 className='Header'>ToDo List App:</h1>
      <form onSubmit={todoList}>
          <input type="text" name='todoName'/><button>Save</button>
      </form>

      <div className='outsider'>
          {task}
      </div>
        
    </div>
  )
}

export default App;

function List ({value , index , setTodo, todo}){

  const [status,setStatus] = useState(false);
  const checkStatus = ()=>{
    setStatus(!status)
  }

  function deletTodo(){
    const finalData = todo.filter((v,i)=> i!= index)
    setTodo(finalData);
  }
  return(
    <ul>
      <li onClick={checkStatus} className={ status ? 'lineThrough':''}> {`${index + 1}.`} {value} <span onClick={deletTodo}>&times;</span> </li>
    </ul>
  )
};