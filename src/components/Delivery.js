import React from 'react';
import logo from '../Images/QK_appp.jpg'

const Delivery = () => {
  return (
    <div className='delivery-container'>
        <h1 className='h1-center'> Quick Delivery App</h1>
        <div className='img-container'>
            <img className='delivery-img' src={logo} />
            <div className='install-apk'>
                <p className='get'>Get The App</p>
                <h2> Limitless Convenience on-demand</h2>
                <p className='description'>Discover the freshest and finest selection of fruits, vegetables, and groceries with our online shopping experience at GroceryHub. From farm-fresh produce to pantry essentials, we bring the market to your fingertips. Enjoy the ease of ordering high-quality items and having them delivered straight to your door. Elevate your grocery shopping with GroceryHub and savor the goodness of every bite. Freshness, variety, and convenience – all in one place.</p>
                <button>Get Started</button>
            </div>
        
        </div>

    </div>
  )
}

export default Delivery