import React from 'react'
import { BsBookmarkHeart } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";

const Cards = () => {
     const data =[
          {
               title:"The Best Coding Cannel",
               desc:" I have to create my channel the best ever coding channel in hindi for those who do not understand english properly"
          },
          {
               title:"CPP Concepts",
               desc:"I need to clear basic of cpp Topic:abstraction,polymorphism,virtual function"
          },
          {
               title:"Assignment",
               desc:"My assignment on 30 march,I Have to complete it"
          },
          {
               title:"Project",
               desc:"For the project i need to watch some tutorials of the coding and research the information"
          },   
     ]
     return <div className='grid grid-cols-3 gap-4 p-4'>
          {data&& data.map((items,i)=> 
          <div className='bg-teal-950 border-amber-50 rounded-lg p-4 shadow-lg shadow-amber-50 flex flex-col justify-between'>
          <div >
               <h3 className='text-xl font-semibold'>{items.title}</h3>
               <p className='text-gray-300 my-2'>{items.desc}</p>
          </div> 
          <div className='mt-4 w-full flex items-center'>
                    <button className='bg-red-600 p-2 rounded text-md text-xl'>In Complete</button>
                    <div className='text-white p-2 w-3/6 text-2xl flex justify-around'>
                         <button ><BsBookmarkHeart /></button>
                         <button><FaRegEdit /></button>
                         <button><RiDeleteBin5Line /></button>
                    </div>
               </div>
          </div>
          )}
     </div>
}


export default Cards