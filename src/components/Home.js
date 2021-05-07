import React from 'react'

const Home = () => {
  return (
    <div className="home-container">
      <div className="btn">
        <a href="https://www.solarcea.com">
          <button
            style={{
              backgroundImage: 'url(/images/logo.png)',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'fixed',
              backgroundOrigin: 'center',
              backgroundSize: '20rem 20rem',
              backgroundColor: 'red',
            }}
          />
        </a>

        <a href="https://www.solarcea.com/">
          <button
            style={{
              backgroundImage: 'url(/images/logo.png)',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'fixed',
              backgroundOrigin: 'center',
              backgroundSize: '20rem 20rem',
              backgroundColor: '#5cba47',
            }}
          />
        </a>

        <a href="https://www.solarcea.com">
          <button
            style={{
              backgroundImage: 'url(/images/logo.png)',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'fixed',
              backgroundOrigin: 'center',
              backgroundSize: '20rem 20rem',
              backgroundColor: 'blue',
            }}
          />
        </a>
      </div>

      {/* <img src="/images/city.jpg" alt="city" className="image" /> */}
    </div>
  )
}
export default Home
