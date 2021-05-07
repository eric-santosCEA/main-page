import React from 'react'

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero">
        <div className="container">
          <a href="https://www.solarcea.com">
            <img src="/images/roofing-logo.jpg" alt="Roofing" />
          </a>
          <h2>Roofing</h2>
        </div>

        <div className="container">
          <a href="https://www.solarcea.com">
            <img src="/images/solar-logo.png" alt="Solar" />
          </a>
          <h2>Solar</h2>
        </div>

        <div className="container">
          <a href="https://www.solarcea.com">
            <img src="/images/water-logo.jpeg" alt="Water" />
          </a>
          <h2>Water</h2>
        </div>
      </div>

      {/* <img src="/images/city.jpg" alt="city" className="image" /> */}
    </div>
  )
}
export default Home
