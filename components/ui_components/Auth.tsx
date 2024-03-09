import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image";

export default function Auth(){
    return(
        <Card className="w-[375px] border-2">
             <div className="w-full relative h-[40vh]">
        <Image alt="bot" src="/bot.png" fill objectFit="contain"/>
        </div>
      <CardHeader>
        <CardTitle className="text-center tracking-wide">Login</CardTitle>
        <CardDescription className="text-center">Sign in for accessing NexusChat</CardDescription>
      </CardHeader>
      <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex w-full flex-col space-y-1.5">
              <Button size={"lg"}>Google</Button>
              <Button size={"lg"}>Github</Button>
        <Button size={"lg"}>Login Anonymously</Button>
            </div>
          </div>
      </CardContent>
    </Card>
    );
}
