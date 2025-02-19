import "./App.css";
import Navebar from "./components/Navebar";
import Task from "./components/Task";
import { useState } from "react";
import UseLocalStorage from "./hooks/UseLocalStorage";

function App() {
  const { setItem, getItem } = UseLocalStorage("tasks", []);
  const [Isopen, setIsopen] = useState(false);
  const [Tasks, setTasks] = useState(getItem());
  const [Newtask, setNewktask] = useState({
    taskname: "",
    Date: "",
    deadline: "",
    notes: "",
    isCompleted: false,
  });
  const openprompt = () => {
    setIsopen(true);
  };
  const closeprompt = () => {
    setIsopen(false);
  };
  function handleinputchange(event) {
    const { name, value } = event.target; // heya li t5yrlk lfield 7assb name li 3nd , laken taskname ..., ,
    setNewktask((t) => ({ ...t, [name]: value })); //copying the previous state and updating the taskname , copyina l objext f t and updating the taskname
  }
  function addNewtask() {
    const tasknew = [...Tasks, Newtask];
    setTasks(tasknew);
    setItem(tasknew);
    setNewktask({
      taskname: "task name should apear here",
      Date: "-none-",
      deadline: "-none-",
      notes: " NO NOTES",
      isCompleted: false,
    });
    closeprompt();
  }

  return (
    <>
      {Isopen && (
        <div className="fixed inset-0 bg-gray-500/50 backdrop-blur-sm z-40">
          <div className="fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5/12 h-4/6 bg-blue-200 border-[3px] border-black rounded-lg z-50">
            <div className="flex justify-center p-4">
              <h2 className="text-4xl text-black border-b-2 pb-2 border-black">
                New Task
              </h2>
            </div>
            <form className="flex flex-col p-4">
              <input
                className="border-[3px] border-black rounded-lg p-2 m-2"
                type="text"
                name="taskname"
                value={Newtask.taskname}
                placeholder="Enter task name"
                onChange={handleinputchange}
              />
              <input
                className="border-[3px] border-black rounded-lg p-2 m-2"
                type="date"
                name="Date"
                value={Newtask.Date}
                placeholder="Select date"
                onChange={handleinputchange}

              />
              <input
                className="border-[3px] border-black rounded-lg p-2 m-2"
                type="date"
                name="deadline"
                value={Newtask.deadline}
                onChange={handleinputchange}
                placeholder="Select deadline"
              />
              <input
                className="border-[3px] h-24 border-black rounded-lg p-2 m-2"
                type="text"
                name="notes"
                value={Newtask.notes}
                onChange={handleinputchange}
                placeholder="Add notes"
              />
            </form>

            <div className="flex  justify-end p-4">
              <button
                onClick={closeprompt}
                className="flex justify-center items-center text-2xl text-black border-[3px] h-12 w-30 border-blue-600 rounded-lg m-2 p-2  bg-blue-200 hover:bg-blue-900 hover:text-white"
              >
                cancel
              </button>
              <button
                onClick={addNewtask}
                className="flex justify-center items-center text-2xl text-black border-[3px] h-12 w-30 border-blue-600 rounded-lg m-2 p-2  bg-blue-200 hover:bg-blue-900 hover:text-white"
              >
                add
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="flex">
        <Navebar  className="fixed" />
        <div className="flex flex-col w-full">
          <div className="flex justify-between items-center">
            <h1 className="text-5xl text-black m-6 p-6">Today's Liste</h1>
            <button
              onClick={openprompt}
              className="flex justify-center items-center text-2xl text-black border-[3px] h-12 w-30 border-blue-600 rounded-lg m-2 p-2  bg-blue-200 hover:bg-blue-900 hover:text-white"
            >
              <h1>+ Newtask </h1>
            </button>
          </div>
          <div className="flex  justify-center items-center h-full flex-col">
            {Tasks.map((task, index)=>{
              return <Task taskname={task.taskname} Date={task.Date} notes={task.notes} deadline={task.deadline} key={index} />
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
