import React from 'react'
import { Link } from 'react-router-dom'
import { FaPhone, FaMoneyBill, FaToolbox } from 'react-icons/fa'

const MainNav = () => {
  return (
    <>
      <div className="bottom-nav">
        <Link to="/work" className="btm-link">
          <FaToolbox size="30px" color="#F0E5D8" />
          <h1>Work</h1>
        </Link>
        <Link to="/hiring" className="btm-link">
          <FaMoneyBill size="30px" color="#F0E5D8" />
          <h1>Hiring</h1>
        </Link>
        <Link to="contact" className="btm-link">
          <FaPhone size="30px" color="#F0E5D8" />
          <h1>Contact</h1>
        </Link>
      </div>
    </>
  )
}
export default MainNav
