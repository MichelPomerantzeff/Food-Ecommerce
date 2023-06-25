import React from 'react'
import './Banner.css'
import { banner } from '../../data'

export default function Banner() {
  return (
    <div className="banner">
        <div className="banner-wrapper">
            <img src={banner[0].image} alt="Banner Image" />
        </div>
    </div>
  )
}
