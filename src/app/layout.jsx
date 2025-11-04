import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatbotWidget from "@/components/ChatbotWidget";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });



export const metadata = {
  title: {
    default: "UNIFOST | Because The Right University Matters",
    template: "%s | UNIFOST"
  },
  description: "Compare and choose the best online degree programs from India's top universities. Get expert counseling, compare courses, fees, and eligibility for MBA, BBA, MCA, BCA, and more. UGC-approved online degrees with placement assistance.",
  keywords: [
    "online degree programs",
    "online MBA",
    "online BBA",
    "online MCA",
    "online BCA",
    "UGC approved universities",
    "compare universities",
    "online education India",
    "distance learning",
    "online courses",
    "university counseling"
  ],
  authors: [{ name: "UNIFOST" }],
  creator: "UNIFOST",
  publisher: "UNIFOST",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://unifostedu.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://unifostedu.com',
    siteName: 'UNIFOST',
    title: 'UNIFOST | Compare Online Universities & Courses',
    description: 'Compare and choose the best online degree programs from India\'s top universities. Get expert counseling for MBA, BBA, MCA, BCA and more.',
    images: [
      {
        url: '/unilogo.png',
        width: 1200,
        height: 630,
        alt: 'UNIFOST - Online University Comparison Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UNIFOST | Compare Online Universities & Courses',
    description: 'Compare and choose the best online degree programs from India\'s top universities.',
    images: ['/unilogo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/uni.jpg",
    apple: "/uni.jpg",
  },
  verification: {
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // yahoo: 'your-yahoo-verification-code',
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
