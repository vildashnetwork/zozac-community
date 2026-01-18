import React, { useState } from 'react';
import './Usecase.css';
import img1 from '../../assets/WhatsApp Image 2025-07-04 at 10.09.29_8f52353b.jpg'
import img2 from '../../assets/WhatsApp Image 2025-07-04 at 10.09.32_59085943.jpg'
import img3 from '../../assets/WhatsApp Image 2025-07-04 at 10.09.40_474fb199.jpg'

// The data for all use cases
const useCasesData = [
  //   {
  //     id: 'introduction',
  //     title: 'What We Do',
  //     description: `Education: Provide scholarships and promote quality education for kids and youths.
  // Capacity Building: Organize conferences, seminars, and workshops to educate, transform, and empower.
  // Programs for Peace and Unity: Host sports competitions like "Canini Nitata" to promote peace, unity, and community development, train what we call "Peace Guards" to be peace diplomats and advocates. 
  // Skill Development: Offer training sessions to help youths develop their talents and skills.
  // Environmental Conservation: Plant trees and promote eco-friendly environments.
  // Humanitarian Works: Engage in volunteering, humanitarian works, and promote agriculture and culture.
  //        At ZOZAC Community, we believe in the power of togetherness. Let's work together to create a better tomorrow for all.`,
  //     points: [
  //       'surviving comunities',

  //     ],
  //     imgSrc:img1,
  //     imgAlt: 'ZOZAC',
  //   },
  {
    id: 'Our Mission',
    title: 'Our Mission',
    description: `Empowering communities, enreaching lifes.
     together we build future through education, peace and collective action`,

    points: [


    ],
    imgSrc: img2,
    imgAlt: 'ZOZAC',
  },
  {
    id: 'Our Approach',
    title: 'Our Approach',
    description: `We work closely with individuals, communities, organizations, and stakeholders to design and implement programs that meet their unique needs. And our approach is centered on inclusivity, participation, and sustainability`,

    points: [


    ],
    imgSrc: img2,
    imgAlt: 'ZOZAC',
  },
  {
    id: 'Our Vision',
    title: 'Our Vision',
    description: `having a world were communities thrive, empowered by knowledge driven by compassion 
    and united in purpose, creating a sustainable and balance future for all. `,
    points: [



    ],
    imgSrc: img3,
    imgAlt: 'ZOZAC',
  },

];

const UseCases = () => {
  // The active tab (default is healthcare)
  const [activeTab, setActiveTab] = useState('Our Mission');

  return (
    <section id="use-cases" className="use-cases">
      <div className="container">
        {/* <div className="section-header">
          <h2> ZOZAC Community</h2>
          <p>ZOZAC is a non-profit, non-governmental organization committed to empowering individuals and strengthening communities across Africa. We promote peace,
             sustainable development, youth leadership, and humanitarian support — starting from the grassroots.</p>
        </div> */}

        <div className="use-cases-tabs">
          {/* Navigation Tabs */}
          <div className="tabs-nav">
            {useCasesData.map((useCase) => (
              <button
                key={useCase.id}
                className={`tab-btn ${activeTab === useCase.id ? 'active' : ''}`}
                onClick={() => setActiveTab(useCase.id)}
              >
                {useCase.id.charAt(0).toUpperCase() + useCase.id.slice(1)}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="tabs-content">
            {useCasesData.map((useCase) => (
              <div
                key={useCase.id}
                className={`tab-pane ${activeTab === useCase.id ? 'active' : ''}`}
                id={useCase.id}
              >
                <div className="tab-content">
                  <div className="tab-text">
                    <h3>{useCase.title}</h3>
                    <p>{useCase.description}</p>
                    <ul>
                      {useCase.points.map((point, index) => (
                        <li key={index}>{point}</li>
                      ))}
                    </ul>
                    {/* <a href="#" className="btn-secondary">
                      Click on next tab <i className="fas fa-arrow-right"></i>
                    </a> */}
                  </div>
                  <div className="tab-image">
                    <img src={useCase.imgSrc} alt={useCase.imgAlt} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;



