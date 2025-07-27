
import { League_Spartan, Inter } from "next/font/google";
import "./globals.css";

const leagueSpartan = League_Spartan({
  variable: "--font-league-spartan",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "MyaPya",
  description: "Software Developer. YouTuber. Explainer of Things That Don't Make Sense - Until They Do.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${leagueSpartan.variable} ${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
