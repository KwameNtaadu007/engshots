"use client";
import React, { useState, useCallback, useEffect } from 'react';
import { Button } from '../button';
import { CheckCircleIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline';
import { putData } from '../../../firebase/dbQuery';
import { DeleteImageData } from './buttons';

export default function EditForm({ imageData, imageId }) {
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  const initialFormData = {
    url: '',
    category: '',
    description: '',
    fileName: '',
    createdBy: ''
  };

  const [formData, setFormData] = useState(initialFormData);



  const handleReset = (e) => {
    e.preventDefault();
    setError(null);
    setFormData(imageData || initialFormData);
  };



  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData?.category || !formData?.description) {
      setError('Please fill out all required fields and select a file for upload');
      return;
    }

    if(!imageId){setError('Select an image to edit'); return}

    try {
      let review = await putData('images', imageId, formData);
      if (review) setMessage('Data updated');
      setTimeout(() => { setMessage(null); }, 6000);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className='flex flex-col items-center'>
        <div className='w-full p-2 bg-gray-100 flex items-center justify-between'>
          <div className="shadow-sm font-bold">
            {imageData.fileName}
          </div>
          <DeleteImageData id={imageId} setMessage={setMessage} setError={setError} handleReset={handleReset} />
        </div>
      <div className='w-full p-2 bg-gray-100 flex flex-col gap-2'>
          <div className="shadow-sm font-bold">
            {imageData.category}
          </div>
          <div className="shadow-sm">
            {imageData.description}
          </div>
          
        </div>

      <form className="flex flex-col p-2 m-2 items-center border w-full min-w-[300px] max-w-[380px]">
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
          <Button type="button" className="w-full bg-black/15 hover:bg-black/10 justify-center" onClick={handleReset}>Reset</Button>
          <Button type="submit" className="w-full bg-black hover:bg-[#F56565] justify-center" onClick={handleSubmit}>Review</Button>
        </div>

        <div className="mt-2">
          {message && <div className="w-full text-center p-2 bg-emerald-600/15 text-emerald-600"><CheckCircleIcon className="h-5 w-5 inline-block" />{message}</div>}
          {error && <div className="w-full text-center p-2 mt-2 bg-red-600/15 text-red-600"><ExclamationCircleIcon className="h-5 w-5 inline-block text-red-500" />{error}</div>}
        </div>
      </form>
    </div>
  );
}
