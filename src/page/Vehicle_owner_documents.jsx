import { Button, Card, Modal } from 'antd';
import React, { useState } from 'react'
import Pdftoprint from './Pdftoprint';

const Vehicle_owner_documents = () => {


    const [visible, setVisible] = useState(false);
    const [visible1, setVisible1] = useState(false);

  const showModal = () => {
    // setVisible(true);
    setVisible1(true);
  };

  const handleOk = (e) => {
    console.log(e);
    setVisible(false);
    setVisible1(false);
  };

  const handleCancel = (e) => {
    console.log(e);
    setVisible(false);
    setVisible1(false);
  };

  return (
    <div className=' m-auto  '>
<div className="mt-2 bg-[#151B54] mb-4 text-center text-fuchsia-50 w-full">  Vehicle / owner Documents </div> 
<div className='mainForm'>
<Card hoverable bodyStyle={{ padding: "0" }}>
<div className="card_menu" >  User details </div> 


<div className='w-[96%] m-auto  flex flex-wrap gap-10 '>

      <Button className='bg-blue-950' type="primary" onClick={showModal}>Vehicle Picture</Button>
      <Button className='bg-blue-950' type="primary" onClick={showModal}>Owner Aadhar Card</Button>
      <Button className='bg-blue-950' type="primary" onClick={showModal}>Registration Book (RC)</Button>
      <Button className='bg-blue-950' type="primary" onClick={showModal}>Owner PAN Card</Button>
      <Button className='bg-blue-950' type="primary" onClick={showModal}>TDS Declaration</Button>
      <Button className='bg-blue-950' type="primary" onClick={showModal}>GST Certificate</Button>
      <Button className='bg-blue-950' type="primary" onClick={showModal}>FasTag Card</Button>

      <Button className='bg-blue-950' type="primary" onClick={showModal}>Vehicle Picture</Button>
      <Button className='bg-blue-950' type="primary" onClick={showModal}>Vehicle Picture</Button>
</div>

<div className="card_menu my-10">  Vehicle Documents </div> 

<div>

    <div className='w-[96%] m-auto  py-10 flex flex-wrap gap-10'>
    <Button className='bg-blue-950' type="primary" onClick={showModal}>FITNESS</Button>
      <Button className='bg-blue-950' type="primary" onClick={showModal}>ROADTAX </Button>
      <Button className='bg-blue-950' type="primary" onClick={showModal}>INSURANCE COMPANY</Button>
      <Button className='bg-blue-950' type="primary" onClick={showModal}>STATE PERMIT </Button>
      <Button className='bg-blue-950' type="primary" onClick={showModal}>ALL INDIA PERMIT </Button>
      <Button className='bg-blue-950' type="primary" onClick={showModal}>PUC</Button>
      <Button className='bg-blue-950' type="primary" onClick={showModal}>GREENTAX</Button>


    </div>
    <div className='w-full m-auto text-center my-10'>

<Button className='m-auto w-40' onClick={showModal}> All view </Button>
    </div>


</div>
      <Modal
        title="Basic Modal"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}

        width={"80%"}
      >
      <Pdftoprint />
      </Modal>

      <Modal
        title="Basic Modal"
        visible={visible1}
        onOk={handleOk}
        onCancel={handleCancel}

        width={"80%"}
      >
      <Pdftoprint />
      <Pdftoprint />
      </Modal>
      </Card>
      </div>
    </div>

  )
}

export default Vehicle_owner_documents
