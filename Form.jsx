"use client"
import React, { use, useState } from 'react'


const Form = () => {
    const [Title, setTitle] = useState("")
    const [Description, setDescription] = useState("")
    const [mainTask, setMainTask] = useState([])
  
    const submitHandler=(e)=>{
       e.preventDefault();
       setMainTask([...mainTask,{Title, Description}]);
       setTitle("")
       setDescription("")
       console.log(mainTask)
  
    }
    const deleteHandler =(i)=>{
       let copytask=[...mainTask]
       copytask.splice(i,1)
       setMainTask(copytask)
    }
    
      let renderTask= <h2>No task available</h2>
  
      if(mainTask.length>0){
      renderTask= mainTask.map(( t, i)=>{
  
      return(
      <li 
     key={i} className='flex items-center justify-between mb-8'>
        <div className='flex items-center justify-between mb-5 w-2/3'>
        <h5 className='text-xl font-semibold'>{t.Title}</h5>
        <h6 className='text-lg font-medium'>{t.Description}</h6>
      </div>
  
      <button 
     onClick={()=>{
      deleteHandler(i)
     }
    } className='bg-red-500 text-white px-4 py-2 rounded font-bold'>Delete</button>
      </li>
  
      )
      })
      }
  
     return (
      <>
      <h1 className='bg-black text-white p-5 text-3xl font-bold text-center'>To-Do List</h1>
  
      <form onSubmit={submitHandler} className='flex justify-center items-center'>
        <input type="text" className='text-blue-500 border-zinc-500 border-3 m-5 px-4 py-2' placeholder='Enter your todays task' value={Title}
        onChange={(e)=>{
        setTitle(e.target.value)
        }}/>
  
        <input type="text" className='text-blue-500 border-zinc-500 border-3 m-5 px-4 py-2' placeholder='Enter Description' value={Description}
        onChange={(e)=>{
        setDescription(e.target.value)
        }}/>
  
        <button className='bg-green-700 px-4 py-3 text-2xl text-white font-bold rounded m-5'>Submit Task</button>
      </form>
      <hr />
      <div className='p-8 bg-slate-200'>
       <ul>
        {renderTask}
       </ul>
      </div>
      </>
    )
}

export default Form
