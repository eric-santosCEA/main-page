import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'

const Navbar = () => {
  let [toggle, setToggle] = useState(false)

  const handleClick = () => {
    setToggle(!toggle)
  }

  return (
    <>
      <Link className="logo" to="/">
        <img src="512x512.png" alt="logo" className="logo" />
      </Link>
      <div className="menu">
        <button onClick={handleClick} className="menu-bar">
          <FaBars size="25" color="green" className="icon" />
        </button>
      </div>
      {toggle ? (
        <div className="navbar">
          <Link className="link" to="/about">
            About
          </Link>

          <Link className="link" to="/join">
            Join
          </Link>

          <Link className="link" to="/login">
            Agent-Login
          </Link>
        </div>
      ) : null}
    </>
  )
}
export default Navbar

//
