import React from 'react'
import Sidebar from '../components/Home/Sidebar'
const Home = () => {
  return (
    <div className='flex h-[98vh] gap-4'>
     <div className=' border rounded-xl border-gray-500 w-1/5 p-4'>
        <Sidebar/>
     </div>
     <div className='border rounded-xl border-gray-500 w-5/6 p-4'>Hello2</div>
    </div>
  )
}

export default Home