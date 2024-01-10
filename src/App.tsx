import { Routes,Route } from "react-router-dom";

// page components
import Auth from "./pages/auth/auth";
import Invoices from "./pages/invoices/invoices";


function App() {
  return (
    <Routes>
      <Route path="/"  element={<Auth />} />
      <Route path="invoices" element={<Invoices />}/>
    </Routes>
  );
}

export default App;
