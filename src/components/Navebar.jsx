function Navebar({openprompt , changeTabTotasks , changeTabTopomodoro , Tab} ){

return( 
<>
<div className="flex justify-between items-center">
            <div className="flex">
            <button onClick={changeTabTotasks} className={`text-3xl text-black m-6 p-6   ${Tab === "tasks" ? "text-blue-500 border-b-2 border-blue-500" : "text-black"}`} >Task's Liste</button>
            
            <button onClick={changeTabTopomodoro} className={`text-3xl text-black m-6 p-6 ${Tab === "pomodoro" ? "text-blue-500 border-b-2 border-blue-500" : "text-black"}`}>pomodoro</button>
            </div>
            <button
              onClick={openprompt}
              
              className="flex justify-center items-center text-2xl text-black border-[3px] h-12 w-30 border-blue-600 rounded-lg m-2 p-2  bg-blue-200 hover:bg-blue-900 hover:text-white"
            >
              <h1>+ Newtask </h1>
            </button>
          </div>

</>

)
}
export default Navebar;