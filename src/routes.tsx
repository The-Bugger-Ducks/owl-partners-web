import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/Auth/SignIn";

export default function MyRoutes() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/" element={<SignIn />} />
    </Routes>
  );
}
