import React from 'react';
import { motion } from 'framer-motion';

const Modal = ({ setSelectedImg, selectedImg }) => {

  const handleClick = (e) => {
    if (e.target.classList.contains('backdrop')) {
      setSelectedImg(null);
    }
  }

  return (
    <motion.div className="backdrop" onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* <div> */}
      <motion.img src={selectedImg.url} alt="enlarged pic" 
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
      />
      
      {/* <div className='p-2 flex flex-col gap-3  bg-white w-full'>
        <div className='font-bold'>{selectedImg.fileName}</div>
        <div className=''>{selectedImg.description}</div>
      </div> 
      </div>*/}
    </motion.div>
  )
}

export default Modal;