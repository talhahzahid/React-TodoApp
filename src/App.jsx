



// // react fragment  <>
// // usestate is a reacts fuction or react ne isko nam hooks ka diya wa hen mostly are used for rendering

import { useRef, useState  } from "react";



const App = ()=>{
  let [todo,setTodo] = useState([]);
  const todoVal = useRef()

const addd = (event)=>{
  event.preventDefault();
  todo.push(todoVal.current.value)
  setTodo([...todo])
  // console.log(todo);
  console.log(todo);
  // console.log("hello");
  todoVal.current.value = ""
}
const deleteTodo = (index)=>{
     console.log("delete" , index);
     todo.splice(index , 1)
     setTodo([...todo])
     
}
const editTodo = (index)=>{
     console.log("edit" , index);
     const editVal = prompt("Enter Todo");
     todo.splice(index , 1 , editVal)
     setTodo([...todo])
     
}
  return (
    <>
        <h1 className="text-center mt-4">Todo App</h1>
        <div className="text-center ">
         <form onSubmit={addd}>
         <input type="text" placeholder="Enter Your Todo" className="mt-3 rounded p-2"  ref={todoVal}  />
          <br />
          <button className="mt-3 btn btn-primary" type="submit">Add Todo</button>
         </form>
        </div> 
        <ul>
          {
            todo.map((item,index)=>{
             return <div className="text-center" key={index}> 
                <h3>{item}
                <button onClick={()=> editTodo(index)} className="btn btn-success m-3">Edit</button> 
                <button onClick={()=> deleteTodo(index)} className="btn btn-danger">Delete</button>
                </h3>
             </div>
          
            })
          }
        </ul>
    </>
  )
}
export default App













// React conter 
// import { useState } from "react"

// const App = ()=>{
//   // let num = 1
//   const [num , setNum] = useState(0)  
//   // for rendereind 
//   function add(){
//     // console.log("hello world");
//     // num  += 1 ;
//     // console.log(num);   

//     setNum(num + 1)
//     // for render

//   }

//   // const [num , setNum1] = useState(0);
//   function less(){
//     // console.log("less");
//     // num1 -= 1;
//     setNum(num - 1)  
//   } 

//   return (
//     <>
//     <h4 className="text-center mt-4">Counter</h4>
//     <h1 className="text-center">{num}</h1>
//     <div className="text-center">
//     <button onClick={add}  className="btn btn-primary m-4" >Add</button>
//     <button onClick={less} className="btn btn-primary m-4" >Less</button>
//     </div>
//     </>
//   )
// }
// export default App