import './App.css'
import Navebar from './components/Navebar'
import Newtask from './components/Newtask'
import Task from './components/Task'
function App() {



  return (
   <>
   <div className='flex'>
    <Navebar/>
    <div className='flex flex-col w-full'>
    <Newtask/>
    <div className='flex  justify-center items-center h-full'>
    <Task  taskname="test"/>
    </div>
    </div>

    </div>
        
   </>
  )
}

export default App
