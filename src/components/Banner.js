import React from 'react'

export default function Banner({children, title, subtitle, price}) {
  return (
    <div className='banner'> 
        <h1>
           {title} 
        </h1>
        <div></div>
        <p>{subtitle+price}</p>
        {children}
    </div>
  )
}
