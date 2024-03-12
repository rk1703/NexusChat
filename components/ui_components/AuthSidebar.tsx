"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { signOut } from "firebase/auth";
import { auth } from "@/firebase";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { ScrollArea } from "@/components/ui/scroll-area"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from "next/image";
import { FilePlus2 } from "lucide-react";

const tags = Array.from({ length: 50 }).map(
    (_, i, a) => `v1.2.0-beta.${a.length - i}`
)


export default function Sidebar() {
    const router = useRouter();

    async function handleLogout() {

        try {
            await signOut(auth);
            router.push('/')

        } catch (error) {
            console.log("error", error)
        }
    }

    return (
        <div className="w-full h-full relative flex flex-col">
            <div className="h-16 border-b-2 flex items-center px-4">
                <Button variant={"ghost"} className="flex w-full justify-between py-2">
                    <div className="flex items-center">
                        <div className="h-8 w-8 relative rounded-full">
                            <Image src="/logo.png" alt="logo" fill style={{ objectFit: "contain" }} className="rounded-full" />
                        </div>
                        <p className="ml-2">New Chat</p>
                    </div>
                    <FilePlus2 className="h-6 w-6" />
                </Button>
            </div>
            <div className="flex flex-grow relative">
                <ScrollArea className="h-full w-full rounded-md border">
                    <div className="p-4">
                        {tags.map((tag) => (
                            <>
                                <div key={tag} className="text-sm border-b-1">
                                    {tag}
                                </div>
                            </>
                        ))}
                    </div>
                </ScrollArea>
            </div>

            <div className="border-t-2 w-full h-16 flex space-x-4 items-center px-4">
                <DropdownMenu>
                    <DropdownMenuTrigger className="w-full">
                        <Button className="w-full justify-start gap-3 py-6" variant={"secondary"}>
                            <Avatar className="w-8 h-8">
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>RK</AvatarFallback>
                            </Avatar>
                            <p>Ravikant Baghel</p>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-full">
                        <DropdownMenuItem className="min-w-60">
                            <Button variant={"ghost"} size={"sm"}>Setting</Button>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="min-w-60">
                            <Button variant={"ghost"} size={"sm"} onClick={handleLogout}>
                                Logout
                            </Button>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>


            </div>
        </div>
    );
}