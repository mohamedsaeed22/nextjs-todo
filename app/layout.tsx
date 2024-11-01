import type { Metadata } from "next";
 import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";

import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Nav from "@/components/ui/Nav";
 
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Nav />
            <div className="container mx-auto flex justify-center items-center">{children}</div>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
