import AuthNav from "@/components/ui_components/AuthNav"
import AuthSidebar from "@/components/ui_components/AuthSidebar"

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <div className="px-4 h-screen p-2">
            <AuthNav />
            <div className="w-full flex h-[90%]">
                <div className="w-1/5 border-2 border-t-0 rounded-sm">
                    <AuthSidebar/>
                </div>
                <div className="w-4/5 border-2 border-t-0 border-l-0 rounded-sm">
                    {children}
                </div>
            </div>
        </div>
    );
}