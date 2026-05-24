import { useState, useEffect } from "react";

function App() {

  // Load saved color from localStorage
  const [color, setColor] = useState(
    localStorage.getItem("bgColor") || "olive"
  );

  // Update background and save color
  useEffect(() => {
    document.body.style.backgroundColor = color;
    localStorage.setItem("bgColor", color);
  }, [color]);

  // Colors array
  const colors = [
    "red",
    "green",
    "blue",
    "olive",
    "black",
    "white",
    "yellow",
    "pink",
    "purple",
    "orange",
    "aqua",
  ];

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >

      {/* Button Container */}
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-green-50 px-3 py-2 rounded-3xl">

          {colors.map((clr) => (
            <button
              key={clr}
              onClick={() => setColor(clr)}
              className={`outline-none px-4 py-1 rounded-full shadow-lg ${
                clr === "white" ||
                clr === "yellow" ||
                clr === "pink" ||
                clr === "aqua"
                  ? "text-black"
                  : "text-white"
              }`}
              style={{ backgroundColor: clr }}
            >
              {clr.charAt(0).toUpperCase() + clr.slice(1)}
            </button>
          ))}

        </div>
      </div>
    </div>
  );
}

export default App;