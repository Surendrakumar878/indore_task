import logo from "./logo.svg";

import Vehicleform from "./components/Vehicleform";
import Pdftoprint from "./page/Pdftoprint";
import { Route, Routes } from "react-router-dom";
import Filter from "./page/Filter";
import Loadingslip from "./page/Loadingslip";
import Register from "./page/Register";
import Report3 from "./page/Report3";
import Report2 from "./page/Report2";
import Report1 from "./page/Report1";
import Report4 from "./page/Report4";
import Report5 from "./page/Report5";

import Notification from "./page/Notification";
import Promotion from "./page/Promotion";
import Vehicle_owner_documents from "./page/Vehicle_owner_documents";

function App() {
  return (
    <div>
      {/* <Vehicleform/> */}

      <Routes>
        <Route path="/" element={<Vehicleform />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/print" element={<Pdftoprint />}></Route>
        <Route path="/filter" element={<Filter />}></Route>
        <Route path="/loadingslip" element={<Loadingslip />}></Route>
        <Route path="/report1" element={<Report1 />}></Route>
        <Route path="/report2" element={<Report2 />}></Route>
        <Route path="/report3" element={<Report3 />}></Route>
        <Route path="/report4" element={<Report4 />}></Route>
        <Route path="/report5" element={<Report5 />}></Route>
        <Route path="/promotion" element={<Promotion/>}></Route>
        <Route path="/notification" element={<Notification />}></Route>
        <Route path="/vehicleownerdocuments" element={<Vehicle_owner_documents />}></Route>
      </Routes>
    </div>
  );
}

export default App;
