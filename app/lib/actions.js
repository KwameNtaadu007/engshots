import { signInWithEmailAndPassword} from "firebase/auth"
import { db,auth } from "../../firebase/config";
import { signOut } from "firebase/auth";
import { ZodError } from "zod";
import { signInSchema } from "./zod";


export async function authenticateUser(data) {
  try {
    const parsed = signInSchema.parse(data);
    const userCredential = await signInWithEmailAndPassword(auth, parsed.email, parsed.password);
    if (!userCredential.user) {
      throw new Error("User not found.");
    }
    return userCredential.user;
  } catch (error) {
    if (error instanceof ZodError) {
      console.error("Validation error:", error.errors);
      throw new Error(error.errors);
    } else {
      console.error("Authorization error:", error.message);
      throw new Error(error.message);
    }
   
  }
}



export async function logOut(){
   signOut(auth)
  //  closeSession()
   return 
}



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

export async function logIn(credentials){
      return signIn('credentials',credentials)
}