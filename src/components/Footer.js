import React from 'react'
import { GrProjects } from 'react-icons/gr'
import SocialMedia from './SocialMedia'

const Footer = () => {
  return (
    <div className="footer">
      <div className="projects">
        <GrProjects size="20px" />
        <h3>Projects</h3>
      </div>
      <SocialMedia />
    </div>
  )
}
export default Footer
