import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Navbar = () => {
  let [toggle, setToggle] = useState(false)

  const handleClick = () => {
    setToggle(!toggle)
  }

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  return (
    <>
      <Link className="logo" to="/">
        <img src="512x512.png" alt="logo" className="logo" />
      </Link>
      <div className="menu">
        <button onClick={handleClick} className="menu-bar" alt="menu">
          <FaBars size="25" color="green" className="icon" />
        </button>
      </div>
      {toggle ? (
        <motion.div
          className="navbar"
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.75 }}
          variants={variants}
        >
          <Link className="link" to="/about">
            About
          </Link>

          <Link className="link" to="/join">
            Join
          </Link>

          <Link className="link" to="/login">
            Agent-Login
          </Link>
        </motion.div>
      ) : null}
    </>
  )
}
export default Navbar

//
