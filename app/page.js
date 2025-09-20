"use client"
import Image from "next/image";
import Hero from "./components/Hero";
import Fileds from "./components/Fileds";
import Nytheris from "./components/Nytheris";
import { useGSAP } from "@gsap/react";
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import gsap from 'gsap';


export default function Home() {
 
  return (

    <div className="page h-screen w-screen bg-amber-100">
      <Hero />
      <Fileds />
      <Nytheris />
      <div className="h-screen w-screen bg-black">
      </div>
    </div>

  );
}
