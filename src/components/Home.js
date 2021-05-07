import React from 'react'

const Home = () => {
  return (
    <div className="home-container">
      <div className="btn">
        <button
          style={{
            backgroundImage: 'url(/images/logo.png)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'fixed',
            backgroundOrigin: 'center',
            backgroundSize: '20rem 20rem',
            backgroundColor: 'red',
          }}
        >
          <a href="https://www.solarcea.com/">Roofing</a>
        </button>
        <button
          style={{
            backgroundImage: 'url(/images/logo.png)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'fixed',
            backgroundOrigin: 'center',
            backgroundSize: '20rem 20rem',
            backgroundColor: '#5cba47',
          }}
        >
          <a href="https://www.solarcea.com/">Solar</a>
        </button>
        <button
          style={{
            backgroundImage: 'url(/images/logo.png)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'fixed',
            backgroundOrigin: 'center',
            backgroundSize: '20rem 20rem',
            backgroundColor: 'blue',
          }}
        >
          <a href="https://www.solarcea.com/">Water</a>
        </button>
      </div>

      {/* <img src="/images/city.jpg" alt="city" className="image" /> */}
    </div>
  )
}
export default Home
