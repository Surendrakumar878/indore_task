import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// npm install react-to-print (please install)
import { useReactToPrint } from "react-to-print";

function Pdftoprint({ vis = true }) {
  console.log(vis);
  const conponentPDF = useRef();
  const [userData, setUserdata] = useState([]);

  useEffect(() => {
    const registerUserdata = async () => {
      axios
        .get("http://localhost:4000/Vehicle")
        .then((res) => setUserdata(res.data.data))
        .catch((error) => console.log(error));
    };
    registerUserdata();
  }, []);

  const generatePDF = useReactToPrint({
    content: () => conponentPDF.current,
    documentTitle: "Userdata",
    onAfterPrint: () => alert("Data saved in PDF"),
  });
  console.log(userData);
  return (
    <React.Fragment>
      <div className=" sm:w-[80%]  sm:m-auto ">
        <div className="">
          <div className="">
            <h5 className="mt-2">Report</h5>

            <div
              ref={conponentPDF}
              className=" relative sm:w-full sm:m-auto w-full  bordre border-collapse border-2 m-10  "
            >
              <div className=" bordre border-collapse border-2  border-slate-700 pb-2">
                <h1 className="font-bold text-base"> Rahul</h1>
                <h1 className="font-bold text-base"> Branch :Bhopal </h1>
                <p>106,Near Pani Pouch Factory,Opp.Star Steel,BHOPAL,MP</p>
                <p>Phone No : 07554277142 Fax No :</p>

                <h2 className="font-bold text-base border border-t-2  border-slate-700 border-b-0 border-r-0 border-l-0">
                  Booking Register as on Date : 20/04/2023
                </h2>
                <h1 className="font-bold text-base border border-t-2  border-slate-700 border-b-0 border-r-0 border-l-0 ">
                  BOOKING STATION : BHOPAL
                </h1>
                <h1 className="font-bold text-base border border-t-2  border-slate-700 border-b-0 border-r-0 border-l-0">
                  Date From : 4/20/2023 To : 4/20/2023
                </h1>
                <table className="  ">
                  <thead className="bg-blue-400 text-white">
                    <tr>
                      <th className="sm:px-2 px-2 sm:text-base text-base border border-slate-300">
                        Sr. No
                      </th>
                      <th className="sm:px-3 px-2 sm:text-base text-base border border-slate-300">
                        enqno
                      </th>
                      <th className="sm:px-3 px-2 sm:text-base text-base border border-slate-300">
                        from
                      </th>
                      <th className="sm:px-3 px-2 sm:text-base text-base border border-slate-300">
                        enq date
                      </th>
                      <th className="sm:px-3 px-2 sm:text-base text-base border border-slate-300">
                        {" "}
                        date
                      </th>
                      <th className="sm:px-3 px-2 sm:text-base text-base border border-slate-300">
                        to
                      </th>
                      <th className="sm:px-3 px-2 sm:text-base text-base border border-slate-300">
                        vehicle type
                      </th>
                      <th className="sm:px-3 px-2 sm:text-base text-base border border-slate-300">
                        vehicle size
                      </th>
                      <th className="sm:px-3 px-2 sm:text-base text-base border border-slate-300">
                        vehicle capacity
                      </th>
                      <th className="sm:px-3 px-2 sm:text-base text-base border border-slate-300">
                        number of tyres
                      </th>
                      <th className="sm:px-3 px-2 sm:text-base text-base border border-slate-300">
                        total weight
                      </th>
                      <th className="sm:px-3 px-2 sm:text-base text-base border border-slate-300">
                        goods name
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {userData.map((uData, index) => (
                      <tr key={index}>
                        <td className="sm:px-2 px-2 sm:text-base text-base border border-slate-300">
                          {index + 1}
                        </td>
                        <td className="sm:px-3 px-2 sm:text-base text-base border border-slate-300">
                          {uData.enqno}
                        </td>
                        <td className="sm:px-3 px-2 sm:text-base text-base border border-slate-300">
                          {uData.from}
                        </td>
                        <td className="sm:px-3 px-2 sm:text-base text-base border border-slate-300">
                          {uData.date}
                        </td>
                        <td className="sm:px-3 px-2 sm:text-base text-base border border-slate-300">
                          {uData.enqdate}
                        </td>
                        <td className="sm:px-3 px-2 sm:text-base text-base border border-slate-300">
                          {uData.to}
                        </td>
                        <td className="sm:px-3 px-2 sm:text-base text-base border border-slate-300">
                          {uData.vehicletype}
                        </td>
                        <td className="sm:px-3 px-2 sm:text-base text-base border border-slate-300">
                          {uData.vehiclesize}
                        </td>
                        <td className="sm:px-3 px-2 sm:text-base text-base border border-slate-300">
                          {uData.vehiclecapacity}
                        </td>
                        <td className="sm:px-3 px-2 sm:text-base text-base border border-slate-300">
                          {uData.numberoftyres}
                        </td>
                        <td className="sm:px-3 px-2 sm:text-base text-base border border-slate-300">
                          {uData.totalweight}
                        </td>
                        <td className="sm:px-3 px-2 sm:text-base text-base border border-slate-300">
                          {uData.goodsname}
                        </td>
                        <td>
                          {/* <Link to="/userEdit" className="btn btn-success mx-2">Edit</Link>
                                    <Link to="/userDelete" className="btn btn-danger">Delete</Link> */}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="absolute top-40 w-96 left-96 opacity-10">
                  <img className="w-full" src="transduniyalogo.png" alt="" />
                </div>
                <h1 className="text-end text-xs">
                  Powered by : www.transduniya.com-97553-22022{" "}
                </h1>
              </div>
            </div>
            <div className="d-grid d-md-flex justify-content-md-end mb-3">
              {vis && (
                <button
                  className="btn btn-success bg-blue-400 py-3 px-2 w-28 text-xl mt-10 rounded-lg text-white "
                  onClick={generatePDF}
                >
                  Print
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Pdftoprint;
