import Header from "./components/Header";
import Content from "./components/Content";
import Total from "./components/Total";

function App() {
  const course = "Half Stack application development";
  

  const partItems = [
    { id:1,
      partNo: "Fundamentals of React",
      exerciseNo: 10
    },
    {
      id:2,
      partNo: "Using props to pass data",
      exerciseNo: 7
    },
    {
      id:3,
      partNo: "State of a component",
      exerciseNo: 14
    }
  ];

  

  return (
    <div>
      <Header course={course} />
      <Content items={partItems} />
      <Total items={partItems} />
    </div>
  );
}

export default App;
