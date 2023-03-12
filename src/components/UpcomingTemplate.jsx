import React from 'react'
import { motion } from 'framer-motion'


const UpcomingTemplate = ({ number }) => {
    return (
        <motion.div initial={{ opacity: 0 }} whileInView={{ scale: [0.5, 1], opacity: 100 }} transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }} className="bg-picbg border-2 border-mypink h-auto w-[18rem] p-3 mx-auto mt-20 lg:mt-18 rounded-xl m-2 z-10 relative">
            <div className="h-[18rem] relative">
                <img src="/token.webp" alt="" className="absolute w-full h-full object-cover" />
            </div>
            <div className="w-full h-auto">
                <div className=" flex items-center justify-between mt-4">
                    <h1 className='font-header text-2xl font-bold'>PooNomic {number}</h1>
                    <div className="w-fit gap-x-2 h-8 bg-status rounded-2xl flex items-center justify-around">
                        <div className="w-3 h-3 bg-mygrey rounded-full ml-2"></div>
                        <p className='text-sm mr-2'>???</p>
                    </div>
                </div>

                <div className=" flex items-center justify-between mt-4">
                    <h1 className='font-header text-xl font-bold'>Liquidity: </h1>
                    <p className="text-mygrey mr-2 font-medium">0%</p>
                </div>

                <div className=" flex items-center justify-between mt-2">
                    <h1 className='font-header text-xl font-bold'>Lockup time: </h1>
                    <p className="text-mygrey mr-2 font-medium">180 days</p>
                </div>


            </div>
        </motion.div>
    )
}

export default UpcomingTemplate