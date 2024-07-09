import { Route, Routes } from "react-router-dom";
import Home from "../src/Home/Home";
import Courses from "./Courses/Courses";
import Signup from "./components/Signup";

function App() {
  return (
    <>
    <div className="dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
      </div>
    </>
  );
}

export default App;
