import SideNavbar from "@/components/SideNavbar";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
// import { usePathname } from "next/navigation";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Shadcn Dashboard",
  description: "shadcn dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const pathname = usePathname();
  // const NoSidebar = pathname.includes('login');
  return (
    <html lang="en">
      <body
        className={`
          w-full min-h-screen bg-white text-black flex
          ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Sidebar */}
         <SideNavbar />
          
        {/* main page */}
        <div className="p-8 w-full">{children}</div>
      </body>
    </html>
  );
}
