import React, { useEffect, useRef, useState } from 'react'
import { FaTelegramPlane, FaLongArrowAltRight } from 'react-icons/fa'
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion'
import NET from 'vanta/dist/vanta.net.min'
import * as THREE from 'three'


const Hero = () => {

    const ref = useRef(null)
    const [vantaEffect, setVantaEffect] = useState(null)
    const myRef = useRef(null)

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "end start"]
    })

    const opacitySpring = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const opacity1 = useTransform(opacitySpring, [0.1, 0.5], [1, 0])
    const opacity2 = useTransform(opacitySpring, [0.1, 0.7], [0, 1])

    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(NET({
                el: myRef.current,
                mouseControls: false,
                touchControls: false,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                color: 0xffffff,
                backgroundColor: 0x1D1862,
                points: 17.00,
                maxDistance: 0.00,
                spacing: 17.00

            }))
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect])

    const [slide, setSlide] = useState(1)

    const imageList = [1, 2, 3, 4, 5, 6]

    useEffect(() => {
        setTimeout(() => {
            if (slide >= 6) {
                setSlide(1)
            } else {
                setSlide(curr => curr + 1)
            }
            console.log(slide)
        }, 4000);
    }, [slide])



    return (
        <div className="w-full h-screen relative" ref={ref} id='home'>
            <div className='w-full h-full fixed top-0 left-0 bg-hero'>

                <section className='w-full h-screen flex items-center text-white font-poppins py-20 relative z-10'>
                    <motion.div className="mx-auto w-full" style={{ opacity: opacity1 }}>
                        <img src="/topog.webp" alt="Topog" className="absolute h-full right-0 top-0" />

                        <div className="w-[14rem] h-[14rem] absolute blur-[135px] bg-[#CDA1FF] rounded-full  top-[18rem] left-[15%] z-[1]"></div>
                        <div className="w-[14rem] h-[14rem] absolute blur-[135px] bg-[#E75F69] rounded-full  bottom-[15rem] right-[20%] z-0"></div>



                        <div className="w-fit px-8 2xl:px-0 mx-auto flex items-center gap-x-0 relative z-10 2xl:gap-x-[8rem] 2xl:max-w-[1500px]">
                            <div className="w-full md:min-w-[30rem] md:text-left text-center">
                                <motion.h2 initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 100 }} transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }} className='text-mypink md:mx-0 mx-auto font-medium '>Be a poonomic</motion.h2>
                                <motion.h1 initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 100 }} transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1], delay: 0.1 }} className='font-header md:text-5xl 2xl:text-7xl 2xl:max-w-[70rem] font-bold max-w-[33rem] mt-2 md:leading-[3.4rem] md:mx-0 mx-auto text-4xl'>Discover Our Rewards dApp And <span className="w-fit h-fit text-transparent bg-gradient-to-br from-sauce to-mypink bg-clip-text">NFT Collections</span></motion.h1>
                                <motion.p initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 100 }} transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1], delay: 0.15 }} className='text-[#d3d2d2] max-w-[33rem] mt-3 md:mx-0 mx-auto'>PooNomics is the Launchpad for PooChain and the first solution that aims to offer a complete set of cryptocurrencie tools that run on PooChain.</motion.p>

                                <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 100 }} transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1], delay: 0.2 }} className="mt-10 flex gap-x-8 items-center md:mx-0 mx-auto w-fit md:flex-row flex-col gap-y-7">
                                    <a href="https://pooswap.finance" target="_blank" rel="noopener noreferrer" className="">
                                        <button className="flex items-center gap-x-2 bg-gradient-to-br px-7 py-4 from-sauce to-mypink rounded-lg transition-all ease-in-out duration-300 hover:shadow-hover hover:translate-y-[-6px]">
                                            <p className="text-lg">Buy Token</p>
                                            <FaLongArrowAltRight />
                                        </button>
                                    </a>

                                    <a href="https://t.me/PooChainBlockchain" target="_blank" rel="noopener noreferrer" className="">
                                        <button className="flex gap-x-2 items-center text-lg">
                                            <p className="">Community</p>
                                            <FaTelegramPlane className='text-xl' />
                                        </button>
                                    </a>

                                </motion.div>

                                <a href="" target="_blank" rel="noopener noreferrer" className="">
                                    <motion.button initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 100 }} transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1], delay: 0.25 }} className="flex gap-x-2 items-center text-lg mt-8 mx-auto lg:mx-0">
                                        <img src="/shib.webp" alt="Shibarium" className="w-7" />
                                        <p className="">Shibarium Integration</p>
                                        <div className="relative w-3 h-3 rounded-full bg-[#06b153] ml-2">
                                            <motion.div animate={{ opacity: [0, 100, 100, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} className="w-full h-full absolute left-0 top-0 bg-[#06b153] shadow-greenGlow rounded-full"></motion.div>
                                        </div>
                                    </motion.button>
                                </a>
                            </div>

                            <div className="w-[45rem] 2xl:w-[130vh] items-center justify-center lg:flex hidden z-10 relative h-[25rem]">

                                <AnimatePresence>
                                    {imageList.map((items, i) => {
                                        return (
                                            slide === items ?
                                                <motion.div
                                                    initial={{ rotateX: 80, opacity: 0 }}
                                                    animate={{ rotateX: 0, y: [-300, 0], opacity: 100 }}
                                                    transition={{ duration: 1, ease: [.16, .95, .8, .97] }}
                                                    exit={{ y: 200, rotateX: -50, opacity: 0 }}
                                                    key={i}
                                                    className="w-full 2xl:h-[26rem] h-[20.3rem] absolute left-0 top-0 bg-[#120621] rounded-2xl border-[0.5rem] border-[#64369B] shadow-mockup "
                                                >
                                                    <img
                                                        src={`mockup/${items}.webp`}
                                                        alt={items}
                                                        style={{ zIndex: i }}
                                                        className="  rounded-2xl  h-full object-cover w-full absolute top-0 left-0"
                                                    />
                                                </motion.div>

                                                : null
                                        )
                                    })}

                                </AnimatePresence>


                            </div>

                        </div>
                    </motion.div>


                    <motion.div style={{ opacity: opacity2 }} className="w-full h-full z-0 absolute ">
                        <div className="w-full h-full absolute left-0 top-0 z-[2]" ref={myRef}></div>
                        <img src="/stars.webp" alt="Stars" className="w-full h-full sm:object-fit mt-[10%] object-cover z-[3] absolute" />
                    </motion.div>


                </section>


            </div>
        </div>


    )
}

export default Hero
