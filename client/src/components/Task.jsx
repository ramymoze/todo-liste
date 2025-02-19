import { MdEdit } from "react-icons/md";
import { IoTrashBin } from "react-icons/io5";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useState } from "react";
import UseLocalStorage from "../hooks/UseLocalStorage";
function Task(props) {
  const {removeItem} = UseLocalStorage("tasks", []);
  const [Detaille, setDetaille] = useState(false);
  function handleDetails() {
    setDetaille(!Detaille);
  }
  return (
    <>
      {!Detaille ? (
        <div className="flex">
          <div
            onClick={handleDetails}
            className=" w-[500px] h-[50px] border-2 rounded-2xl border-blue-600 p-4 m-4 flex justify-between bg-blue-200"
          >
            <h1 className="">{props.taskname}</h1>
          </div>
          <div className="flex">
            <button className="mr-2">
              <MdEdit size={20} color="#2563EB" />{" "}
            </button>
            <button>
              <IoTrashBin size={20} color="#2563EB" />
            </button>
          </div>
        </div>
      ) : (
        <div onClick={handleDetails}>
          <div className="h-[400px] w-[600px] bg-blue-200 border-4 border-blue-600 rounded-2xl p-4 m-4">
            <div>
              <div className="flex justify-center ">
                <h1 className="text-4xl text-black border-b-2 pb-3 border-black">{props.taskname}</h1>
              </div>
              <div className="flex justify-between ">
                <p> starting date : {props.Date}</p>
                <FaLongArrowAltRight size={30} />
                <p> deadline :{props.deadline}</p>
              </div>
              <p>
                {" "}
                notes <br />
                {props.notes}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Task;
