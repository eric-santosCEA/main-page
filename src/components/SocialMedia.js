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
        <a href="#">
          <AiOutlineFacebook size="25px" />
        </a>
        <a href="#">
          <AiOutlineInstagram size="25px" />
        </a>
        <a href="#">
          <AiOutlineLinkedin size="25px" />
        </a>
      </div>
    </>
  )
}
export default SocialMedia
