import "./App.css";
import Navebar from "./components/Navebar";
import Task from "./components/Task";
import { useState } from "react";
import UseLocalStorage from "./hooks/UseLocalStorage";

function App() {
  const { setItem, getItem } = UseLocalStorage("tasks", {});
  const [Isopen, setIsopen] = useState(false);
  const [Tasks, setTasks] = useState(getItem() || {});
  const [Newtask, setNewtask] = useState({
    taskname: "",
    Date: "",
    deadline: "",
    notes: "",
    isCompleted: false,
  });
  const [Tab, SetTab] = useState("tasks");
  const changeTabTopomodoro = () => SetTab("pomodoro");
  const changeTabTotasks = () => SetTab("tasks");
  const openprompt = () => setIsopen(true);
  const closeprompt = () => setIsopen(false);
  function toglecompleted(taskname) {
    const updatedTasks = {
      ...Tasks,
      [taskname]: {
        ...Tasks[taskname],
        isCompleted: !Tasks[taskname].isCompleted,
      },
    };
    setTasks(updatedTasks);
    setItem(updatedTasks);
  }

  function removeTask(taskname) {
    const updatedTasks = { ...Tasks };
    delete updatedTasks[taskname];
    setTasks(updatedTasks);
    setItem(updatedTasks);
  }

  function handleinputchange(event) {
    const { name, value } = event.target;
    setNewtask((prev) => ({ ...prev, [name]: value }));
  }

  function addNewtask() {
    const taskname = Newtask.taskname.trim();
    if (!taskname) return;

    const updatedTasks = {
      ...Tasks,
      [taskname]: {
        Date: Newtask.Date,
        deadline: Newtask.deadline,
        notes: Newtask.notes,
        isCompleted: false,
      },
    };

    setTasks(updatedTasks);
    setItem(updatedTasks);

    setNewtask({
      taskname: "",
      Date: "",
      deadline: "",
      notes: "",
      isCompleted: false,
    });

    closeprompt();
  }

  return (
    <>
      {Isopen && (
        <div className="fixed inset-0 bg-gray-500/50 backdrop-blur-sm z-40">
          <div className="fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5/12 h-4/6 bg-blue-200 border-3 border-black rounded-lg z-50">
            <div className="flex justify-center p-4">
              <h2 className="text-4xl text-black border-b-2 pb-2 border-black">
                New Task
              </h2>
            </div>
            <form className="flex flex-col p-4 space-y-4">
              <div className="flex flex-col">
                <label
                  htmlFor="taskname"
                  className="text-lg font-semibold text-gray-800"
                >
                  Task Name
                </label>
                <input
                  id="taskname"
                  className="border-2 border-gray-400 rounded-lg p-2 mt-1 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  type="text"
                  name="taskname"
                  value={Newtask.taskname}
                  placeholder="Enter task name"
                  onChange={handleinputchange}
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="startDate"
                  className="text-lg font-semibold text-gray-800"
                >
                  📅 Starting Date
                </label>
                <input
                  id="startDate"
                  className="border-2 border-gray-400 rounded-lg p-2 mt-1 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  type="date"
                  name="Date"
                  value={Newtask.Date}
                  onChange={handleinputchange}
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="deadline"
                  className="text-lg font-semibold text-gray-800"
                >
                  ⏳ Deadline
                </label>
                <input
                  id="deadline"
                  className="border-2 border-gray-400 rounded-lg p-2 mt-1 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  type="date"
                  name="deadline"
                  value={Newtask.deadline}
                  onChange={handleinputchange}
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="notes"
                  className="text-lg font-semibold text-gray-800"
                >
                  📝 Notes
                </label>
                <textarea
                  id="notes"
                  className="border-2 border-gray-400 rounded-lg p-2 mt-1 h-24 resize-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  name="notes"
                  value={Newtask.notes}
                  onChange={handleinputchange}
                  placeholder="Add notes here..."
                />
                
            <div className="flex justify-end p-4">
              <button
                onClick={closeprompt}
                className="flex justify-center items-center text-2xl text-black border-3 h-12 w-30 border-blue-600 rounded-lg m-2 p-2 bg-blue-200 hover:bg-blue-900 hover:text-white"
              >
                Cancel
              </button>
              <button
                onClick={addNewtask}
                className="flex justify-center items-center text-2xl text-black border-3 h-12 w-30 border-blue-600 rounded-lg m-2 p-2 bg-blue-200 hover:bg-blue-900 hover:text-white"
              >
                Add
              </button>
            </div>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="flex">
        <div className="flex flex-col w-full">
          <Navebar
            className="fixed top-0 left-0 w-full"
            openprompt={openprompt}
            changeTabTotasks={changeTabTotasks}
            changeTabTopomodoro={changeTabTopomodoro}
            Tab={Tab}
          />
          {Tab === "tasks" ? (
            <div className="flex justify-center items-center h-full flex-col">
              {Object.keys(Tasks).length > 0 ? (
                Object.keys(Tasks).map((taskname, index) => {
                  const task = Tasks[taskname];
                  return (
                    <Task
                      key={index}
                      taskname={taskname}
                      Date={task?.Date}
                      notes={task?.notes}
                      deadline={task?.deadline}
                      isCompleted={task?.isCompleted ?? false}
                      removeTask={() => removeTask(taskname)}
                      toglecompleted={() => toglecompleted(taskname)}
                    />
                  );
                })
              ) : (
                <p className="text-lg text-gray-500 mt-4">No tasks available</p>
              )}
            </div>
          ) : (
            <div className="flex justify-center items-center h-full flex-col">
              <p className="text-lg text-gray-500 mt-4">coming soon</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
