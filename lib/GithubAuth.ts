import { signInWithPopup, GithubAuthProvider } from "firebase/auth";
import { auth } from "@/firebase";


export const signInWithGithub = async () =>{
    const provider = new GithubAuthProvider();
    try{
        await signInWithPopup(auth, provider);
        console.log("logged in with git")

    }catch (error){
        console.log(error)
    }
}