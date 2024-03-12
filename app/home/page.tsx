import { Button } from "@/components/ui/button";
import { Sun, TriangleAlert, Zap } from "lucide-react";

export default function ChatHome() {
    return (
        <div className="m-2 w-full h-[90%] mt-10 flex flex-col justify-between items-center">
            <div className='text-white flex flex-col gap-20 items-center p-2 justify-center'>
                <h1 className=" text-4xl font-bold">NexusChat</h1>
                <p className="text-2xl">How can I help you today?</p>
                <div className='flex space-x-2 text-center'>
                    <div className="border-2 rounded-sm p-2">
                        <div className="flex flex-col items-center justify-center mb-5">
                            <Sun className="h-8 w-8 text-yellow-400" />
                            <h2>Examples</h2>
                        </div>
                        <div className="space-y-2">
                            <p className="infoText  text-sm">"Explain Something to me"</p>
                            <p className="infoText  text-sm">"What is the difference between a dog and a cat ?"</p>
                            <p className="infoText  text-sm">"What is the color of the sun?"</p>
                        </div>
                    </div>
                    <div className="border-2 rounded-sm p-2">
                        <div className="flex flex-col items-center justify-center mb-5">
                            <Zap className="h-8 w-8 text-blue-600" />
                            <h2>Capabilities</h2>
                        </div>
                        <div className="space-y-2">
                            <p className="infoText  text-sm">"Change the ChatGPT Model to use"</p>
                            <p className="infoText  text-sm">"Messages are stored in Firebase's Firestore"</p>
                            <p className="infoText  text-sm">"Hot Toast notification when ChatGPT is thinking!"</p>
                        </div>
                    </div>
                    <div className="border-2 rounded-sm p-2">
                        <div className="flex flex-col items-center justify-center mb-5">
                            <TriangleAlert className="h-8 w-8 text-red-400" />
                            <h2>Limitation</h2>
                        </div>
                        <div className="space-y-2">
                            <p className="infoText  text-sm">"May occasionally incorrect information"</p>
                            <p className="infoText  text-sm">"May occasionally harmful instruction or biased content"</p>
                            <p className="infoText  text-sm">"Limited knowledge of world and events after 2021"</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[80%]">
                <Button className="w-full rounded-lg" variant={"secondary"} size={"lg"}>Start Messaging NexusChat</Button>
            </div>
        </div>
    )
}