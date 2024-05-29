"use client"
import { useState } from "react";
import Modal from "@/app/components/Modal";
import useFirestore from '../../hooks/useFirestore';
import ImageGallery from "@/app/components/ImageGallery";
import { lusitana } from "../components/fonts/fonts";
import { Suspense } from 'react';
import { CardsSkeleton } from "../components/skeletons";

export default function Gallery() {
  const { docs } = useFirestore('images');
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <div className="mt-8 flex flex-col">
      <div className="py-4 my-2 text-center w-full">
      <h1 className={`${lusitana.className} font-bold text-xl underline`}>The Gallery</h1>
      </div>

      <Suspense fallback={<CardsSkeleton/>}>
      <ImageGallery images={docs} setSelectedImg={setSelectedImg} />
        {selectedImg && (
          <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
        )}
      </Suspense>
    </div>
  )
}
