"use client";
import { Montserrat } from "next/font/google";
import { QueryClient, QueryClientProvider } from "react-query";
import "./globals.css";

const inter = Montserrat({ subsets: ["latin"] });
const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryClientProvider client={queryClient}></QueryClientProvider>
        {children}
      </body>
    </html>
  );
}
