"use client"
import Image from 'next/image'
import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from 'gsap/SplitText'
import { useContext, useEffect, useRef, useState } from "react";
import { useMediaQuery } from 'react-responsive';
gsap.registerPlugin(ScrollTrigger, SplitText);


const Nytheris = () => {
    useGSAP(() => {
        const videoTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: ".contain",
                start: "top top",
                end: "bottom top",
                scrub: 1,
                markers: true,
                pin: true
            }
        })
        videoTimeline.from('.videoWrapper', {
            rotateZ: "45",
            borderRadius: "300px",
            scale: 0.2,
            ease: 'power1',
            duration: 1,
        }
        ).to(".parrot",{
            x : -700,
            y:-200,
            scale : "0.7",
            ease : "power1"
        })
    })
    return (
        <div className='contain  w-screen h-screen text-black relative  flex justify-center  items-center overflow-hidden '>
            <div className='videoWrapper relative w-full  h-full  overflow-hidden'>
                <div className='absolute rotate-y-180 w-52 h-52 right-150 top-150'>
                    <Image src={"/animation/Parrot.gif"} className='parrot' fill alt='parrot' />
                </div>
                <video src="/Vecteezy.mp4" className='video object-cover w-full h-full' loop autoPlay muted playsInline preload='metadata'></video>
            </div>
        </div>
    )
}

export default Nytheris