"use client"
import { useState, useEffect } from 'react';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // Firebase storage reference
    const storage = getStorage();
    const storageRef = ref(storage, file.name);
    
    // Firestore reference
    const db = getFirestore();
    const collectionRef = collection(db, 'images');

    // Upload file
    const uploadTask = uploadBytesResumable(storageRef, file);

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on('state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress);
      },
      (error) => {
        setError(error);
      },
      async () => {
        // Upload completed successfully, now get the download URL
        try {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          const createdAt = serverTimestamp();
          await addDoc(collectionRef, { url: downloadURL, createdAt });
          setUrl(downloadURL);
        } catch (error) {
          setError(error);
        }
      }
    );

    // Clean up function
    return () => {
      // Cancel the upload task if it's still running
      uploadTask.cancel();
    };
  }, [file]);

  return { progress, url, error };
}

export default useStorage;
