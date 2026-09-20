import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NEW ERA CLUB | Club Médical New Era",
  description:
    "Official landing page of Club Médical New Era. Empowering medical students through scientific conferences, hands-on clinical workshops, medical days, and elite mentorship.",
  keywords: [
    "Club Médical New Era",
    "NEW ERA CLUB",
    "Medical Student Organization",
    "Scientific Conferences",
    "Clinical Workshops",
    "Surgical Suturing",
    "Medical Days",
    "Academic Medicine",
    "Medical Education",
  ],
  authors: [{ name: "Club Médical New Era", url: "https://new-era-club.com" }],
  openGraph: {
    title: "NEW ERA CLUB | Club Médical New Era",
    description:
      "Advancing Medical Student Excellence & Scientific Innovation. Join our dynamic academic community.",
    url: "https://new-era-club.com",
    siteName: "NEW ERA CLUB",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NEW ERA CLUB | Club Médical New Era",
    description:
      "Advancing Medical Student Excellence & Scientific Innovation. Join our dynamic academic community.",
  },
};

export const viewport: Viewport = {
  themeColor: "#3629D2",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body className="antialiased min-h-screen selection:bg-brand-magenta selection:text-white bg-brand-bg text-slate-900">
        {children}
      </body>
    </html>
  );
}
