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
        <a href="https://www.facebook.com/">
          <AiOutlineFacebook size="25px" />
        </a>
        <a href="https://www.instagram.com/">
          <AiOutlineInstagram size="25px" />
        </a>
        <a href="https://www.linkedin.com/feed/">
          <AiOutlineLinkedin size="25px" />
        </a>
      </div>
    </>
  )
}
export default SocialMedia
