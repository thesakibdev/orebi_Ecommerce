import React from 'react'
import BannerTwo from '../../assets/banner-two.jpg'
import BannerThree from '../../assets/banner-three.jpg'
import BannerFour from '../../assets/banner-four.jpg'
import { Link } from 'react-router-dom'

const Ads = () => {
  return (
    <div className='container mx-auto grid md:grid-cols-2 justify-between pt-10 lg:pt-36'>
        <div className="">
            <Link to="/shop"><img src={BannerTwo} className='w-full' alt="banner" /></Link>
        </div>
        <div className="flex flex-col gap-10">
            <div className="">
                <Link to="/shop"><img src={BannerThree} className='w-full' alt="banner" /></Link>
            </div>
            <div className="">
                <Link to="/shop"><img src={BannerFour} className='w-full' alt="benner" /></Link>
            </div>
        </div>
    </div>
  )
}

export default Ads