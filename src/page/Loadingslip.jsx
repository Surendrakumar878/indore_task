
import React, { useState, useEffect, useRef } from "react";
import { useReactToPrint } from "react-to-print";
const Loadingslip = () => {
  const conponentPDF= useRef();
    const [userData, setUserdata]= useState([]);
    const generatePDF= useReactToPrint({
      content: ()=>conponentPDF.current,
      documentTitle:"Userdata",
      onAfterPrint:()=>alert("Data saved in PDF")
  });
  return (
    <div>
    <div ref={conponentPDF} className="w-[80%] m-auto py-10">


   
      <h1 className=" text-center text-base font-semibold sm:font-bold sm:text-3xl sm:text-center">Loadingslip</h1>
      <h1 className=" text-center text-base font-semibold sm:font-bold sm:text-3xl sm:text-center">VEHICLE NO : 47564</h1>
      <div>
        <div class="relative grid grid-cols-7  border-2 border-black text-xs sm:text-base ">
          <div className="col-start-1 col-end-8 flex">
            <div class=" w-1/2   border border-r-2 border-l-0 border-b-0 border-t-0 border-black pb-4">
              Booking no
            </div>
            <div class=" w-1/2  border border-r-0 border-l-0 border-b-0 border-t-0">
              Booking date / Time :
            </div>
          </div>
          <div class="col-start-1 col-end-8 text-center font-semibold  border border-r-0 border-l-0 border-b-2 border-t-2 border-black  bg-zinc-400">
            PARTY DETAILS
          </div>
          <div className="col-start-1 col-end-8 flex">
            <div class="w-1/2 border border-r-2 border-l-0 border-b-0 border-t-0 border-black">
              <p>Consignee</p>
              <p>name :</p>
              <p>Address:</p>
              <p> Phone :</p>
              <p>GST :</p>
            </div>
            <div class="w-1/2   border border-r-2 border-l-0 border-b-2 border-t-0">
              <p>Consignee</p>
              <p>name :</p>
              <p>Address:</p>
              <p> Phone :</p>
              <p>GST :</p>
            </div>
          </div>

          <div class="col-start-1 col-end-8 text-center font-semibold  bg-zinc-400  border border-r-0 border-l-0 border-b-2 border-t-2 border-black">
            LOAD PICKUP / DELIVERY
          </div>
          <div className="col-start-1 col-end-8 flex">
            <div class=" w-1/2  border border-r-2 border-l-0 border-b-0 border-t-0 border-black">
              Load Pickup Address :
            </div>
            <div class=" w-1/2  border border-r-2 border-l-0 border-b-2 border-t-0 pb-20">
              Load Delivery Address :
            </div>
          </div>
          <div class="col-start-1 col-end-8 text-center font-semibold  bg-zinc-400  border border-r-0 border-l-0 border-b-2 border-t-2 border-black">
            GOODS DETAILS
          </div>
          {/* 
          <div class="col-start-1 col-end-7 text-center font-semibold  ">

            <div className="grid grid-cols-7 border-r-0 border-l-0 border-b-2 border-t-0 border-black"> */}

          <div class=" border border-r-2 border-l-0 border-b-2 border-t-0 border-black">
            Pkgs
          </div>
          <div class=" border border-r-2 border-l-0 border-b-2 border-t-0 border-black">
            Pkg type
          </div>
          <div class=" border border-r-2 border-l-0 border-b-2 border-t-0 border-black">
            Goods Name
          </div>
          <div class=" border border-r-2 border-l-0 border-b-2 border-t-0 border-black">
            Actual wt
          </div>
          <div class=" border border-r-2 border-l-0 border-b-2 border-t-0 border-black">
            Charged WT
          </div>
          <div class=" border border-r-2 border-l-0 border-b-2 border-t-0 border-black">
            Rate
          </div>
          <div class=" border border-r-0 border-l-0 border-b-2 border-t-0 border-black">
            Freight
          </div>
          {/* </div>
          </div> */}

          <div className=" col-start-1 col-end-6 border border-r-2 border-l-0 border-b-0 border-t-0 border-black">
            <h1 className="border border-r-0 border-l-0 border-b-2 border-t-0 border-black bg-zinc-400 text-center">
              VEHICLE DETAILS
            </h1>
            <p>Vehicle no :</p>
            <p>Chasis no :</p>
            <p>Engine no :</p>
            <p>Owner name:</p>
            <p>Owner PAN no</p>
            <p>Owner contact no </p>
          </div>
          <div className=" col-end-8 col-span-2 flex">
            <div className="w-1/2 border border-r-2 border-l-0 border-b-0 border-t-0 border-black">
              Loading charges
            </div>
            <div className="w-1/2 "></div>
          </div>

          <div className=" col-start-1 col-end-6 border border-r-2 border-l-0 border-b-0 border-t-2 border-black">
            <h1 className="text-center border border-r-0 border-l-0 border-b-2 border-t-0 border-black bg-zinc-400">
              DRIVER DETAILS
            </h1>
            <p>Driver name:</p>
            <p>Driver contact no:</p>
            <p>Driver license no:</p>
          </div>
          <div className=" col-end-8 col-span-2 flex  border border-r-0 border-l-0 border-b-0 border-t-2 border-black">
            <div className="w-1/2 border border-r-2 border-l-0 border-b-0 border-t-0 border-black ">
              Unloading charges
            </div>
            <div className="w-1/2 "></div>
          </div>

          <div className=" col-start-1 col-end-6  border border-r-2 border-l-0 border-b-0 border-t-2 border-black">
            <p>
              {" "}
              Note : Vehicle,owner,party and driver documents are attached.
            </p>
          </div>
          <div className=" col-end-8 col-span-2 flex  border border-r-0 border-l-0 border-b-0 border-t-2 border-black">
            <div className="w-1/2 border border-r-2 border-l-0 border-b-0 border-t-0 border-black ">
              Total
            </div>
            <div className="w-1/2 "></div>
          </div>
        </div>
        <div className="absolute top-80 w-96 left-96 opacity-10">

<img className="w-full" src="transduniyalogo.png" alt="" />

</div>
      </div>
      <h1 className="text-end text-xs">Powered by : www.transduniya.com-97553-22022 </h1>
    </div>
    <div className="d-grid d-md-flex justify-content-md-end mb-3" >
                    <button className="btn btn-success bg-blue-400 py-3 px-2 w-28 text-xl mt-10 rounded-lg text-white " onClick={ generatePDF}>Print</button>                       
                    </div> 
    </div>
  );
};

export default Loadingslip;
