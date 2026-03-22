import { Inter } from "next/font/google";
import "./globals.css";
import GoogleProvider from "@/components/providers/GoogleProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vinculacion Computación",
  description: "Universidad Agraria del Ecuador",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GoogleProvider>
          {children}
        </GoogleProvider>
      </body>
    </html>
  );
}
