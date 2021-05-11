import React from 'react'
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from 'react-icons/ai'

const SocialMedia = () => {
  return (
    <>
      <div className="social-media">
        <div className="box">
          <a href="https://www.facebook.com/">
            <AiOutlineFacebook size="25px" className="icon" />
            <h6>Facebook</h6>
          </a>
        </div>
        <div className="box">
          <a href="https://www.instagram.com/">
            <AiOutlineInstagram size="25px" className="icon" />
            <h6>Instagram</h6>
          </a>
        </div>
        <div className="box">
          <a href="https://www.linkedin.com/feed/">
            <AiOutlineLinkedin size="25px" className="icon" />
            <h6>LinkedIn</h6>
          </a>
        </div>
      </div>
    </>
  )
}
export default SocialMedia
