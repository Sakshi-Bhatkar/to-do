"use client"
import React, { use, useState } from 'react'

const page = () => {
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
  
    let renderTask= <h2>No task available</h2>

    if(mainTask.length>0){
    renderTask= mainTask.map(( t, i)=>{

    return(
    <div className='flex justify-between mb-5'>
      <h5 className='text-xl font-semibold'>{t.Title}</h5>
      <h6 className='text-xl font-semibold'>{t.Description}</h6>
    </div>

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

export default page
