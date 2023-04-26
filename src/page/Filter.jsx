import React from "react";
import { Select, Space } from "antd";
import { Form, Formik } from "formik";
import { useState } from "react";
import FormikControl from "../components/ReusableFormField/FormikControl";
import * as Yup from "yup";
import axios from "axios";
import Pdftoprint from "./Pdftoprint";
import { useNavigate, useNavigation } from "react-router-dom";
// import {  useNavigation } from "react-router-dom";

const data = [
  {
    date: "2023-04-19T14:02",
    enqdate: "2023-04-19T14:02",
    from: "bhopal",
    to: "INDORE",

    vehiclesno: "34",
    party: "surendar1",
    booking: "234234",
    _id: "1",
  },

  {
    date: "2023-04-19T14:02",
    enqdate: "2023-04-19T14:02",
    from: "bhopal",
    to: "INDORE",

    vehiclesno: "34",
    party: "surendar1",
    booking: "234234",
    _id: "1",
  },
  {
    date: "2023-04-19T14:02",
    enqdate: "2023-04-19T14:02",
    from: "bhopal",
    to: "INDORE",

    vehiclesno: "34",
    party: "surendar1",
    booking: "234234",
    _id: "1",
  },
];
const Filter = () => {
  const navigate=useNavigate()
  const [report, setReport] = useState("");
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

  const data1 = data.filter((item) => item.date === "2023-04-19T14:00");

  console.log(data1);
  const handleChange = (value) => {
    console.log(`selected ${value}`);
    setReport(value)
    if (value === "report 1") {
      console.log(value);
      setShow(true);
      setShow2(false);
      setShow3(false);
    } else if (value === "report 2") {
      setShow(false);
      setShow2(true);
      setShow3(false);
    } else if (value === "report 3") {
      setShow(false);
      setShow2(false);
      setShow3(true);
    }
  };

  const initialValues = {
    from: "",
    date: "04/18/2023",
    enqdate: "04/18/2023",
    to: "",
    vehicleno: "",
    booking: "",
    party: "",
  };
  const onSubmitform=(e)=>{
    e.preventDefault()
console.log("object")
if(report==="report 2"){
  navigate("/print")
}
else if (report === "report 1") {
  navigate("/loadingslip")

}
  }

  // const onSubmit = async (values, onSubmitProps) => {
  //   console.log("Form Data", values); // Main Form Data
  //   onSubmitProps.setSubmitting(false); // This set isSubmittion false after save
  //   // const res = await sheduleClass({ token="dfds", values });
  //   // console.log(res, "36");
  //   // toast(res.data.message);
  //   const { from, date, enqdate, to, vehicleno, booking, party } = values;
  //   console.log(party);
  //   // axios
  //   //   .post("http://localhost:4000/Vehicle/add", {
  //   //     from,
  //   //   date,
  //   //   enqdate,
  //   //   to,
  //   //   vehicleno,
  //   //   booking,
  //   //   party,
  //   //   })
  //   //   .then((res) => {
  //   //     console.log("add");
  //   //   });

  //   onSubmitProps.resetForm(); // Reset Form on submit
  //   // mutate(values)
  // };

  const validationSchema = Yup.object({
    // enqno: Yup.string().required("Required"),
    from: Yup.string().required("Required"),
    enqdate: Yup.string().required("Required"),
    date: Yup.string().required("Required"),
    to: Yup.string().required("Required"),
    vehicleno: Yup.string().required("Required"),
    booking: Yup.string().required("Required"),
    party: Yup.string().required("Required"),
    // numberoftyres: Yup.string().required("Required"),
    // totalweight: Yup.string().required("Required"),
    // goodsname: Yup.string().required("Required"),
  });

  // const dropdownOption = data?.map(({ _id=1, courseName="dkgg" }) => {
  //   return { key: courseName, value: _id };
  // });

  const dropdownOption = [
    { key: "Select an Option", value: "" },

    { key: "bus", value: "bus" },
    { key: "ven", value: "ven" },
    { key: "car", value: "car" },
    { key: "Others", value: "Others" },
  ];

  return (
    <div>
      <div className="sm:flex sm:flex-col sm:justify-center">
        {/* second */}
        <div className="">
          <div className="flex flex-col gap-0  sm:w-[30%] m-auto   mb-5">
            <h1 className="text-black text-center w-full m-auto mt-3 font-bold text-4xl bg-emerald-500 p-4 rounded-md">
              Report
            </h1>
            <h1 className=" bg-slate-500 text-center text-black rounded-md w-full   sm:p-4  m-auto font-bold mb-0">
            Select Report 


                  </h1>
          
         

              <Select
                defaultValue="report A"
                className="sm:w-[29rem] sm:p-2"
                onChange={handleChange}
                options={[
                  { value: "report 1", label: "report 1" },
                  { value: "report 2", label: "report 2" },
                  { value: "report 3", label: "report 3" },
                  // { value: 'disabled', label: 'Disabled', disabled: true },
                ]}
              />
          
            <label className="w-full sm:w-full rounded-md sm:p-2 text-center bg-red-400 m-auto block text-gray-700 font-bold mb-0">
            Select Report filter 

                  </label>
            <form onSubmit={onSubmitform} className="flex  flex-col gap-4 pb-8   justify-center items-center shadow ">
              <div className="sm:flex sm:justify-around sm:w-full sm:gap-9">
                <div className="flex flex-col gap-1 w-full">
                  <label className="block text-gray-700 font-bold mb-2">
                    enq date
                  </label>
                  {/* <label className='block text-gray-700 font-bold mb-2' htmlFor={"name"}>{"label"}</label> */}
                  <input
                    className=" px-3 py-1 w-full  text-black border-collapse  border-2   rounded placeholder:italic placeholder:text-sm placeholder:text-slate-400   focus:outline-2 focus:outline-slate-200"
                    name={"name"}
                    // {...rest}
                    placeholder={"placeholder"}
                  />
                </div>
                <div className="flex flex-col gap-1 w-full">
                  <label className="block text-gray-700 font-bold mb-2">
                    enq date
                  </label>
                  {/* <label className='block text-gray-700 font-bold mb-2' htmlFor={"name"}>{"label"}</label> */}
                  <input
                    className=" px-3 py-1 w-full  text-black border-collapse  border-2   rounded placeholder:italic placeholder:text-sm placeholder:text-slate-400   focus:outline-2 focus:outline-slate-200"
                    name={"name"}
                    // {...rest}
                    placeholder={"placeholder"}
                  />
                </div>
                
              </div>
              <div className="sm:flex sm:justify-around sm:w-full sm:gap-9">
                <div className="flex flex-col gap-1 w-full">
                  <label className="block text-gray-700 font-bold mb-2">
                    enq date
                  </label>
                  {/* <label className='block text-gray-700 font-bold mb-2' htmlFor={"name"}>{"label"}</label> */}
                  <input
                    className=" px-3 py-1 w-full  text-black border-collapse  border-2   rounded placeholder:italic placeholder:text-sm placeholder:text-slate-400   focus:outline-2 focus:outline-slate-200"
                    name={"name"}
                    // {...rest}
                    placeholder={"placeholder"}
                  />
                </div>
                <div className="flex flex-col gap-1 w-full">
                  <label className="block text-gray-700 font-bold mb-2">
                    enq date
                  </label>
                  {/* <label className='block text-gray-700 font-bold mb-2' htmlFor={"name"}>{"label"}</label> */}
                  <input
                    className=" px-3 py-1 w-full  text-black border-collapse  border-2   rounded placeholder:italic placeholder:text-sm placeholder:text-slate-400   focus:outline-2 focus:outline-slate-200"
                    name={"name"}
                    // {...rest}
                    placeholder={"placeholder"}
                  />
                </div>
                
              </div>
              <div className="sm:flex sm:justify-around sm:w-full sm:gap-9">
                <div className="flex flex-col gap-1 w-full">
                  <label className="block text-gray-700 font-bold mb-2">
                    enq date
                  </label>
                  {/* <label className='block text-gray-700 font-bold mb-2' htmlFor={"name"}>{"label"}</label> */}
                  <input
                    className=" px-3 py-1 w-full  text-black border-collapse  border-2   rounded placeholder:italic placeholder:text-sm placeholder:text-slate-400   focus:outline-2 focus:outline-slate-200"
                    name={"name"}
                    // {...rest}
                    placeholder={"placeholder"}
                  />
                </div>
                <div className="flex flex-col gap-1 w-full">
                  <label className="block text-gray-700 font-bold mb-2">
                    enq date
                  </label>
                  {/* <label className='block text-gray-700 font-bold mb-2' htmlFor={"name"}>{"label"}</label> */}
                  <input
                    className=" px-3 py-1 w-full  text-black border-collapse  border-2   rounded placeholder:italic placeholder:text-sm placeholder:text-slate-400   focus:outline-2 focus:outline-slate-200"
                    name={"name"}
                    // {...rest}
                    placeholder={"placeholder"}
                  />
                </div>
                
              </div>
              <div className="sm:flex sm:justify-around sm:w-full sm:gap-8">
                <div className="flex flex-col gap-1 w-full">
                  <label className="block text-gray-700 font-bold mb-2">
                    enq date
                  </label>
                  {/* <label className='block text-gray-700 font-bold mb-2' htmlFor={"name"}>{"label"}</label> */}
                  <input
                    className=" px-3 py-1 w-full  text-black border-collapse  border-2   rounded placeholder:italic placeholder:text-sm placeholder:text-slate-400   focus:outline-2 focus:outline-slate-200"
                    name={"name"}
                    // {...rest}
                    placeholder={"placeholder"}
                  />
                </div>
                <div className="flex flex-col gap-1 w-full">
                  <label className="block text-gray-700 font-bold mb-2">
                    enq date
                  </label>
                  {/* <label className='block text-gray-700 font-bold mb-2' htmlFor={"name"}>{"label"}</label> */}
                  <input
                    className=" px-3 py-1 w-full  text-black border-collapse  border-2   rounded placeholder:italic placeholder:text-sm placeholder:text-slate-400   focus:outline-2 focus:outline-slate-200"
                    name={"name"}
                    // {...rest}
                    placeholder={"placeholder"}
                  />
                </div>
                
              </div>
              <button
                        type="submit"
                        className="border bg-green-500 w-1/4 p-2 sm:px-6 rounded-md font-thin hover:text-xl duration-300 text-white active:bg-green-800 disabled:bg-red-500 disabled:cursor-not-allowed "
                        // disabled={!formik.isValid || formik.isSubmitting}
                      >
                        submit
                      </button>
            </form>

            {/* <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
              validationSchema={validationSchema}
              validateOnMount
              enableReinitialize
            >
              {(formik) => {
                console.log(formik);
                return (
                  <Form className="flex flex-col gap-6 pb-10   justify-center items-center shadow ">
                 

                    <div className="sm:flex sm:justify-around sm:w-[80%] sm:gap-9">
                      <FormikControl
                        control="input"
                        label="Enq date"
                        type="datetime-local"
                        name="enqdate"
                        placeholder="Enq date"
                      />

                  
                      <FormikControl
                        control="input"
                        label="Vehicle required date"
                        type="datetime-local"
                        name="date"
                        placeholder="Vehicle required date"
                      />
                    </div>
                    <div className="sm:flex sm:justify-around sm:w-[80%] sm:gap-9">
                      <FormikControl
                        control="input"
                        label="From"
                        type="text"
                        name="from"
                        placeholder="From"
                      />

                    
                      <FormikControl
                        control="input"
                        label="To"
                        type="text"
                        name="to"
                        placeholder="to"
                      />
                    </div>
                    <div className="sm:flex sm:justify-around sm:w-[80%] sm:gap-9">
                     
                      <FormikControl
                        control="input"
                        label="Vehicle no"
                        type="number"
                        name="vehicleno"
                        placeholder="Vehicle no"
                      />
                    </div>
                    <div className="sm:flex sm:justify-around sm:w-[80%] sm:gap-9">
                      {show && (
                        <FormikControl
                          control="input"
                          label="Booking no"
                          type="number"
                          name="booking"
                          placeholder="Booking no"
                        />
                      )}

                    
                      <FormikControl
                        control="input"
                        label="Party name"
                        type="text"
                        name="party"
                        placeholder="Party name"
                      />
                    </div>

                    {false ? (
                     
                      "button"
                    ) : (
                      <button
                        type="submit"
                        className="border bg-green-500 w-1/6 p-2 sm:px-6 rounded-md font-thin hover:text-xl duration-300 text-white active:bg-green-800 disabled:bg-red-500 disabled:cursor-not-allowed "
                        disabled={!formik.isValid || formik.isSubmitting}
                      >
                        submit
                      </button>
                    )}
                  </Form>
                );
              }}
            </Formik> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
