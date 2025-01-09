import React from 'react';
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom'
import ImportantTask from './pages/ImportantTask';
import CompletedTask from './pages/CompletedTask';
import IncompleteTask from './pages/IncompleteTask'
import Home from './pages/Home'
import AllTasks from './pages/AllTasks'
const App = () => {
  return (
    <div className='bg-gray-600 text-white h-screen p-2'>
     <Router>
      <Routes>
        <Route exact path='/' element={<Home/>}>
          <Route  index element={<AllTasks/>}/>
          <Route path='/importanttask' element={<ImportantTask/>}/> 
          <Route path='/completedtask' element={<CompletedTask/>}/> 
          <Route path='/incompletetask' element={<IncompleteTask/>}/>   
         </Route> 
      </Routes>
     </Router>
    </div>
  )
};  

export default App;