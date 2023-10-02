import { Navbar } from "@/components";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "منصة تدرب: دورات تدريبية أونلاين - دورات مجانية بشهادات - ابدأ التعلم الآن",
  description:
    "منصة تدرب هي أكبر مكتبة دورات تدريبية أونلاين في الوطن العربي تضم أكثر من 850 وتقدم الكثير من الدورات المجانية  تضم منصة تدرب أكبر الخبراء في الوطن العربي في كل ا",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <Navbar />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
