import React, { useState } from "react";
import Modal from "./Modal/Modal";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Showmodal() {
  const [show, setShow] = useState(false);
  const notify = () => toast("Wow so easy!");

  const settings =  {
    autoplay: true,
    autoplaySpeed: 3000,
    duration: 300,
    shift: 10,
    slidesPerRow: 3
  };

  return (
<>
      <span>What is this</span>
      <button onClick={() => setShow(true)}>Show Modal</button>
       <Modal title="My Modal" onClose={() => setShow(false)} show={show}>
        <p>This is modal body</p>
      </Modal>
      <div>
      <button onClick={notify}>Notify!</button>
      <ToastContainer />
    </div>
      </>
  );
}