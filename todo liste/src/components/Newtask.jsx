function Newtask() {
    return (
        <>
           <div className="flex w-full h-20 text-5xl text-black m-6"> <h1>Today's  Liste </h1></div>

        <div className="w-full h-20 flex justify-end mr-4">
            <button className="text-2xl text-black border-[3px]  border-blue-600 rounded-lg m-2 p-2 bg-blue-200">
                + Newtask</button>
        </div>
        </>
        )
}
export default Newtask;