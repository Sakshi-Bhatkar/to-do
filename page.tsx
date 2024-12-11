import React from 'react'

const page = () => {
  return (
    <>
    <h1 className='bg-black text-white p-5 text-3xl font-bold text-center'>To-Do List</h1>
    <form>
      <input type="text" className='text-blue-500 border-zinc-500 border-3 m-5 px-4 py-2' placeholder='Enter your todays task' name="" id="" />

      <input type="text" className='text-blue-500 border-zinc-500 border-3 m-5 px-4 py-2' placeholder='Enter Description' name="" id="" />

      <input type="time" className='text-blue-500 border-zinc-500 border-3 m-5 px-4 py-2' name="" id="" />

      <button className='bg-green-700 px-4 py-3 text-2xl text-white font-bold rounded m-5'>Submit Task</button>
    </form>
    </>
  )
}

export default page
