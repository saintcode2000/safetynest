import { Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Portal from "./pages/Portal";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/portal" element={<Portal />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/admin" element={<Admin />} />



      

    </Routes>
  );
}
