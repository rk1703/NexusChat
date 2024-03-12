"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image";
import { signInWithGoogle } from "@/lib/GoogleAuth";
import { signInWithGithub } from "@/lib/GithubAuth";
import { useToast } from "@/components/ui/use-toast"
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Auth() {
  const router = useRouter();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user?.uid;
        router.push('/home')
      } else {
        console.log("no user client")
      }
    });
    return unsubscribe;
  }, []);
  const { toast } = useToast()
  return (
    <Card className="w-[375px] border-2">
      <div className="w-full relative h-[40vh]">
        <Image alt="bot" src="/bot.png" fill style={{objectFit:"contain"}} />
      </div>
      <CardHeader>
        <CardTitle className="text-center tracking-wide">Login</CardTitle>
        <CardDescription className="text-center">Sign in for accessing NexusChat</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid w-full items-center gap-4">
          <div className="flex w-full flex-col space-y-1.5">
            <Button size={"lg"} onClick={signInWithGoogle}>Google</Button>
            <Button size={"lg"} onClick={signInWithGithub}>Github</Button>
            <Button size={"lg"} onClick={() => {
              toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong.",
                description: "This function is not implemented yet",
              })
            }}>Login Anonymously</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
