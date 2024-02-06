"use client";
import { Nunito } from "next/font/google";
import "@/styles/globals.css";
import Script from "next/script";
import { Providers } from "./providers";
import { NotificationContextProvider } from "@/contexts/Notification-context";
import Notifications from "@/components/notification/Notifications";
const nunito = Nunito({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Script src="https://saturn.tech/widget.js"></Script>
      <body className={nunito.className}>
        <NotificationContextProvider>
          <Notifications />
          <Providers>{children}</Providers>
        </NotificationContextProvider>
      </body>
    </html>
  );
}
