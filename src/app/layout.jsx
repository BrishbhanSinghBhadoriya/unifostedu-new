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
        <link rel="icon" href="/uni.jpg?v=2" type="image/jpeg" />
        <link rel="shortcut icon" href="/uni.jpg?v=2" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/uni.jpg?v=2" />
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <ChatbotWidget />
        <Toaster 
          position="top-center" 
          toastOptions={{
            duration: 4000,
            style: {
              background: '#363636',
              color: '#fff',
              fontSize: '14px',
              padding: '12px 16px',
              borderRadius: '8px',
              maxWidth: '90vw',
              wordBreak: 'break-word'
            },
            success: {
              style: {
                background: '#10b981',
                color: '#fff',
              },
            },
            error: {
              style: {
                background: '#ef4444',
                color: '#fff',
              },
            },
          }}
        />
      </body>
    </html>
  );
}
