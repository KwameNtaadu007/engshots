"use client";

import React, { useState } from "react";
import { Button } from "./button";
import ProgressBar from './ProgressBar';
import { CheckCircleIcon, ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { useAuth } from "../context/authContext";

export default function UploadForm() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);
  const [url, setUrl] = useState('');
  const [allowUpload, setAllowUpload] = useState(false);
  const {user} = useAuth()

  const initialFormData = {
    category: '',
    description: '',
    fileName: '',
    createdBy: ''
  };
  const [formData, setFormData] = useState(initialFormData);
  const types = ["image/png", "image/jpeg"];

  const handleChange = (e) => {
    const selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError(null);
      setMessage(null);
      setFormData((prev) => ({ ...prev, fileName: selected.name,createdBy:user?.email }));
    } else {
      setFile(null);
      setError("Please select an image file (png or jpg)");
    }
  };

  const handleReset = (e) => {
    e.preventDefault();
    setFile(null);
    setError(null);
    setFormData(initialFormData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    if (!formData.category || !formData.description || !formData.fileName) {
      setError('Please fill out all required fields and select a file for upload');
      return;
    }
    setAllowUpload(true);
    try {
      if (url) {
        
         
          handleReset(e);
          setTimeout(() => { setMessage(null); }, 6000);
       
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <form className="flex flex-col p-2 m-2 items-center border w-full min-w-[300px] max-w-[380px]">
      <div className="upload">
        <label>
          <input type="file" onChange={handleChange} />
          <span>+</span>
        </label>
        <div className="output border-b-[2px] w-100">
          {formData.fileName && <div>{formData.fileName}</div>}
          {(allowUpload&&file) && <ProgressBar file={file} fileData={formData} setFile={setFile} setMessage={setMessage} setError={setError} />}
        </div>
      </div>
      <div className="w-full">
        <label
          className="mb-1 mt-5 block text-xs font-medium text-gray-900"
          htmlFor="category"
        >
          Category
        </label>
        <div className="relative w-full">
          <select
            className="peer block w-full rounded-md border border-gray-200 py-[9px] px-2 text-sm outline-2 placeholder:text-gray-500"
            value={formData.category}
            onChange={(e) => setFormData((prev) => ({ ...prev, category: e.target.value }))}
            id="category"
            name="category"
            required
          >
            <option value='' className="text-gray-400">Select category</option>
            <option value='portrait'>Portrait</option>
            <option value='landscape'>Landscape</option>
            <option value='general'>General</option>
          </select>
        </div>
      </div>

      <div className="w-full">
        <label
          htmlFor="description"
          className="mb-1 mt-5 block text-xs font-medium text-gray-900"
        >
          Short Description
        </label>
        <div className="relative">
          <textarea
            className="peer block w-full rounded-md border border-gray-200 py-[9px] px-2 text-sm outline-2 placeholder:text-gray-500"
            id="description"
            name="description"
            value={formData.description}
            onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
            placeholder="Describe the picture"
            required
          />
        </div>
      </div>
      <div className="my-2 flex gap-2 w-full">
        <Button className="w-full bg-black/15 hover:bg-black/10 justify-center" onClick={handleReset}>Reset</Button>
        <Button className="w-full bg-black hover:bg-[#F56565] justify-center" onClick={handleSubmit}>Upload</Button>
      </div>
      <div className="mt-2">
      {message && <div className="w-full text-center p-2 bg-emerald-600/15 text-emerald-600"><CheckCircleIcon/>{message}</div>}
      {error && <div className="w-full text-center p-2 mt-2 bg-red-600/15 text-red-600"><ExclamationCircleIcon className="h-5 w-5 text-red-500"/>{error}</div>}
      </div>
    </form>
  );
}
