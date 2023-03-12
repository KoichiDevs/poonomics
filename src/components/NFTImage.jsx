import React, { useState } from 'react'
import { motion } from 'framer-motion'

const NFTImage = ({ i }) => {

    const [hover, setHover] = useState(false)

    const enter = () => {
        setHover(true)
    }

    const leave = () => {
        setHover(false)
    }

    return (
        <motion.div initial={{opacity: 0, scale: 0.5}} whileInView={{opacity: 100, scale:  1}} transition={{delay: 0.3, duration: 0.5}} className="">
            <motion.div animate={hover ? { rotate: [0, 5, -5, 5, -5, 0] } : { rotate: 0 }} className="bg-picbg border-2 border-mypink h-auto w-[16rem] p-3 mx-auto rounded-xl z-10 relative" onMouseEnter={enter} onMouseLeave={leave}>
                <div className="h-[14rem] relative">
                    <img src="/dummy.webp" alt="" className="absolute w-full h-full object-cover rounded-xl" />
                </div>
                <div className="w-full h-auto">
                    <div className=" flex items-center justify-between mt-2">
                        <h1 className='font-header text-2xl font-bold ml-2'>PooNomic</h1>
                        <p className='text-md mr-2'>0 POOP</p>

                    </div>

                </div>

                <motion.div initial={{ opacity: 0 }} animate={hover ? { opacity: 100 } : { opacity: 0 }} className="w-full h-full shadow-nftglow absolute top-0 left-0 rounded-xl"></motion.div>
            </motion.div>
        </motion.div>

    )
}

export default NFTImage