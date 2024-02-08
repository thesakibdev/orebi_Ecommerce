import React from 'react'

const Badge = ({title,className}) => {
  return (
    <h3 className={`text-center py-[9px] px-8 bg-primary text-xs font-bold text-white ${className}`} >{title}</h3>
  )
}

export default Badge