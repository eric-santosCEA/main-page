import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar">
      <Link className="link" to="/">
        Home
      </Link>
      <Link className="link" to="/about">
        About
      </Link>
      <Link className="link" to="/join">
        Join
      </Link>
      <Link className="link" to="/login">
        <button>
          <h3>Login</h3>
        </button>
      </Link>
    </div>
  )
}
export default Navbar
