"use client"
import Image from 'next/image'
import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from 'gsap/SplitText'
import { useContext, useEffect, useRef, useState } from "react";
import { useMediaQuery } from 'react-responsive';
// import { useMediaQuery } from 'react-responsive';
gsap.registerPlugin(ScrollTrigger, SplitText);

const Fileds = () => {
  useGSAP(() => {
    const descriptionTileline = gsap.timeline({
      scrollTrigger: {
        trigger: ".description",
        start: "top top",
        end: "+=1000",
        markers: true,
        scrub: 3,
        pin: true
      }
    })

    descriptionTileline
      .from(".textdesc", {
        scale: 0.1,
        duration: 2,
        ease: "power1"
      })
      .to(".textdesc", {
        x: -1280,
        duration: 2,
        ease: "power1"
      });

  })
  return (
    <div className='description w-screen h-screen bg-amber-100 text-[10vh] overflow-hidden'>
      {/* <div className=' absolute w-full h-full '>
            <Image alt='fantasy' className='object-cover' fill src={"/rendering.jpg"}/>
        </div>  */}
      <h1 className='textdesc text-[35vh]'>Elarion</h1>
      <p>Elarion — a realm of endless magic where light and shadow dance in eternal harmony.</p>
    </div>
  )
}

export default Fileds