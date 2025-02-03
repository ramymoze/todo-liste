import { MdEdit } from "react-icons/md";
function Task(props){

return(
<>
<div>
    <div className="w-[600px] h-[50px] border-2 rounded-2xl border-blue-600 p-4 m-4 flex justify-between bg-blue-200">
    <h1 className="">{props.taskname}</h1> <MdEdit ize={40} color="#FFA500" />
    </div>
    <div className="w-[600px] h-[50px] border-2 rounded-2xl border-blue-600 p-4 m-4 flex justify-between bg-blue-200">
    <h1 className="">{props.taskname}</h1> 
    </div>
    <div className="w-[600px] h-[50px] border-2 rounded-2xl border-blue-600 p-4 m-4 flex justify-between bg-blue-200">
    <h1 className="">{props.taskname}</h1> 
    </div>
    <div className="w-[600px] h-[50px] border-2 rounded-2xl border-blue-600 p-4 m-4 flex justify-between bg-blue-200">
    <h1 className="">{props.taskname}</h1> 
    </div>
</div>

</>
)
}

export default Task;