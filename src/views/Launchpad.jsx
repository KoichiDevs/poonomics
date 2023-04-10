import React from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { FaLongArrowAltRight, FaTelegramPlane } from 'react-icons/fa'

const Launchpad = () => {

    const [titleRef, titleView] = useInView({ triggerOnce: true, threshold: 1 })
    const [cardRef, cardView] = useInView({ triggerOnce: true, threshold: 0.5 })

    const valList = [
        {
            label: "Token",
            val: "Brick"
        },
        {
            label: "Participants",
            val: "2398"
        },
        {
            label: "Raised",
            val: "1.75%"
        },
        {
            label: "Current Fee",
            val: "0.1 BNB"
        },
        {
            label: "Total Token",
            val: "2.1939205"
        },
        {
            label: "Total Liquidity Raised",
            val: "$ 987,456,783"
        },
        {
            label: "Total Liquidity Locked",
            val: "$ 987,456,783"
        }
    ]

    return (
        <section className='w-full h-auto py-20 text-white bg-hero z-10 relative font-poppins overflow-hidden' id="launchpad">
            <img src="/left.webp" alt="Left" className="absolute left-0 sm:w-auto w-[10rem] sm:top-0 top-20 opacity-60 sm:opacity-100" />
            <img src="/right.webp" alt="Left" className="absolute right-0 sm:top-10 sm:w-auto w-[10rem] top-28 opacity-60 sm:opacity-100" />
            <div className="mx-auto w-fit text-center mt-10">
                <h2 className='text-mypink text-medium font-medium'>Get ready to launch</h2>
                <div className="h-fit w-fit relative mt-2 mx-auto" ref={titleRef}>
                    <h1 className='font-header text-7xl font-bold mt-2 z-0 stroke-white opacity-30'>LAUNCHPAD</h1>
                    <motion.h1 whileInView={{ y: 25 }} transition={{ duration: 0.7, delay: 0.3, ease: [0.33, 1, 0.68, 1] }} className='absolute font-header text-7xl font-bold mt-2 z-10 bottom-0 left-0'>LAUNCHPAD</motion.h1>
                </div>
                <motion.div initial={{ opacity: 0 }} animate={cardView ? { scale: [0.5, 1], opacity: 100 } : {}} transition={{ duration: 0.7, delay: 0.3, ease: [0.33, 1, 0.68, 1], type: "spring", stiffness: 250 }} ref={cardRef} className="bg-picbg border-2 border-mypink h-auto lg:w-[45rem] w-[20rem]  first-letter: p-3 mx-auto mt-28 rounded-xl z-10 relative flex gap-x-6 lg:flex-row flex-col">
                    <div className="h-[24rem] relative lg:w-[35rem]">
                <img src="/token.webp" alt="" className="absolute w-full h-full object-cover rounded-xl" />
                </div>
                <div className="w-full h-auto">
                    <div className=" flex items-center justify-between mt-4">
                        <h1 className='font-header text-2xl font-bold'>PooNomics</h1>
                        <div className="w-20 h-8 bg-status rounded-2xl flex items-center justify-around border-[1px] border-[#06b153]">
                            <div className="w-3 h-3 bg-[#06b153] rounded-full ml-2"></div>
                            <p className='text-sm mr-2 text-[#06b153] font-semibold'>Live</p>
                        </div>
                    </div>
                    <div className="mt-4 flex flex-col gap-y-2">
                        {valList.map((items, i) => {
                            return (
                                <div className=" flex items-center justify-between" key={i}>
                                    <h1 className='font-header lg:text-xl font-bold'>{items.label}: </h1>
                                    <p className="text-mygrey mr-2 font-medium">{items.val}</p>
                                </div>
                            )
                        })}
                    </div>
                    <a href="" target='_blank' rel="noopener noreferrer" className="">
                        <button className="w-full py-3 bg-gradient-to-br from-sauce to-mypink mt-6 rounded-xl">
                            <p className='text-center font-header font-bold text-xl'>View token</p>
                        </button>
                    </a>
                </div>
            </motion.div>
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
        </div>
    </section>
)
}

export default Launchpad
