import logo from "./logo.svg";

import Vehicleform from "./components/Vehicleform";
import Pdftoprint from "./page/Pdftoprint";
import { Route, Routes } from "react-router-dom";
import Filter from "./page/Filter";
import Loadingslip from "./page/Loadingslip";
import Register from "./page/Register";
import Report3 from "./page/Overallcurrentbalances";
import Report2 from "./page/Overallwallet";
import Report1 from "./page/Userdetails";
import Report4 from "./page/Vehiclebookingsummary";
import Report5 from "./page/Vehiclescheduledsummary";

import Notification from "./page/Notification";
import Promotion from "./page/Promotion";
import Vehicle_owner_documents from "./page/Vehicle_owner_documents";
import Login from "./page/Login";
import ProfileUpdateForm from "./page/ProfileUpdateForm";
import Vehicle_View from "./page/Vehicle_View";
import View from "./page/View";
import Singlepod from "./page/Singlepod";
import PodRegister from "./page/PodRegister";
import PodRegisterForm from "./page/PodRegisterForm";
import Freight from "./page/Freight";
import Overallcurrentbalances from "./page/Overallcurrentbalances";
import Userdetails from "./page/Userdetails";
import Vehiclebookingsummary from "./page/Vehiclebookingsummary";
import Vehiclescheduledsummary from "./page/Vehiclescheduledsummary";
import VehicleHireHistory from "./page/reports/VehicleHireHistory";
import VehicleMasterInformation from "./page/reports/VehicleMasterInformation";
import Vehicleschedulehistotry from "./page/reports/Vehicleschedulehistotry";


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
        <Route path="/vehiclescheduledsummary" element={<Vehiclescheduledsummary />}></Route>
        <Route path="/Vehiclebookingsummary" element={<Vehiclebookingsummary />}></Route>
        <Route path="/Userdetails" element={<Userdetails />}></Route>
        <Route path="/overallcurrentbalances" element={<Overallcurrentbalances />}></Route>
        <Route path="/promotion" element={<Promotion/>}></Route>
        <Route path="/notification" element={<Notification />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/vehicleownerdocuments" element={<Vehicle_owner_documents />}></Route>
        <Route path="/profileUpdateForm" element={<ProfileUpdateForm />}></Route>
        <Route path="/vehicleview" element={<Vehicle_View />}></Route>
        <Route path="/view" element={<View />}></Route>
        <Route path="/singlepod" element={<Singlepod />}></Route>
        <Route path="/podRegister" element={<PodRegister />}></Route>
        <Route path="/podRegisterForm" element={<PodRegisterForm />}></Route>
        <Route path="/freight" element={<Freight />}></Route>
        <Route path="/VehicleHireHistory" element={<VehicleHireHistory />}></Route>
        <Route path="/VehicleMasterInformation" element={<VehicleMasterInformation />}></Route>
        <Route path="/Vehicleschedulehistotry" element={<Vehicleschedulehistotry />}></Route>
      </Routes>
    </div>
  );
}

export default App;
