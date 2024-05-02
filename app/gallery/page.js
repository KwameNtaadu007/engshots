"use client"
import { useState } from "react";
import Modal from "@/components/Modal";
import UploadForm from "@/components/UploadForm";
import useFirestore from '../../hooks/useFirestore';
import ImageGallery from "@/components/ImageGallery";


export default function Gallery() {
  const { docs } = useFirestore('images');
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <div>
      
      <UploadForm />
      <ImageGallery images={docs} setSelectedImg={setSelectedImg} />
        {selectedImg && (
          <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
        )}
    </div>
  )
}
