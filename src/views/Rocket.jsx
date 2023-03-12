import React from 'react'
import { motion, useScroll, useTransform, useSpring, useAnimation } from 'framer-motion'

const Rocket = () => {
    return (
        <div className="w-full h-auto relative z-10 -mb-2">
            <img src="/rocket.webp" alt="rocket" className="w-full" />
        </div>
    )
}

export default Rocket