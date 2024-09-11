import React from 'react'
import Tick from '../assests/tick.png'
import Untick from '../assests/not_tick.png'
import Delete from '../assests/delete.png'
import Edit from '../assests/edit.webp'
const TodoItems = ({text,id,isCompleted,deletetodo,toggle,editTodo,isediting,editRef,edittask}) => {
  return (
    <div>
      {isediting? (
          <div className='flex items-center my-3 gap-4'>
            <input type="text" className='flex flex-1 bg-gray-300 border-none rounded-lg h-8 
            placeholder: pl-3' ref={editRef}
            placeholder='Edit Task'/>
            <button onClick={()=>edittask(id)} className='float-end cursor-pointer'>Update</button>
      </div>
      ):(
      <div className='flex items-center my-3 gap-4 '>
      <div onClick={()=>toggle(id)} className='flex flex-1 items-center cursor-pointer '>
        <img className='w-7' src={isCompleted ? Tick : Untick} alt="" />
        <p className={`text-[17px] text-slate-700 ml-4 
          ${isCompleted?"line-through":""}`}>{text}</p>
      </div>
      <img onClick={()=>editTodo(id)} className='w-8 float-end cursor-pointer' src={Edit} alt="" />
      <img onClick={()=>deletetodo(id)} className='w-5 float-end cursor-pointer' src={Delete} alt="" />
     </div>)
     }
    </div>
  )
}
export default TodoItems
