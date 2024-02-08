import React from 'react'


const Heading = ({title,className}) => {
  return (
    <h1 className={`text-primary font-bold ${className}`}>{title}</h1>
  )
}

export default Heading