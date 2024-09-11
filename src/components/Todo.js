import React, { useEffect, useRef, useState } from 'react'
import TodoItems from './TodoItems'
import todoicon from '../assests/todo_icon.png'
const Todo = () => {
    const [todo,setTodo] = useState([])
    const inputRef=useRef();
    const editRef=useRef();
    const add = () => {
       const inputText = inputRef.current.value.trim();
       if(inputText === ""){
        return null;
       }
       const newTodo={
        id:Date.now(),
        text:inputText,
        isCompleted:false,
        isEditing:false
       }
       setTodo((prev)=>[...prev,newTodo])
       inputRef.current.value=""
    }

    const edittodo=(id)=>{
      console.log(id);
          setTodo((prevtodo)=>{
          return prevtodo.map((todo)=>{
            if(todo.id === id){
              return {...todo,isediting:!todo.isEditing}
            }
            return todo
          })
        })
    }
    const edittask=(id)=>{
       const edit=editRef.current.value.trim();
       if(edit === ""){
        return null;
       }
       const newTodo={
        id:Date.now(),
        text:edit,
        isCompleted:false,
        isEditing:false
       }
       setTodo((prev)=>[...prev,newTodo])
       editRef.current.value=""
    }
    const toggle=(id)=>{
      setTodo((prevtodo)=>{
        return prevtodo.map((todo)=>{
          if(todo.id === id){
            return {...todo, isCompleted:!todo.isCompleted}
          }
          return todo
        })
      })
    }
    const deletetodo=(id)=>{
      setTodo((prevtodo)=>{
        return prevtodo.filter((todo)=> todo.id !== id)
      })
    }
    useEffect(()=>{
      console.log(todo);
    },[todo])
  return (
    <section className='flex flex-col bg-white p-7 rounded-lg place-self-center min-h-[500px] w-full max-w-md'>
        {/*-----tilte----*/}
        <div className='flex items-center mt-4 gap-1'>
              <img className='w-8' src={todoicon} alt="" />
              <h1 className='text-3xl font-semibold'>Todo-List</h1>
        </div>

        {/*-----input area----*/}
        <div className='flex items-center my-5 bg-gray-200 rounded-full'>
            <input ref={inputRef} className='bg-transparent border-0 outline-none flex-1 pl-5 pr-2 h-14
             placeholder:text-slate-500' type="text" placeholder='Add Task'/>
            <button onClick={add} className='bg-orange-400 cursor-pointer h-14 w-32 border-none 
            rounded-full font-medium'>Add +</button>
        </div>
        
        {/*-----List Items----*/}
        <div>
           {todo.map((items,index)=>{
             return <TodoItems key={index} text={items.text} toggle={toggle} editTodo={edittodo}
             id={items.id} isCompleted={items.isCompleted} deletetodo={deletetodo}
             editRef={editRef} isediting={items.isediting} edittask={edittask}/>
           })}
        </div>
    
    </section>
  )
}

export default Todo
