import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "./_components/Header";
import { ThemeProvider } from "./_components/darkMode/themeProvider";
import "./_styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.className} antialiased`}
    >
      <body className="min-h-screen">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
