import "./App.css";
import Navebar from "./components/Navebar";
import Task from "./components/Task";
import { useState } from "react";
function App() {
  const [Isopen, setIsopen] = useState(false);
  const openprompt = () => {
    setIsopen(true);
  };
  const closeprompt = () => {
    setIsopen(false);
  };

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
            <div className="">gzgegheh</div>
            <div className="flex  justify-end p-4">
              <button
                onClick={closeprompt}
                className="flex justify-center items-center text-2xl text-black border-[3px] h-12 w-30 border-blue-600 rounded-lg m-2 p-2  bg-blue-200 hover:bg-blue-900 hover:text-white"
              >
                cancel
              </button>
              <button
                onClick={closeprompt}
                className="flex justify-center items-center text-2xl text-black border-[3px] h-12 w-30 border-blue-600 rounded-lg m-2 p-2  bg-blue-200 hover:bg-blue-900 hover:text-white"
              >
                add
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="flex">
        <Navebar />
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
          <div className="flex  justify-center items-center h-full">
            <Task taskname="test" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
