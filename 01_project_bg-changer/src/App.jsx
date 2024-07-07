import { useState } from "react";
import "./App.css";

function App() {
  const [color, setcolor] = useState("olive");

  return (
    <>
      <div className="flex justify-center items-center position-relative w-full h-screen bg-gray-700 duration-200" style={{backgroundColor:color}}>
        <div className="box flex flex-wrap justify-center items-center gap-2 w-5/6 h-14 mb-6 text-black  bg-slate-300 rounded-3xl m-auto">
          <button
            onClick={()=> setcolor("red")}
            className="outline-none px-6 py-2 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red", color: "black"  }}
          >
            Red
          </button>

          <button
            onClick={()=> setcolor("green")}
            className="outline-none px-6 py-2 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "green", color: "black" }}
          >
            Green
          </button>

          <button
            onClick={()=> setcolor("black")}
            className="outline-none px-6 py-2 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "black" }}
          >
            black
          </button>

          <button
            onClick={()=> setcolor("blue")}
            className="outline-none px-6 py-2 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "blue", color: "black"  }}
          >
            blue
          </button>

          <button
            onClick={()=> setcolor("olive")}
            className="outline-none px-6 py-2 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "olive", color: "black"  }}
          >
            olive
          </button>

          <button
            onClick={()=> setcolor("gray")}
            className="outline-none px-6 py-2 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "gray", color: "black"  }}
          >
            Gray
          </button>

          <button
            onClick={()=> setcolor("yellow")}
            className="outline-none px-6 py-2 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "yellow", color: "black"  }}
          >
            Yellow
          </button>

          <button
            onClick={()=> setcolor("pink")}
            className="outline-none px-6 py-2 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "pink", color: "black"  }}
          >
            Pink
          </button>

          <button
            onClick={()=> setcolor("purple")}
            className="outline-none px-6 py-2 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "purple", color: "black"  }}
          >
            Purple
          </button>

          <button
            onClick={()=> setcolor("lavender")}
            className="outline-none px-6 py-2 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "lavender", color: "black"  }}
          >
            Lavender
          </button>

          <button
            onClick={()=> setcolor("white")}
            className="outline-none px-6 py-2 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "white", color: "black"  }}
          >
            White
          </button>

        </div>
      </div>
    </>
  );
}

export default App;
