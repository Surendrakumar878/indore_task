import React from 'react'
import { AiTwotonePhone } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
const Login = () => {
const navigate=useNavigate()
  const onclick=()=>{
navigate("/")
  }
  return (
    <div className='mt-28'>
      <form className="bg-[#151B54] w-72 m-auto my-10 shadow-md rounded px-8 pt-6 pb-8 ">

        <img className='w-64 rounded-fu m-auto' src="transduniyalogo.png" alt="" />

        <h2 className='text-center text-2xl text-white font-bold'> welcome </h2>
  <div className="mb-4 m-auto text-center ">
    <label className="block text-white font-bold my-5" htmlFor="email">
    User Access Number
    </label>
<div className="flex border-b-2 border-l-0 border-r-0 border-t-0   w-[90%] m-auto justify-between gap-3 border-b-white ">

    <AiTwotonePhone className='text-white mt-2 ' />
    <input
      className="shadow appearance-none border  w-[90%] m-auto py-2 px-2 text-white border-b-0 border-l-0 border-r-0 border-t-0 border-b-white bg-[#151B54] leading-tight focus:outline-none focus:shadow-outline"
      id="Number"
      type="Number"
      placeholder="Number"
      />
      </div>
  </div>
  
  <div className=" text-center">
    <button
      className="bg-indigo-400 text-center w-[90%]  text-white font-bold py-1 px-0 rounded focus:outline-none focus:shadow-outline"
      type="button"
    >
      Log In
    </button>

    <div className='text-center text-xs mt-5 text-white'>Don't have account? Registration Here</div>

    <div className='text-center mt-20 text-slate-300 '>Powered By Aanshi Solutions</div>
  </div>
</form>

<div className='text-center '> <button onClick={()=>onclick()} > go back</button> </div>
    </div>
  )
}

export default Login
