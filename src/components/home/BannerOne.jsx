import React from 'react'


const BannerOne = ({src,alt,className}) => {
  return (
    <div className={`${className}`}>
        <a href="/shop"><img src={src} alt={alt} /></a>
    </div>
  )
}

export default BannerOne