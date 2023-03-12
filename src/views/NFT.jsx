import React from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import NFTImage from '../components/NFTImage'

const NFT = () => {

    const [titleRef, titleView] = useInView({ triggerOnce: true, threshold: 1 })

    const nftList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    return (
        <section className='w-full h-auto bg-hero relative z-10 overflow-hidden text-white font-poppins py-20' id="NFTs">
            <div className="w-[30rem] h-[30rem] absolute top-0 -left-52">
                <div className="w-full h-full rounded-full absolute border-[1px] opacity-20"></div>
                <div className="w-full h-full rounded-full absolute border-[1px] opacity-20 top-10 left-10"></div>
            </div>

            <div className="w-[30rem] h-[30rem] absolute -right-52 top-40">
                <div className="w-full h-full rounded-full absolute border-[1px] opacity-20"></div>
                <div className="w-full h-full rounded-full absolute border-[1px] opacity-20 top-10 left-10"></div>
            </div>

            <div className="w-full max-w-[1500px] mx-auto px-10">
                <div className="w-fit mx-auto text-center">
                    <h2 className='text-mypink text-medium font-medium'>Our collection</h2>
                    <div className="h-fit w-fit relative mt-2" ref={titleRef}>
                        <h1 className='font-header text-7xl font-bold mt-2 z-0 stroke-white opacity-30'>NFTs</h1>

                        <motion.h1 whileInView={{ y: 25 }} transition={{ duration: 0.7, delay: 0.3, ease: [0.33, 1, 0.68, 1] }} className='absolute font-header text-7xl font-bold mt-2 z-10 bottom-0 left-0'>NFTs</motion.h1>
                    </div>
                </div>

                <div className="mt-20 w-full flex flex-wrap gap-7 gap-y-7 items-center justify-center">
                    {nftList.map((items, i) => {
                        return (
                            <div className="w-fit h-fit relative" key={i}>
                                <NFTImage key={i} i={i} />

                            </div>
                        )
                    })}
                </div>


            </div>


        </section>
    )
}

export default NFT