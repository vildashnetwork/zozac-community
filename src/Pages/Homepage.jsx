import React from 'react'
import Hero from '../Componennts/Hero/Hero'
import Features from '../Componennts/Feature/Feature'
import UseCases from '../Componennts/Usecases/Usecases'
import Samples from '../Componennts/Samples/Samples'
import Pricing from '../Componennts/Prising/Prising'
import Gallery from '../Componennts/Gallery/Gallery'
// import CTA from '../Componennts/CTA/CTA'
// import ContactForm  from "./Email"

const Homepage = () => {
  return (
    <div>
      <Hero/>
            <Features/>
          <UseCases/>
          <Samples/>
          <Gallery/>
          <Pricing/>
      {/* <ContactForm/>  */}
          {/* <CTA/> */}
      
    </div>
  )
}

export default Homepage







