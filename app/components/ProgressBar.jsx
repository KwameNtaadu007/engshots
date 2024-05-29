import React, { useEffect } from 'react';
import useStorage from '@/hooks/useStorage';
import { motion } from 'framer-motion';

const ProgressBar = ({ file, fileData,setFile,setError,setMessage }) => {
  const { progress, url,error } = useStorage(file,fileData);

  useEffect(() => {
    if (url) {
      setMessage(`Upload completed`)
      setFile(null);
     
    }
    if(error){
      setError(error.message)
    }
  }, [url, setFile, setMessage,error,setError]);

  return (
    <motion.div className="progress-bar"
      initial={{ width: 0 }}
      animate={{ width: progress + '%' }}
    ></motion.div>
  );
} 

export default ProgressBar;