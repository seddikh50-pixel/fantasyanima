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



const Hero = () => {
const isMobile = useMediaQuery({maxWidth : "768px"})

    useGSAP(() => {
        const splitName = SplitText.create(".textname", {
            type: "words, lines , chars",
            mask: "lines",
            linesClass: "line++",
        });

        gsap.from(splitName.chars, {
            y: -600,
            stagger: 0.1,
            duration:1,
            ease: "bounce"
        })

        const cloudsTimeLine = gsap.timeline({
            scrollTrigger: {
                trigger: ".hero",
                start: 'top top',
                end: "+=1000",
                scrub: 2,
                markers : true,
                pin: true
            }
        })

        cloudsTimeLine.to('.leftcloud', {
            x: isMobile ? -100 : -500,
            ease: "power1"
        })
        cloudsTimeLine.to('.rightcloud', {
            x:isMobile ? 100 : 500,
            ease: "power1"
        },'<')
    })


    return (
        <div className='hero relative w-screen h-screen flex justify-center items-center overflow-x-hidden '>
            <h1 className='textname z-2 text-[10vh] xl:text-[50vh] text-amber-100 uppercase '>seddik</h1>
            <div className='leftcloud absolute xl:w-full top-60 xl:top-0 -left-80  w-150 h-96  xl:-left-200 xl:h-full z-3'>
                <Image src={"/pnh.png"} className='object-cover' alt='fantasy' fill />
            </div>
            <div className='rightcloud absolute xl:w-6/8 top-60 xl:top-0 -right-80 w-150 h-96     xl:-right-80 rotate-x-180   xl:h-full z-3'>
                <Image src={"/pnh.png"} className='object-cover' alt='fantasy' fill />
            </div>
            <div className=' absolute w-full h-full'>
                <Image src={"/fantasyhero.jpg"} className='object-cover' alt='fantasy' fill />
            </div>
        </div>
    )
}

export default Hero