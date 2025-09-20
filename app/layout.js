"use client"
import { Kode_Mono } from "next/font/google";
import "./globals.css"
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother"
const kodeMono = Kode_Mono({
  subsets: ["latin"],
  weight: ["400", "700"], // اختياري حسب الحاجة
});





export default function RootLayout({ children }) {
  useGSAP(() => {
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);


    ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.2,
      effects: true,
    });
  })
  return (
    <html lang="en">
      <body className={kodeMono.className + "  bg-amber-100"}>
        <div id="smooth-wrapper">
          <div id="smooth-content">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}