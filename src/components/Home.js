import React from 'react'
import { motion } from 'framer-motion'

const Home = () => {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }
  return (
    <motion.div
      className="home-container"
      initial="hidden"
      animate="visible"
      variants={variants}
    >
      <div className="hero">
        <div className="container">
          <a href="https://www.solarcea.com">
            <motion.img
              src="/images/roofing-logo.webp"
              alt="Roofing"
              whileHover={{ scale: 1.1 }}
            />
          </a>
          <h2>Roofing</h2>
        </div>

        <div className="container">
          <a href="https://www.solarcea.com">
            <motion.img
              src="/images/solar-logo.webp"
              alt="Solar"
              whileHover={{ scale: 1.1 }}
            />
          </a>
          <h2>Solar</h2>
        </div>

        <div className="container">
          <a href="https://www.solarcea.com">
            <motion.img
              src="/images/water-logo.webp"
              alt="Water"
              whileHover={{ scale: 1.1 }}
            />
          </a>
          <h2>Water</h2>
        </div>
      </div>
    </motion.div>
  )
}
export default Home
