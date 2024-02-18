import React, { useState } from "react";
import './App.css'

const App = () => {
  //  Counter is a state initialized to 0
  const [counter, setCounter] = useState(0);

  // Function is called everytime increment button is clicked
  const handleClick1 = () => {
      // Counter state is incremented
      setCounter(counter + 1);
  };

  // Function is called everytime decrement button is clicked
  const handleClick2 = () => {
      // Counter state is decremented
      setCounter(counter - 1);
  };

  return (
      <div className="bg-slate-900 text-white text-center space-y-4 pt-40 h-screen font-semibold">
          <h1 className="text-yellow-400 text-6xl">Counter App</h1>
          <div className="text-5xl py-10">
              {counter}
          </div>
          <div className="space-x-4">
              <button className="bg-green-500 px-4 py-2 rounded hover:bg-green-600" onClick={handleClick1}>
                  Increment
              </button>
              <button className="bg-red-500 px-4 py-2 rounded hover:bg-red-600" onClick={handleClick2}>
                  Decrement
              </button>
          </div>
      </div>
  );
};

export default App;

