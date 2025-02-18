import { MdEdit } from "react-icons/md";
import { IoTrashBin } from "react-icons/io5";
import { useState } from "react";
function Task(props){
 
     const[Detaille, setDetaille]=useState(false);
     function handleDetails() {
        setDetaille(!Detaille);
    }   
return(
<>
{ !Detaille ?
<div onClick={handleDetails}>
    
    <div className="w-[600px] h-[50px] border-2 rounded-2xl border-blue-600 p-4 m-4 flex justify-between bg-blue-200">
    <h1 className="">{props.taskname}</h1> 
<div className="flex ">
    <button className="mr-2"><MdEdit size={20} color="#FFA500" /> </button>
    <button><IoTrashBin  size={20} color="#FFA500"/></button>
    </div>
    </div>
 
</div>
:
<div onClick={handleDetails}>
    <div className="h-[400px] w-[600px] bg-blue-200 border-4 border-blue-600 rounded-2xl p-4 m-4">
        <div>
            <h1 className="text-4xl">{props.taskname}</h1>
            <p>  date to start :  {props.Date}</p>
            <p> deadline  :{props.deadline}</p>
            <p>  notes <br />
                {props.notes}</p>
        </div>
    </div>
</div>

}
</>
)
}

export default Task;