import { Inter } from "next/font/google";
import "./globals.css";
import SwipeableTemporaryDrawer from "@/components/Drawer";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Go India Stocks",
  description: "Unbiased and balanced",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
      </Head>
      <body className={inter.className}>
        <div className="flex">
          <SwipeableTemporaryDrawer/>
        {children}

        </div>
      </body>
    </html>
  );
}
