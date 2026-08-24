import { Routes, Route } from "react-router";
import MainLayouts from "./components/Layouts/MainLayouts";
import DashBoard from "./pages/DashBoard";
import Students from "./pages/Students";
import StudentDetails from "./pages/StudentDetails";
import Reports from "./pages/Reports";


function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayouts />}>
        <Route index element={<DashBoard />} />
        <Route path="/students" element={<Students />} />
        <Route path="/students/:id" element={<StudentDetails />} />
        <Route path="/reports" element={<Reports />} />
      </Route>
    </Routes>
  );
}

export default App;

