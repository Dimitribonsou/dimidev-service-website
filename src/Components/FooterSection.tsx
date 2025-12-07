import React from 'react'

const  FooterSection =()=> {
  return (
    <div className='mt-28 w-full bg-green h-fit md:h-28  flex  md:justify-between justify-center items-center flex-wrap gap-5 py-5 px-3 sm:px-10'>
        <span className="text-white font-medium text-xl"> &copy; dimidev 2025 tout droit reservé  </span>
        <div className="flex justify-end items-center w-11/12 md:w-1/2 lg:w-5/12 h-10 min-w-64">
         <input type="text" placeholder='Entrer votre email pour me suivre' className="rounded-tl-md rounded-bl-md  h-full rounded-x-2 outline-none border-none shadow w-full md:w-1/2 indent-6 text-black" />
         <button className="text-white bg-[#2c2b2b] hover:bg-transparent border-2 transition-all border-[#2c2b2b] hover:text-[#2c2b2b] h-full px-3 rounded-tr-md rounded-br-md">S'abonner</button>
        </div>
    </div>
  )
}
export default FooterSection