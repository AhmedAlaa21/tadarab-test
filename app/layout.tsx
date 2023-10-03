import { Navbar } from "@/components";
import "./globals.css";
import type { Metadata } from "next";
import { Almarai } from "next/font/google";

const alMarai = Almarai({ subsets: ["arabic"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title:
    "منصة تدرب: دورات تدريبية أونلاين - دورات مجانية بشهادات - ابدأ التعلم الآن",
  description:
    "منصة تدرب هي أكبر مكتبة دورات تدريبية أونلاين في الوطن العربي تضم أكثر من 850 وتقدم الكثير من الدورات المجانية  تضم منصة تدرب أكبر الخبراء في الوطن العربي في كل ا",
  icons: {
    icon: "images/TLogo@3x.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${alMarai.className} scroll-smooth`}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow bg-darkWhite">{children}</main>
        </div>
      </body>
    </html>
  );
}
