import React from 'react'
import './About.css'
import Navbar from '../../components/navbar/Navbar'
import { aboutImg } from '../../data/data'

export default function About() {
  return (
    <>
        <Navbar/>
        <section className='about'>
            <div className="heading">
                <h1>THE MISSING SOLUTION IN YOUR DAILY ROUTINE</h1>
                <p>
                    If you appreciate the fusion of delectable and nutritious cuisine that 
                    promotes wellness for both individuals and the planet, allow me to present an enticing offering.
                </p>
            </div>
                <img className='about-img' src={aboutImg} alt="" />
        </section>
    </>
  )
}
