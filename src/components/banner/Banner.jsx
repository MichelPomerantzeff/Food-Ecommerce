import React from 'react'
import './Banner.css'

export default function Banner({banner}) {
  return (
    <div className="banner">
        <div className="banner-wrapper">
            <img src={banner} alt="Banner Image" />
        </div>
    </div>
  )
}
