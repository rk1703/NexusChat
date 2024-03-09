import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme/theme-provider";
import "./globals.css";
import Navbar from "@/components/ui_components/Nabvar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NexusChat",
  description: "Your personal AI Chat Bot powered by Gemini AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar/>
        {children}
        </ThemeProvider>
        </body>
    </html>
  );
}
