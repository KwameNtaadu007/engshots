import { collection,query, where,getDoc ,getDocs,addDoc,doc,updateDoc, deleteDoc,Timestamp } from "firebase/firestore";

import {db} from '../firebase/config';
import moment from "moment";






export async function getUserByEmail(email) {
  return await findByKeyValue('users', 'email', email);
}




const formattedDate = (date) => {
  let parseDate = new Date(date.toMillis()).toLocaleDateString(); 
  if (parseDate ) {
    let parsedDate = moment(parseDate).format("YYYY-MM-DD"); 
    return parsedDate;
  }
};


//--------------------Data processing------------------//

function formatTimestamps(data) {
  // Base case: if the data is not an object, return it unchanged
  if (typeof data !== 'object' || data === null) {
    return data;
  }

  // Iterate over each key-value pair in the object
  for (const key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      // Check if the value is a Timestamp
      if (data[key] instanceof Timestamp) {
        // Format the Timestamp using the formattedDate function
        data[key] = formattedDate(data[key]);
      } else if (typeof data[key] === 'object') {
        // If the value is an object, recursively format its Timestamps
        data[key] = formatTimestamps(data[key]);
      }
    }
  }

  return data;
}


function formatOneTimestamps(data) {
  const formattedData = { ...data };
  for (const key in formattedData) {
    if (formattedData[key] instanceof Timestamp) {
      formattedData[key] = moment(formattedData[key].toDate()).format('MM/DD/YYYY'); // Convert Firestore Timestamp to JS Date
    }
  }
  return formattedData;
}


export async function getAllImageIds() {
  try {
    console.log("Fetching all document IDs from the images collection");

    const colRef = collection(db, "images"); 
    const colSnap = await getDocs(colRef);

    if (!colSnap.empty) {
      const ids = colSnap.docs.map(doc => doc.id);
      return ids;
    } else {
      console.log("No documents found in the collection.");
      return [];
    }
  } catch (error) {
    console.error("Error fetching document IDs from the collection:", error.message);
    return [];
  }
}


async function findById(colName, docId) {
  try {
    console.log(`Fetching document from collection: ${colName} with ID: ${docId}`);
    
    const docRef = doc(db, colName, docId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data();
      //console.log('Document data:', data);
      return formatOneTimestamps(data);
    } else {
      console.log('No such document found.');
      return null;
    }
  } catch (error) {
    console.error(`Error fetching document from "${colName}" with ID "${docId}":`, error.message);
    //throw Error(`Error fetching document from "${colName}" with ID "${docId}": ${error.message}`);
  }
}

async function findByKeyValue(colName, key, value) {
  try {
    console.log(`Querying collection: ${colName}`);
    console.log(`Looking for documents where ${key} == ${value}`);

    const q = query(collection(db, colName), where(key, '==', value));
    const querySnapshot = await getDocs(q);
    
    const results = querySnapshot.docs.map((doc) => doc.data());
    console.log('Query results:', results);

    if (results.length > 0) {
      console.log('Document found:', results[0]);
      return formatOneTimestamps(results[0]);
    } else {
      console.log('No documents found.');
      return null;
    }
  } catch (error) {
    console.error(`Error fetching data from "${colName}":`, error.message);
    throw new Error(`Error fetching data from "${colName}": ${error.message}`);
  }
}

export async function getImageById(imageId) {
  const validationError = new Error('Invalid image ID provided');
  if (typeof imageId !== 'string' || imageId.trim() === '') {
    throw validationError;
  }

  return await findById('images', imageId);
}


export async function getData(col) {
  try {
    const dbCol = collection(db, col);
    const dbColSnapshot = await getDocs(dbCol); 

    const formattedData = dbColSnapshot.docs.map((doc) => {
      const data = doc.data();
      const formatted = formatTimestamps(data);
      return { id: doc.id, ...formatted };
    });


    return formattedData;
  } catch (error) {
    console.log(error);
    throw error;
  }
}


//console.log(getData('sales'))
export async function postData(col,colData){
 
  try {
      const docCol = collection(db, col);
      const docRef = await addDoc(docCol,colData);
      console.log("Document written with ID: ", docRef.id);
      return docRef;
    } catch (e) {
      console.error(("Error adding document: ", e))
      
    }
}

export async function putData(col,id,updateObject){
  let timeStamp = current_timestamp();
  try {//col eg: sales,Expenses
    const colDoc = doc(db,col,id);
    let result = await updateDoc(colDoc,updateObject) //updateObject eg: unitPrice:30
    console.log('Document updated successfully:', result);
    // Provide feedback to the source of the function's call
    return 'Document updated successfully';
 } catch (error) {
     console.log(error)
       throw error;
 }
}

export async function deleteData(col,id){
   try {//col eg: sales,Expenses
      const colDoc = doc(db,col,id);
      let res = await deleteDoc(colDoc); console.log(res)
      return res;
   } catch (error) {
       console.log(error)
       throw error;
   }
}




export async function fetchAPIData(url, options = {}) {
  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Fetch Error:', error);
    throw error; // Re-throw the error to be handled where the fetchData function is called
  }
}


