import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatbotWidget from "@/components/ChatbotWidget";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });



export const metadata = {
  title: "UNIFOST| Because The Right University Matters",
  description: "Unifost",
  icons: {
    icon: "/uni.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <ChatbotWidget />
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
