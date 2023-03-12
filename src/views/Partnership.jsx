import React from 'react'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'


const Partnership = () => {

    const [titleRef, titleView] = useInView({ triggerOnce: true, threshold: 0.3 })
    const [spRef, spView] = useInView({ triggerOnce: true, threshold: 0.3 })


    return (
        <section className='w-full h-auto py-20 bg-[#050552] relative z-10 font-poppins text-white overflow-hidden' ref={titleRef} id="partners">
            <div className="h-full flex justify-between items-center max-w-[1500px] mx-auto w-full px-10 md:flex-row flex-col">
                <div className="w-full flex items-center relative z-10">
                    <div className="">
                        <motion.h2 initial={{ opacity: 0 }} animate={titleView ? { y: [50, 0], opacity: 100 } : {}} transition={{ duration: 0.6 }} className='text-mypink text-medium font-medium'>Partnership</motion.h2>
                        <motion.div initial={{ opacity: 0 }} animate={titleView ? { y: [50, 0], opacity: 100 } : {}} transition={{ duration: 0.6, delay: 0.1 }} className="h-fit w-fit relative mt-2">
                            <h1 className='font-header sm:text-7xl text-4xl font-bold mt-2 z-10 sm:max-w-[47rem] sm:leading-[4.8rem]'>Now partnered with Sphynx and Darksea!</h1>
                        </motion.div>

                        <motion.p initial={{ opacity: 0 }} animate={titleView ? { y: [50, 0], opacity: 100 } : {}} transition={{ duration: 0.6, delay: 0.15 }} className="text-mygrey max-w-[45rem] mt-3">
                            As the crypto market continues to evolve and mature, we recognize the importance of collaboration and building strong relationships with key players in the industry.
                        </motion.p>

                        <div className="flex items-center gap-7 sm:flex-row flex-col mt-10">
                            <a href="https://sphynxlabs.co/" target="_blank" rel="noopener noreferrer" className="">
                                <motion.button initial={{ opacity: 0 }} animate={titleView ? { opacity: 100 } : {}} transition={{ duration: 0.6, delay: 0.3 }} className="flex items-center gap-x-2 bg-gradient-to-br px-7 py-3 from-sauce to-mypink rounded-lg transition-all ease-in-out duration-300 hover:shadow-hover hover:translate-y-[-6px] font-header font-bold">
                                    <p className="text-lg">Visit Sphynx</p>
                                </motion.button>
                            </a>

                            <a href="https://thesphynx.co/swap/20202021" target="_blank" rel="noopener noreferrer" className="">
                                <motion.button initial={{ opacity: 0 }} animate={titleView ? { opacity: 100 } : {}} transition={{ duration: 0.6, delay: 0.3 }} className="flex items-center gap-x-2 bg-gradient-to-br px-7 py-3 from-sauce to-mypink rounded-lg transition-all ease-in-out duration-300 hover:shadow-hover hover:translate-y-[-6px] font-header font-bold">
                                    <p className="text-lg">Sphynx Swap</p>
                                </motion.button>
                            </a>

                            <a href="https://thesphynx.co/bridge/20202021" target="_blank" rel="noopener noreferrer" className="">
                                <motion.button initial={{ opacity: 0 }} animate={titleView ? { opacity: 100 } : {}} transition={{ duration: 0.6, delay: 0.3 }} className="flex items-center gap-x-2 bg-gradient-to-br px-7 py-3 from-sauce to-mypink rounded-lg transition-all ease-in-out duration-300 hover:shadow-hover hover:translate-y-[-6px] font-header font-bold">
                                    <p className="text-lg">Sphynx Bridge</p>
                                </motion.button>
                            </a>

                            <a href="https://darksea.app/#/home" target="_blank" rel="noopener noreferrer" className="">
                                <motion.button initial={{ opacity: 0 }} animate={titleView ? { opacity: 100 } : {}} transition={{ duration: 0.6, delay: 0.3 }} className="flex items-center gap-x-2 bg-gradient-to-br px-7 py-3 from-sauce to-mypink rounded-lg transition-all ease-in-out duration-300 hover:shadow-hover hover:translate-y-[-6px] font-header font-bold">
                                    <p className="text-lg">Visit Darksea</p>
                                </motion.button>
                            </a>
                        </div>

                    </div>

                </div>
                <div className="">
                    <motion.img initial={{ opacity: 0 }} animate={spView ? { scale: [1.8, 1], opacity: 100, x: [100, 0] } : {}} transition={{ duration: 0.8 }} src="/partner.webp" alt="Partner" className="sm:w-[50vh] md:relative absolute top-0 bottom-0 my-auto opacity-50 z-[1] md:opacity-100 drop-shadow-partner" ref={spRef} />

                    <motion.img initial={{ opacity: 0 }} animate={spView ? { scale: [1.8, 1], opacity: 100, x: [150, 0] } : {}} transition={{ duration: 0.8 }} src="/darksea.webp" alt="Partner" className="sm:w-[45vh] absolute top-[8rem] 2xl:right-[23rem] sm:right-[9rem] left-0 sm:left-auto my-auto opacity-50 z-0 md:opacity-100 drop-shadow-partner" />

                </div>
            </div>

        </section>
    )
}

export default Partnership