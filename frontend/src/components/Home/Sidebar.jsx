import React from 'react'
import { FaNotesMedical } from "react-icons/fa";
import { MdOutlineNotificationImportant } from "react-icons/md";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { Link } from 'react-router-dom';
 
const Sidebar = () => {
     const data = [
          {
               title:"All Task",
               icons:<FaNotesMedical />,
               link:"/"
          },
          {
               title:"Important Task",
               icons:<MdOutlineNotificationImportant />,
               link:"/importanttask"
          },
          {
               title:"Completed Task",
               icons:<IoCheckmarkDoneCircle />,
               link:"/completedtask"

          },
          {
               title:"Incompleted Task",
               icons:<RxCross1 />,
               link:"/incompletetask"
          },
     
      ]
  return (
    <>
     <div>
          <h2 className='text-3xl'>Task Management</h2>
          <h4 className='my-2 text-gray-500'>test@gmail.com</h4>
          <hr />
     </div>
          <div>
               {data.map((items,i) =>(
                    <Link to={items.link} key={i} className='my-2 flex items-center gap-4 text-2xl hover:bg-black p-2 rounded transition-all duration-300'>
                       {items.icons}  {items.title}
                    </Link>
               ))}
          </div>
          <div >
               <button className='bg-blue-600 w-full p-2 rounded text-2xl'>Log Out</button>
          </div>
    </>
  )
}

export default Sidebar