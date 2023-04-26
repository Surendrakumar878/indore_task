import { Button, Input, message, Form, Row, Radio, Col, Upload, Card, Select, Tooltip, Modal } from 'antd';
import { React, useState, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Link, useNavigate } from 'react-router-dom';
// import { Empregister, GetCountryName, GetStateName, GetCityName, RegisterationNumberValidationName } from '../../../services/Services'
import { UploadOutlined } from '@ant-design/icons';
import './Register.css'
// import logo from '../../../assets/image/transduniyalogofinal.png'
import TextArea from 'antd/es/input/TextArea';

const { Option } = Select;

const Register = () => {
  const navigate = useNavigate();
  const [verfied, setVerifed] = useState(false);
  const [country, setCountry] = useState([]);
  const [state, setState] = useState([]);
  const [city, setCity] = useState([]);
  const [register, SetRegisterNumber] = useState([]);
  const [required, Setrequired] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    // getCountryName()

  }, [])
  // const getCountryName = async () => {

  //   const country_response = await GetCountryName()
  //   if (country_response) {
  //     setCountry(country_response)
  //   }
  // }


  // const getStateName = async (state) => {
  //   const state_data = {
  //     id: state
  //   }
  //   const state_name = await GetStateName(state_data)
  //   if (state_name) {
  //     setState(state_name)
  //   }

  // }

  // const getCityName = async (city) => {
  //   const city_data = {
  //     id: city
  //   }
  //   const city_name = await GetCityName(city_data)

  //   if (city_name) {
  //     setCity(city_name)
  //   }

  // }
  // const registerationNumberValidation = async (e) => {
  //   SetRegisterNumber("")
  //   Setrequired(false)
  //   const number_check = {
  //     register_number: e.target.value
  //   }
  //   const number_response = await RegisterationNumberValidationName(number_check)

  //   if (number_response.msg === "Registration Number Already Exist") {
  //     alert("Registration Number Already Exist")
  //     SetRegisterNumber(number_response.msg)
  //     Setrequired(true)
  //   }

  // }
  function onChange() {
    setVerifed(true);
  }
  const [fileList1, setFile1] = useState([])
  const fileProps1 = {
    multiple: false,
    fileList1,

    onRemove: (file) => {
      const index = fileList1.indexOf(file);
      const newFileList = fileList1.slice();
      newFileList.splice(index, 1);
      setFile1(newFileList);
    },

    beforeUpload: (file) => {
      setFile1([...fileList1, file]);
    },

    progress: {
      strokeColor: {
        '0%': '#108ee9',
        '100%': '#87d068',
      },
      strokeWidth: 3,
      format: (percent) => percent && `${parseFloat(percent.toFixed(2))}%`,
    },

  }
  const [fileList2, setFile2] = useState([])
  const fileProps2 = {
    multiple: false,
    fileList1,

    onRemove: (file) => {
      const index = fileList2.indexOf(file);
      const newFileList = fileList2.slice();
      newFileList.splice(index, 1);
      setFile2(newFileList);
    },

    beforeUpload: (file) => {
      setFile2([...fileList2, file]);
    },

    progress: {
      strokeColor: {
        '0%': '#108ee9',
        '100%': '#87d068',
      },
      strokeWidth: 3,
      format: (percent) => percent && `${parseFloat(percent.toFixed(2))}%`,
    },

  }
  const [fileList3, setFile3] = useState([])
  const fileProps3 = {
    multiple: false,
    fileList1,

    onRemove: (file) => {
      const index = fileList3.indexOf(file);
      const newFileList = fileList3.slice();
      newFileList.splice(index, 1);
      setFile3(newFileList);
    },

    beforeUpload: (file) => {
      setFile3([...fileList3, file]);
    },

    progress: {
      strokeColor: {
        '0%': '#108ee9',
        '100%': '#87d068',
      },
      strokeWidth: 3,
      format: (percent) => percent && `${parseFloat(percent.toFixed(2))}%`,
    },

  }
  const [fileList4, setFile4] = useState([])
  const fileProps4 = {
    multiple: false,
    fileList1,

    onRemove: (file) => {
      const index = fileList4.indexOf(file);
      const newFileList = fileList4.slice();
      newFileList.splice(index, 1);
      setFile4(newFileList);
    },

    beforeUpload: (file) => {
      setFile4([...fileList4, file]);
    },

    progress: {
      strokeColor: {
        '0%': '#108ee9',
        '100%': '#87d068',
      },
      strokeWidth: 3,
      format: (percent) => percent && `${parseFloat(percent.toFixed(2))}%`,
    },

  }
  const saveData = async (values) => {
    const reg_data = {
      user_type_id: values.user_type_id,
      company_name: values.company_name,
      register_number: values.register_number,
      whatsapp_number: values.whatsapp_number,
      gst_number: values.gst_number,
      proprietor_name: values.proprietor_name,
      alternate_number: values.alternate_number,
      aadhar_number: values.aadhar_number,
      pan_number: values.pan_number,
      address: values.address,
      pin: values.pin,
      city_id: values.city_id,
      state_id: values.state_id,
      country_id: values.country_id,
      office_phone_number: values.office_phone_number,
      email: values.email,
      website: values.website,
      company_registeration: values.company_registeration,
      owner_aadhar_card: values.owner_aadhar_card,
      gst_certificate: values.gst_certificate,
      company_visiting_card: values.company_visiting_card,
    }
    // const response = await Empregister(reg_data)
    // if (response.msg === 'data posted') {
    //   let msg = 'Registeration got Success'
    //   // message.info(msg)
    //   // return <WelcomePage/>

    // }
    // else {
    //   message.error('Registeration is not successfull')

    // }
  };


  const handlePhoneKeyPress = (e) => {
    const charCode = e.which ? e.which : e.keyCode;
    const isNumeric = charCode >= 48 && charCode <= 57; // check if the key pressed is a number
    const isBackspace = charCode === 8; // check if the key pressed is the backspace key
    const phone = e.target.value.replace(/\D/g, ''); // remove all non-numeric characters
    const isValid = phone.length === 10 || isBackspace; // check if the input is a 10-digit number or the backspace key
    if (!isNumeric && !isBackspace) {
      e.preventDefault(); // prevent the input of non-numeric characters
    }

    if (isValid) {
      e.target.value = phone; // update the input value with the valid phone number
    }
  };

  function welcom() {
    setOpen(true);


  }
  const handleCancel = () => {
    navigate('/')
  };
  return (
    <>
      <h2 id='heading'>USER REGISTRATION</h2>
      <div className='mainForm'>
        <Modal
          open={open}
      
          footer={null}
          onCancel={handleCancel}
        >
          <div style={{textAlign:"center"}}>
<h3 >Welcome : RAM Transport To</h3>

{/* <img src={logo} width={200} className='login_logo' style={{marginTop:"10px",marginBottom:"10px"}}/> */}
<h4 style={{color:"#151B54"}}>Thanks for signup, We have recieved your details, Let us verify.</h4>
<h4 style={{color:"#151B54"}}>You will get access to TransDuniya.com very soon.</h4>
<Link to='/'><button style={{color:"black",backgroundColor:"#FFA500",padding:"5px",marginTop:"10px"}}>OK</button></Link>
</div>
         
        </Modal>
        <Card hoverable bodyStyle={{ padding: "0" }} >
          <Button onClick={welcom}> save</Button>
          <Form layout="vertical" autoComplete="off" onFinish={saveData} >


            <h3 className='card_menu'>USER TYPE</h3>
            <Form.Item name="user_type_id"
              rules={[
                {
                  required: true,
                  message: "Please Select User Type !"
                }
              ]}
              style={{ paddingLeft: "20px" }}
              // label={<lable style={{ fontSize: "18px" }}><b>User Type : </b></lable>}
              hasFeedback
            >
              <Radio.Group style={{ paddingLeft: "20px" }}>
                <Radio value="3" style={{ fontSize: "18px" }}>Company / Hirer</Radio>
                <Radio value="2" style={{ fontSize: "18px" }}>Transporter / Supplier</Radio>
                <Radio value="4" style={{ fontSize: "18px" }}>Reseller</Radio>

              </Radio.Group>
            </Form.Item>

            <h3 className='card_menu'>COMPANY DETAILS</h3>
            <Row>
              <Form.Item name="company_name"
                label={<lable style={{ fontSize: "15px" }}>Company Name</lable>}
                rules={[
                  {
                    required: true,
                    message: "Please input your Transporter Name!"
                  }
                ]}
                style={{ paddingLeft: "20px", width: "96%" }}
                hasFeedback

              >
                {/* <Tooltip title="Enter Your Comapny Name"> */}
                <Input placeholder='ABC Transports' tabIndex={1} />
                {/* </Tooltip> */}

              </Form.Item>
            </Row>
            <Row>
              <Form.Item name="address"
                label={<label style={{ fontSize: "15px" }}>Address</label>}
                rules={[
                  {
                    required: true,
                    message: "Please input your Address!"
                  }
                ]}
                hasFeedback

                style={{ paddingLeft: "20px", width: "96%" }}
              >
                {/* <Tooltip title="Enter Your Address" > */}
                <TextArea placeholder='1234 Main St' tabIndex={2} />
                {/* </Tooltip> */}
              </Form.Item>
            </Row>

            <Row>


              <Col className='select_option_col'>
                <Form.Item name="country_id"
                  label={<label style={{ fontSize: "15px" }}>Country</label>}
                  rules={[
                    {
                      required: true,
                      message: "Please input your Country Name!"
                    }
                  ]}
                  hasFeedback
                  style={{ width: "96%" }}
                >
                  <Select
                    showSearch
                    // onChange={getStateName}
                    placeholder="Search to Select"
                    optionFilterProp="children"
                    tabIndex={3}
                  >
                    {country.map((items) => (
                      <Option value={items.id}>{items.CountryName}</Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>


              <Col className='select_option_col'>
                <Form.Item name="state_id"
                  label={<label style={{ fontSize: "15px" }}>State</label>}
                  rules={[
                    {
                      required: true,
                      message: "Please input your State Name!"
                    }
                  ]}
                  hasFeedback
                  style={{ width: "96%" }}

                >
                  <Select
                    showSearch
                    // onChange={getCityName}
                    placeholder="Search to Select"
                    optionFilterProp="children"
                    tabIndex={4}
                  >
                    {state.map((items) => (
                      <Option value={items.id}>{items.StateName}</Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>


              <Col className='select_option_col'>
                <Form.Item name="city_id"
                  label={<label style={{ fontSize: "15px" }}>City</label>}
                  rules={[
                    {
                      required: true,
                      message: "Please input your City Name!"
                    }
                  ]}
                  hasFeedback
                  style={{ width: "96%" }}
                >
                  <Select
                    showSearch
                    placeholder="Search to Select"
                    optionFilterProp="children"
                    style={{
                      width: "100%"

                    }}
                    tabIndex={5}
                  >
                    {city.map((items) => (
                      <Option value={items.id}>{items.CityName}</Option>
                    ))}

                  </Select>
                </Form.Item>
              </Col>

              <Col className='select_option_col'>
                <Form.Item name="pin"
                  label={<label style={{ fontSize: "15px" }}>PIN</label>}
                  rules={[
                    {
                      required: true,
                      message: "Please enter PIN Number"
                    },
                    () => ({
                      validator(_, value) {
                        if (!value) {
                          return Promise.reject();
                        }
                        if (isNaN(value)) {
                          return Promise.reject("PIN Number has to be a number.");
                        }
                        if (value.length < 7) {
                          return Promise.reject(
                            "PIN Number can't be less than 7 digits"
                          );
                        }
                        if (value.length > 7) {
                          return Promise.reject(
                            "PIN Number  can't be more than 7 digits"
                          );
                        }
                        return Promise.resolve();
                      },
                    }),
                  ]}
                  style={{ width: "96%" }}
                  hasFeedback
                >
                  {/* <Tooltip title="Enter PIN Number"> */}
                  <Input type="tel" onKeyPress={handlePhoneKeyPress} maxLength={7} tabIndex={3} placeholder="Enter Your PIN Number" />
                  {/* </Tooltip> */}
                </Form.Item>
              </Col>
              <Col className='select_option_col'>
                <Form.Item name="email"
                  label={<label style={{ fontSize: "15px" }}>Email</label>}
                  rules={[
                    {
                      required: true,
                      message: "Please input your Email!"
                    },
                    {
                      type: 'email',
                    },
                  ]}
                  style={{ width: "96%" }}
                  hasFeedback
                >
                  {/* <Tooltip title="Enter Email ID"> */}
                  <Input placeholder='abc@gmail.com' tabIndex={7} />
                  {/* </Tooltip> */}
                </Form.Item>
              </Col>
              <Col className='select_option_col'>
                <Form.Item name="website"
                  label={<label style={{ fontSize: "15px" }}>Website</label>}
                  hasFeedback
                  style={{ width: "96%" }}
                >
                  {/* <Tooltip title="Enter Your Website URL"> */}
                  <Input placeholder='www.google.com' tabIndex={8} />
                  {/* </Tooltip> */}
                </Form.Item>
              </Col>



              <Col className='select_option_col'>
                <Form.Item name="gst_number"
                  label={<label style={{ fontSize: "15px" }}>GST Number</label>}
                  hasFeedback
                  style={{ width: "96%" }}
                  rules={[
                    () => ({
                      validator(_, value) {
                        if (!value) {
                          return Promise.reject();
                        }
                        if (value.length < 15) {
                          return Promise.reject(
                            "GST Number can't be less than 15 digits"
                          );
                        }
                        if (value.length > 15) {
                          return Promise.reject(
                            "GST Number  can't be more than 15 digits"
                          );
                        }
                        return Promise.resolve();
                      },
                    }),
                  ]}
                >
                  {/* <Tooltip title="Enter GST Number"> */}
                  <Input placeholder='Enter Your GST Number' maxLength={15} tabIndex={9} />
                  {/* </Tooltip> */}
                </Form.Item>
              </Col>

            </Row>


            <h3 className='card_menu'>OWNER DETAILS</h3>
            <Row>
              <Col className='select_option_col'>
                <Form.Item name="proprietor_name"
                  label={<label style={{ fontSize: "15px" }}>Owner Name</label>}
                  rules={[
                    {
                      required: true,
                      message: "Please input your Owner Name!"
                    }
                  ]}
                  hasFeedback
                  style={{ width: "96%" }}
                >
                  {/* <Tooltip title="Enter Owner Name"> */}
                  <Input placeholder='Owner Name' tabIndex={10} />
                  {/* </Tooltip> */}
                </Form.Item>
              </Col>
              <Col className='select_option_col'>
                <Form.Item
                  name="alternate_number"
                  label={<label style={{ fontSize: "15px" }}>Owner Contact Number</label>}
                  rules={[
                    {
                      required: true,
                      message: "Enter owner mobile number"
                    },

                    () => ({
                      validator(_, value) {
                        if (!value) {
                          return Promise.reject();
                        }
                        if (isNaN(value)) {
                          return Promise.reject("Phone has to be a number.");
                        }
                        if (value.length < 10) {
                          return Promise.reject(
                            "Phone number can't be less than 10 digits"
                          );
                        }
                        if (value.length > 10) {
                          return Promise.reject(
                            "Phone number can't be more than 10 digits"
                          );
                        }
                        return Promise.resolve();
                      },
                    }),
                  ]}
                  hasFeedback
                  style={{ width: "96%" }}
                >
                  {/* <Tooltip title="Enter owner mobile number"> */}
                  <Input type="tel" onKeyPress={handlePhoneKeyPress} maxLength={10} tabIndex={11} placeholder="9xxxxxxxx" />
                  {/* </Tooltip> */}
                </Form.Item>
              </Col>

              <Col className='select_option_col'>
                <Form.Item name="aadhar_number"
                  label={<label style={{ fontSize: "15px" }}>Owner Aadhar Number</label>}
                  rules={[
                    {
                      required: true,
                      message: "Please enter Aadhar number"
                    },
                    () => ({
                      validator(_, value) {
                        if (!value) {
                          return Promise.reject();
                        }
                        if (isNaN(value)) {
                          return Promise.reject("Aadhar Number has to be a number.");
                        }
                        if (value.length < 12) {
                          return Promise.reject(
                            "Aadhar Number can't be less than 12 digits"
                          );
                        }
                        if (value.length > 12) {
                          return Promise.reject(
                            "Aadhar Number  can't be more than 12 digits"
                          );
                        }
                        return Promise.resolve();
                      },
                    }),

                  ]}
                  hasFeedback
                  style={{ width: "96%" }}
                >
                  {/* <Tooltip title="Enter Owner Aadhar Number"> */}
                  <Input type="tel" onKeyPress={handlePhoneKeyPress} maxLength={12} tabIndex={12} placeholder="0000 0000 0000" />
                  {/* </Tooltip> */}
                </Form.Item>
              </Col>
              <Col className='select_option_col'>
                <Form.Item name="pan_number"
                  label={<label style={{ fontSize: "15px" }}>Owner PAN Number</label>}
                  rules={[
                    {
                      required: true,
                      message: "Please input your PAN Number!"
                    },
                    () => ({
                      validator(_, value) {
                        if (!value) {
                          return Promise.reject();
                        }
                        if (value.length < 12) {
                          return Promise.reject(
                            "Pan Number can't be less than 12 digits"
                          );
                        }
                        if (value.length > 12) {
                          return Promise.reject(
                            "Pan Number  can't be more than 12 digits"
                          );
                        }
                        return Promise.resolve();
                      },
                    }),
                  ]}
                  hasFeedback
                  style={{ width: "96%" }}
                >
                  {/* <Tooltip title="Enter PAN Number"> */}
                  <Input placeholder='Enter PAN Card Number' maxLength={12} tabIndex={13} />
                  {/* </Tooltip> */}
                </Form.Item>
              </Col>
            </Row>

            <h3 className='card_menu'>CONTACT DETAILS</h3>
            <Row>
              <Col className='select_option_col'>

                <Form.Item name="register_number"
                  label={<label style={{ fontSize: "15px" }}>Unique Access Number</label>}
                  rules={[

                    {
                      required: true,
                      message: "Enter unique user Registration number"
                    },

                    () => ({
                      validator(_, value) {
                        if (!value) {
                          return Promise.reject();
                        }
                        if (isNaN(value)) {
                          return Promise.reject("Phone has to be a number.");
                        }
                        if (value.length < 10) {
                          return Promise.reject(
                            "Phone number can't be less than 10 digits"
                          );
                        }
                        if (value.length > 10) {
                          return Promise.reject(
                            "Phone number can't be more than 10 digits"
                          );
                        }
                        if (required) {
                          return Promise.reject(
                            "Number is Already Exist"
                          );

                        }

                        return Promise.resolve();
                      },
                    }),

                  ]}
                  hasFeedback
                  style={{ width: "96%" }}
                >
                  {/* <Tooltip title="Enter Registration Number"> */}
                  <Input type="tel" onKeyPress={handlePhoneKeyPress} maxLength={10} placeholder="9xxxxxxxx" tabIndex={14}

                    // onBlur={registerationNumberValidation}
                     />
                  {/* </Tooltip> */}
                </Form.Item>
                {/* <label style={{ color: "red", fontWeight: 100 }}>{register}{required}</label> */}
              </Col>
              <Col className='select_option_col'>
                <Form.Item name="whatsapp_number"
                  label={<label style={{ fontSize: "15px" }}>Whatsapp Number</label>}
                  rules={[
                    {
                      required: true,
                      message: "Please enter mobile number"
                    },
                    () => ({
                      validator(_, value) {
                        if (!value) {
                          return Promise.reject();
                        }
                        if (isNaN(value)) {
                          return Promise.reject("Phone has to be a number.");
                        }
                        if (value.length < 10) {
                          return Promise.reject(
                            "Phone number can't be less than 10 digits"
                          );
                        }
                        if (value.length > 10) {
                          return Promise.reject(
                            "Phone number can't be more than 10 digits"
                          );
                        }
                        return Promise.resolve();
                      },
                    }),

                  ]}
                  hasFeedback
                  style={{ width: "96%" }}
                >
                  {/* <Tooltip title="Enter Whatsapp Number"> */}
                  <Input type="tel" onKeyPress={handlePhoneKeyPress} maxLength={10} tabIndex={15} placeholder="9xxxxxxxx" />
                  {/* </Tooltip> */}
                </Form.Item>
              </Col>

              <Col className='select_option_col'>
                <Form.Item name="office_phone_number"
                  label={<lable style={{ fontSize: "15px" }}>Office Phone Number</lable>}
                  rules={[
                    {
                      required: true,
                      message: "Please enter Register number"
                    },
                  ]}
                  hasFeedback
                  style={{ width: "96%" }}
                >
                  {/* <Tooltip title="Enter Office Phone Number"> */}
                  <Input type="tel" onKeyPress={handlePhoneKeyPress} maxLength={10} tabIndex={16} placeholder="9xxxxxxxx" />
                  {/* </Tooltip> */}
                </Form.Item>
              </Col>
            </Row>

            <h3 className='card_menu'>DOCUMENTS</h3>
            <Row>
              <Col className='upload_col'>
                <Form.Item
                  name="company_registeration"

                  label={<label style={{ fontSize: "15px" }}>Company Registration </label>}
                  getValueFromEvent={({ file }) => file.originFileObj}
                  rules={[
                    {
                      required: true,
                      message: "Company Registration!"
                    }
                  ]}
                  hasFeedback
                >
                  <Upload {...fileProps1}>
                    <Button icon={<UploadOutlined />} tabIndex={17}>Click to Upload</Button>
                  </Upload>
                </Form.Item>
              </Col>


              <Col className='upload_col'>
                <Form.Item
                  name="owner_aadhar_card"
                  label={<label style={{ fontSize: "15px" }}>Owner Aadhar Card</label>}
                  getValueFromEvent={({ file }) => file.originFileObj}
                  rules={[
                    {
                      required: true,
                      message: "Owner Aadhar Card!"
                    }
                  ]}
                  hasFeedback

                >
                  <Upload {...fileProps2}>
                    <Button icon={<UploadOutlined />} tabIndex={18}>Click to Upload</Button>
                  </Upload>
                </Form.Item>
              </Col>

              <Col className='upload_col'>
                <Form.Item
                  name="company_visiting_card"
                  label={<label style={{ fontSize: "15px" }}>Company Visiting Card</label>}
                  rules={[
                    {
                      required: true,
                      message: "Company Visiting Card!"
                    }
                  ]}
                  hasFeedback
                  getValueFromEvent={({ file }) => file.originFileObj}
                >
                  <Upload {...fileProps4} className="uploadField">
                    <Button icon={<UploadOutlined />} tabIndex={19}>Click to Upload</Button>
                  </Upload>
                </Form.Item>
              </Col>

              <Col className='upload_col'>
                <Form.Item
                  name="gst_certificate"
                  label={<label style={{ fontSize: "15px" }}>Company GST Certificate </label>}
                  getValueFromEvent={({ file }) => file.originFileObj}
                  hasFeedback
                >
                  <Upload {...fileProps3}>
                    <Button icon={<UploadOutlined />} tabIndex={20}>Click to Upload</Button>
                  </Upload>
                </Form.Item>
              </Col>
            </Row>
            <div className='center'>

              <ReCAPTCHA
                sitekey='6Lcl6jQlAAAAABEgkzM11ysNaFnVPck1xVrVk-CS'
                onChange={onChange}
              />
              <Row>
                <Form.Item>
                  <Button htmlType='submit'
                    disabled={!verfied}
                    style={{

                      marginTop: "20px",
                      marginLeft: "50px",


                    }}
                    className="button"
                  >Submit</Button>
                </Form.Item>
              </Row>
            </div>

          </Form>
        </Card>

      </div>
      {/* <Footer /> */}
    </>

  )
};
export default Register;
