import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound/NotFound";
import Signup from "./pages/Signup/Signup";

import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import Notes from "./pages/Notes/Notes";
import Tasks from "./pages/Tasks/Tasks";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/notes" element={<Notes />} />
      <Route path="/tasks" element={<Tasks />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;