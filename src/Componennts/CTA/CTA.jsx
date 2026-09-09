import React, { useState } from 'react';
import './CTA.css'
import Donate from '../../Pages/Donation/Donate';
const CTA = () => {

  const [show, setshow] = useState(false)
  return (
    <>
    {show && <Donate onClose={() => setshow(false)} />}
    <section className="cta">
      <div className="container">
        <div className="cta-content">
 
          <div className="cta-buttons">
        

            <a onClick={()=> window.location.href="/vol" } className="btn-outline">Meet Our Vulonteers</a>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default CTA;
