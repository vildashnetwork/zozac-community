import React from 'react'
import Hero from '../Componennts/Hero/Hero'
import Features from '../Componennts/Feature/Feature'
import UseCases from '../Componennts/Usecases/Usecases'
import Samples from '../Componennts/Samples/Samples'
import Pricing from '../Componennts/Prising/Prising'
import Gallery from '../Componennts/Gallery/Gallery'
import VideoShowcase from '../Componennts/VideoShowcase/VideoShowcase'
// import CTA from '../Componennts/CTA/CTA'
// import ContactForm  from "./Email"

const Homepage = () => {
  return (
    <div>
      <Hero />
      <Features />
      <VideoShowcase />

      <br />
      <div className="footer-location">
        <div className="footer-location-heading">
          <span className="footer-location-kicker">Find us</span>
          <h4>Our location</h4>
        </div>
        <div className="footer-location-map">
          <iframe
            title="ZOZAC Community on Google Maps"
            src="https://maps.google.com/maps?q=ZOZAC+Community+AFUH+Alfred+Ngum+Likomba&z=16&hl=en&ie=UTF8&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          ></iframe>
        </div>
        <a
          className="footer-location-link"
          href="https://maps.app.goo.gl/hqjXhBJcCB8FCaPJ6"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open in Google Maps →
        </a>
      </div>

      <UseCases />
      <Samples />
      <Gallery />
      <Pricing />

      {/* <ContactForm/>  */}
      {/* <CTA/> */}

    </div>
  )
}

export default Homepage







