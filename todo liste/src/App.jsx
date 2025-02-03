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
    <div className='flex justify-between'>
    <h1 className='text-5xl text-black m-6 p-6'>Today's  Liste </h1>
    <Newtask/>
    </div>
    <div className='flex  justify-center items-center h-full'>
    <Task  taskname="test"/>
    </div>
    </div>

    </div>
        
   </>
  )
}

export default App
