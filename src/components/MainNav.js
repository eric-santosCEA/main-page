import React from 'react'
import { Link } from 'react-router-dom'

const MainNav = () => {
  return (
    <>
      <div className="bottom-nav">
        <Link to="/work" className="btm-link">
          <h4>Work</h4>
        </Link>
        <Link to="/hiring" className="btm-link">
          <h4>Hiring</h4>
        </Link>
        <Link to="contact" className="btm-link">
          <h4>Contact</h4>
        </Link>
      </div>
    </>
  )
}
export default MainNav
