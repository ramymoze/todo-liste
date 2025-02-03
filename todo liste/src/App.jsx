import './App.css'
import Navebar from './components/Navebar'
import Newtask from './components/newtask'
function App() {
  return (
   <>
   <div className='flex'>
    <Navebar/>
    
    <Newtask/>
    </div>    
   </>
  )
}

export default App
