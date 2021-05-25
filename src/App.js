import "./App.css";
import Shop from "./components/Shop";
import ClassComponent from "./redux/samples/ClassComponent";
import FunctionalComponent from "./redux/samples/FunctionalComponent";

function App() {
  return (
    <div className="App">
      
      <ClassComponent firstName="Sudhakar"></ClassComponent>
      <FunctionalComponent firstName="Sudhakar"></FunctionalComponent>

      {/* <Shop  /> */}
    </div>
  );
}

export default App;
