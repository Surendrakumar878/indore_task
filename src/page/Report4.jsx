import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// npm install react-to-print (please install)
import { useReactToPrint } from "react-to-print";

const Report4= () => {
    
        const conponentPDF= useRef();
        const [userData, setUserdata]= useState([]);
      
        useEffect( ()=>{
            const registerUserdata= async()=>{
             axios.get("http://localhost:4000/Vehicle")  
             .then(res=>setUserdata(res.data.data) )
             .catch(error=>console.log(error)); 
    
            }
            registerUserdata();
        },[]);
    
        const generatePDF= useReactToPrint({
            content: ()=>conponentPDF.current,
            documentTitle:"Userdata",
            onAfterPrint:()=>alert("Data saved in PDF")
        });
           console.log(userData)
  return (
    <div>
     <React.Fragment>
            <div className=" sm:w-[80%]  sm:m-auto ">
                <div className="">
                    <div className="">
                      
                    
                   <div ref={conponentPDF}  className=" relative sm:w-full sm:m-auto w-full  bordre border-collapse border-2 h-96 border-black ">
                    <div className="mt-2 bg-[#151B54] mb-4 text-center text-fuchsia-50 w-full">   Vehicle booking summary </div> 
                    <div className=" bordre border-collapse border-2  border-slate-700 pb-2">

                    
                 
                    <table className=" w-full " >
                        <thead className="bg-[#151B54] w-full text-white">
                           <tr>
                            <th className=" text-[0.41rem] p-0 sm:px-2 px-1 lg:p-1 sm:text-base  border border-slate-300">Sr. No</th>
                            <th className=" text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  border border-slate-300">booking  date/time</th>
                            <th className=" text-[0.41rem] p-0 sm:px-2 px-1 lg:p-1 sm:text-base  border border-slate-300">user id</th>
                            <th className=" text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  border border-slate-300"> username</th>
                            <th className=" text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  border border-slate-300">registerd no</th>
                            <th className=" text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  border border-slate-300">vehicle no booked</th>
                            <th className=" text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  border border-slate-300">vehicle owner id </th>
                            <th className=" text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  border border-slate-300">vehicle owner name </th>
                            <th className=" text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  border border-slate-300">freight</th>
                            {/* <th className=" text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  border border-slate-300">Registration date</th> */}
                            <th className=" text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  border border-slate-300">from station </th>
                            <th className=" text-[0.41rem] p-0 sm:px-3 px-1 lg:p-1 sm:text-base  border border-slate-300">to station</th>
                      
                            </tr> 
                        </thead>
                        <tbody>
                            {
                                userData.map( (uData, index)=>(
                                 <tr key={index}>
                                <td className="sm:px-2 px-2 sm:text-base text-base border border-slate-300">{index+1}</td>
                                <td className="sm:px-3 px-2 sm:text-base text-base border border-slate-300">{uData.booking_date_time}</td>
                                <td className="sm:px-3 px-2 sm:text-base text-base border border-slate-300">{uData.user_id}</td>
                                <td className="sm:px-3 px-2 sm:text-base text-base border border-slate-300">{uData.username}</td>
                                <td className="sm:px-3 px-2 sm:text-base text-base border border-slate-300">{uData.registerd_no}</td>
                                <td className="sm:px-3 px-2 sm:text-base text-base border border-slate-300">{uData.vehicle_no_booked}</td>
                                <td className="sm:px-3 px-2 sm:text-base text-base border border-slate-300">{uData.vehicle_owner_id}</td>
                                <td className="sm:px-3 px-2 sm:text-base text-base border border-slate-300">{uData.vehicle_owner_name}</td>
                                <td className="sm:px-3 px-2 sm:text-base text-base border border-slate-300">{uData.freight}</td>
                                <td className="sm:px-3 px-2 sm:text-base text-base border border-slate-300">{uData.from_station}</td>
                                <td className="sm:px-3 px-2 sm:text-base text-base border border-slate-300">{uData.to_station}</td>
                                {/* <td className="sm:px-3 px-2 sm:text-base text-base border border-slate-300">{uData.goodsname}</td>to statio */}
                                <td>
                                    {/* <Link to="/userEdit" className="btn btn-success mx-2">Edit</Link>
                                    <Link to="/userDelete" className="btn btn-danger">Delete</Link> */}
                                </td>
                            </tr>
                            )) }
                        </tbody>                        
                    </table>         
                    <div className="absolute top-40 w-96 left-96 opacity-10">

<img className="w-full" src="transduniyalogo.png" alt="" />

</div>
<h1 className="text-end text-xs">Powered by : www.transduniya.com-97553-22022 </h1>
</div>
</div>
                    <div className="d-grid d-md-flex justify-content-md-end mb-3" >
                    <button className="btn btn-success bg-blue-400 py-3 px-2 w-28 text-xl mt-10 rounded-lg text-white " onClick={ generatePDF}>Print</button>                       
                    </div> 
                    </div>
                </div>
            </div>           
        </React.Fragment>
    </div>
  )
}

export default Report4
