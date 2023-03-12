import React, { useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import Slider from "react-slick";
import { HiOutlineArrowNarrowLeft, HiOutlineArrowNarrowRight } from 'react-icons/hi'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import UpcomingTemplate from '../components/UpcomingTemplate';

const Future = () => {
    const ref = useRef(null)
    const [titleRef, titleView] = useInView({ triggerOnce: true, threshold: 1 })
    const [cardRef, cardView] = useInView({ triggerOnce: true, threshold: 0.5 })

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };

    const uplist = [1, 2, 3, 4]

    return (
        <section className='w-full h-auto py-20 text-white bg-hero z-10 relative font-poppins overflow-hidden' id="upcoming">

            <div className="mx-auto w-fit text-center mt-10">
                <h2 className='text-mypink text-medium font-medium'>Future token launches</h2>
                <div className="h-fit w-fit relative mt-2" ref={titleRef}>
                    <h1 className='font-header text-7xl font-bold mt-2 z-0 stroke-white opacity-30'>Upcoming</h1>

                    <motion.h1 whileInView={{ y: 25 }} transition={{ duration: 0.7, delay: 0.3, ease: [0.33, 1, 0.68, 1] }} className='absolute font-header text-7xl font-bold mt-2 z-10 bottom-0 left-0'>Upcoming</motion.h1>
                </div>

            </div>

            <div className="w-fit h-auto flex items-center mx-auto gap-x-24 px-10 lg:flex-row flex-col mt-20 text-center lg:text-left" ref={cardRef}>
                <div className="">
                    <motion.h1 initial={{ opacity: 0 }} animate={cardView ? { y: [50, 0], opacity: 100 } : {}} transition={{ duration: 0.6, delay: 0 }} className='lg:text-5xl text-header lg:max-w-[35rem] font-bold lg:leading-[4rem] text-3xl w-fit mx-auto lg:mx-0'>Get Ready for the Future of <span className='w-fit h-fit text-transparent bg-gradient-to-br from-sauce to-mypink bg-clip-text'>PooNomics.</span></motion.h1>
                    <motion.p initial={{ opacity: 0 }} animate={cardView ? { y: [50, 0], opacity: 100 } : {}} transition={{ duration: 0.6, delay: 0.05 }} className='text-mygrey max-w-[40rem] mt-3'>Our upcoming collection of NFTs features a wide range of unique digital assets, each one representing a distinct and one-of-a-kind piece of digital ownership. From rare artwork and exclusive music to innovative virtual real estate and beyond, our NFTs offer a new way to invest in and collect digital assets. Don't miss out on this exciting opportunity to own a piece of the future - stay tuned for the official release!</motion.p>
                </div>

                <div className="w-fit h-fit relative">
                    <Slider {...settings} className="max-w-[18rem]" ref={ref}>
                        {uplist.map((items, i) => {
                            return (
                                <UpcomingTemplate number={items} key={i} />
                            )
                        })}

                    </Slider>
                    <div className=" h-10 w-[12rem] mx-auto flex items-center text-3xl justify-center gap-x-10">
                        <HiOutlineArrowNarrowLeft className='cursor-pointer' onClick={() => ref?.current?.slickPrev()} />
                        <HiOutlineArrowNarrowRight className='cursor-pointer ' onClick={() => ref?.current?.slickNext()} />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Future