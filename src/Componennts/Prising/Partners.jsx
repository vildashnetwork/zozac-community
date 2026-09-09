import React from "react";
import "./Partners.css";

// Partner wall - add real partner names and site URLs here when available
const partners = [
  { name: "BLISSZ CONCEPTS G", logo: "/1.jfif" },
  { name: "BLISSZ CONCEPTS G", logo: "/2.jfif" },
  { name: "BLISSZ CONCEPTS G", logo: "/3.jfif" },
  { name: "BLISSZ CONCEPTS G", logo: "/4.jfif" },
  { name: "BLISSZ CONCEPTS G", logo: "/5.jfif" },
  { name: "BLISSZ CONCEPTS G", logo: "/6.jfif" },
  { name: "BLISSZ CONCEPTS G", logo: "/7.jfif" },
];

const Partners = () => {
  return (
    <section className="partners" aria-labelledby="partners-title">
      <header className="partners-heading">
        <span className="partners-kicker">Partnerships</span>
        <h2 className="partners-title" id="partners-title">Our Partners</h2>
        <p className="partners-intro">
          To our amazing partners - your partnership, collaboration and support
          have been and remain very instrumental in our success. Together, we
          are developing communities, transforming lives, driving meaningful
          change and creating a brighter future for all. Thank you for always
          standing by us and amplifying our impact.
        </p>
      </header>

      <div className="partners-panel">
        <div className="partners-grid">
          {partners.map((partner, index) => (
            <div className="partners-card" key={index} title={partner.name}>
              <img src={partner.logo} alt={partner.name} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;