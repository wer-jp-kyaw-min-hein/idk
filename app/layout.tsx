// 
import "./globals.css";
import Navbar from "./components/Navbar";
import AnnouncementBar from "./components/AnnouncementBar";

export const metadata = {
  title: "TigerMart",
  description: "E-commerce powered by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AnnouncementBar />
        <Navbar />
        {children}
      </body>
    </html>
  );
}