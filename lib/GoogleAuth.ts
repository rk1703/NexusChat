import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "@/firebase";


export const signInWithGoogle = async () =>{
    const provider = new GoogleAuthProvider();
    try{
        await signInWithPopup(auth, provider);
        console.log("logged in with google")

    }catch (error){
        console.log(error)
    }
}