import { MdOutlineDone } from "react-icons/md";
import { IoTrashBin } from "react-icons/io5";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useState } from "react";

function Task({ taskname, Date, notes, deadline, isCompleted, removeTask, toglecompleted }) {  
  const [Detaille, setDetaille] = useState(false);

  function handleDetails() {
    setDetaille(!Detaille);
  }

  return (
    <>
      {!Detaille ? (
        <div className={`flex items-center w-[600px] border p-3 m-3 rounded-xl shadow-md 
          ${isCompleted ? "bg-green-200 border-green-500" : "bg-blue-100 border-blue-500"}`}>

          <button 
            className={`p-2 rounded-full transition ${isCompleted ? "bg-green-500 text-white" : "hover:bg-green-500 hover:text-white"}`}
            onClick={toglecompleted}
          >
            <MdOutlineDone size={20} />
          </button>

          <div onClick={handleDetails} className="flex-grow cursor-pointer px-4">
            <h1 className={`text-lg font-semibold ${isCompleted ? "line-through text-gray-500" : "text-gray-800"}`}>
              {taskname}
            </h1>
          </div>

          <button className="hover:text-red-600 transition" onClick={() => removeTask(taskname)}>
            <IoTrashBin size={20} />
          </button>

        </div>
      ) : (
        <div onClick={handleDetails}>
          <div className="h-[400px] w-[600px] bg-blue-200 border-4 border-blue-600 rounded-2xl p-4 m-4 shadow-lg">
            <div className="flex justify-center">
              <h1 className={`text-4xl border-b-2 pb-3 ${isCompleted ? "text-gray-500 line-through" : "text-black"}`}>
                {taskname}
              </h1>
            </div>
            <div className="flex justify-between py-3">
              <p>📅 Start Date: <span className="font-semibold">{Date}</span></p>
              <FaLongArrowAltRight size={30} />
              <p>⏳ Deadline: <span className="font-semibold">{deadline}</span></p>
            </div>
            <p className="text-gray-700 mt-4">
              📝 Notes: <br /> {notes}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default Task;
