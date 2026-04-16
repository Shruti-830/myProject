import React from "react";

function App() {

  const courses = [
    { title: "React", desc: "Learn basics of React" },
    { title: "Node", desc: "Backend with Node.js" },
    { title: "MongoDB", desc: "Database basics" },
    { title: "JavaScript", desc: "Core JS concepts" }
  ];

  return (
    <div className="flex flex-wrap">

      {courses.map((item, index) => (
        <div key={index} className="p-4 m-4 shadow-md rounded-lg">
          
          <h1 className="text-lg">{item.title}</h1>
          
          <p>{item.desc}</p>
          
          <button className="mt-2 p-2 bg-blue-500 text-white rounded">
            Click
          </button>

        </div>
      ))}

    </div>
  );
}

export default App;