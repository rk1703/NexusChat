import Link from "next/link";
import { ThemeToggle } from "../theme/theme-toggle";

export default function Navbar(){
    return(
        <nav className="border-2 rounded-sm bg-background py-2 px-0 flex items-center mt-2">
        <div className="container flex items-center justify-between">
            <Link href="/">
                <h1 className="font-bold text-3xl">Nexus<span className="text-primary">Chat</span></h1>
            </Link>

            <div className="flex items-center">
                <ThemeToggle />
                <ThemeToggle />

            </div>
        </div>
    </nav>
    );
}