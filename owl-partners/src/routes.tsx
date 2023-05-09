import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard/Dashboard";
import Auth from "./pages/Auth/Auth";

function MyRoutes() {
    return (
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    );
  }
  
  export default MyRoutes;