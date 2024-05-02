import React from 'react';
import { motion } from 'framer-motion';

export default function ImageGallery({images,setSelectedImg}) {
  
    return (
        <div className="flex flex-wrap gap-4">
          {images.map((image, index) => (
            
            <motion.img key={image.id} src={image.url} alt={`Image ${index}`}
            className='max-w-64'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            onClick={() => setSelectedImg(image.url)}
             />
          ))}
        </div>
      );
}
