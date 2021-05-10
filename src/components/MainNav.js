import React from 'react'
import { Link } from 'react-router-dom'
import { FaPhone, FaMoneyBill, FaToolbox } from 'react-icons/fa'

const MainNav = () => {
  return (
    <>
      <div className="bottom-nav">
        <Link to="/work" className="btm-link">
          <FaToolbox size="30px" />
          <h4>Work</h4>
        </Link>
        <Link to="/hiring" className="btm-link">
          <FaMoneyBill size="30px" />
          <h4>Hiring</h4>
        </Link>
        <Link to="contact" className="btm-link">
          <FaPhone size="30px" />
          <h4>Contact</h4>
        </Link>
      </div>
    </>
  )
}
export default MainNav
