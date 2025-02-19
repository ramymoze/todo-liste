function Navebar(){

return(// felx-col beh tglbha colomn 
<>
  <div className="h-screen w-64 bg-blue-600 flex flex-col p-4 flex-shrink-0">
   <div className=" mt-10 text-2xl space-y-8 flex flex-col">
        <button className="border-b-2 border-black p-3 rounded-md hover:bg-blue-800 hover:text-white ">today's tasks</button>
        <button className="border-b-2 border-black p-3 rounded-md hover:bg-blue-800 hover:text-white  ">tasks</button>
        <button className="border-b-2 border-black p-3 rounded-md hover:bg-blue-800 hover:text-white hover: ">calender</button>
    </div>
  </div>

</>

)
}
export default Navebar;