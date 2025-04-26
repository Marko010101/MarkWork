import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./_styles/globals.css";
import { Header } from "./_components/Header";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  fallback: ["system-ui", "arial"],
});

export const metadata: Metadata = {
  title: {
    default: "Welcome to MarkWork",
    template: "%s | MarkWork",
  },
  description: "The premier platform connecting freelancers and clients",
  metadataBase: new URL("https://markwork.vercel.app/"), // Required for OG tags
  openGraph: {
    title: "MarkWork",
    description: "The premier platform connecting freelancers and clients",
    url: "https://markwork.vercel.app/",
    siteName: "MarkWork",
    // images: [
    //   {
    //     url: "/og-image.jpg", // Recommended OG image
    //     width: 1200,
    //     height: 630,
    //   },
    // ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.className} antialiased`}>
      <body className="relative min-h-screen bg-accent-50">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
