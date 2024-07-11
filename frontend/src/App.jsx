import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../src/Home/Home";
import Courses from "./Courses/Courses";
import Signup from "./components/Signup";
import { Toaster } from 'react-hot-toast';
import { useAuth } from "./context/AuthProvider";

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
    <div className="dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={authUser?<Courses /> : <Navigate to="/Signup" />} />
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
      <Toaster/>
      </div>
    </>
  );
}

export default App;
