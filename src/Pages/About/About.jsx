

// import React, { useState } from 'react';

// import img1 from '../../assets/WhatsApp Image 2025-07-04 at 10.09.35_3aa4d729.jpg'
// import img2 from '../../assets/WhatsApp Image 2025-07-04 at 10.09.30_441aaa22.jpg'
// import Team from '../../Componennts/Team/Team';
// import './About.css';
// const About = () => {

//   const [open, setopen] = useState(false);
//   return (
//     <>

//       <section className="apple">
//         <div className="banana2">
//           {/* Text Column */}
//           <div className="kiwi">
//             <div className="pear">
//               <div className="orange">
//                 <span className="mango"> About ZOZAC</span>
//                 <h2>
//                   About ZOZAC Community

//                 </h2>
//                 <div className="text">
//                   At ZOZAC Community, we are a dynamic non-governmental, non-profit civil society organization
//                   dedicated to empowering the next generation of leaders and creating a brighter future for all.
//                   Our focus is to empower leaders, support community development, and promote positive change.
//                   Our mission is built on the belief that every individual has the potential to make a difference,
//                   while we strive to
//                   create opportunities for growth, development, and positive impact in our communities through areas like:
//                 </div>
//                 <button className="hover" style={{
//                   width: "100%", padding: "12px",
//                   background: "green", color: "#fff", border: "none", outline: "none"
//                 }}
//                   onClick={() => setopen(!open)}>{open ? "Show Less" : "Read More"}</button>

//                 {open &&
//                   <ul className="grape">
//                     <br />
//                     <li>
//                       <b>Education: </b>
//                       <br />
//                       Providing quality education and personal growth opportunities to empower
//                       individuals and communities.
//                     </li>
//                     <li>
//                       <b>Peace Building:  </b>
//                       <br />
//                       Promoting inclusivity and community cohesion through initiatives
//                       that promote understanding, tolerance, and mutual respect.
//                     </li>

//                     <li>
//                       <b>Youth Empowerment:  </b>
//                       <br />
//                       Supporting young people in acquiring skills and being self-sustainable with
//                       opportunities that enable them to contribute to their communities.
//                     </li>

//                     <li>
//                       <b>Humanitarian Aid:  </b>
//                       <br />
//                       Providing support to vulnerable individuals and
//                       communities in need, including emergency relief and long-term development programs.
//                     </li>

//                     <li>
//                       <b>Social Cohesion:  </b>
//                       <br />
//                       Building strong, inclusive, and resilient communities by promoting a sense of belonging, trust, and cooperation among community members.
//                     </li>

//                     <li>
//                       <b>Community Development:  </b>
//                       <br />
//                       Fostering sustainable development and improving the quality of life for communities through initiatives that promote economic growth, social justice and community empowerment.
//                     </li>



//                     <li>
//                       <b>Environmental Preservation:   </b>
//                       <br />
//                       Protecting and conserving the natural environment, promoting sustainable practices and mitigating the impact of climate change.
//                     </li>
//                     <li>
//                       <b>Our Story: </b>
//                       <br />
//                       <br />
//                       ZOZAC Community was founded by Afuh Alfred Ngum, a visionary leader who overcame incredible adversity to drive
//                       positive change. Witnessing the struggles of vulnerable youths and the lack of opportunities for education,
//                       sustainable skills, and employment, he decided to take action starting in 2009 by opening a free recording
//                       studio, movie production house and a stage where young talents can showcase their talents as a young leader
//                       and in 2020 he founded ZOZAC and in 2022, we registered ZOZAC Community, a dynamic association dedicated to
//                       training innovative leaders and promoting community development. And the name "ZOZAC" is derived from our founder
//                       created language, which means "Togetherness Is Strength." This reflects our core belief that collective efforts and
//                       commitment to a common
//                       goal are essential for creating lasting impact and driving positive change.

//                     </li>

//                     <li>
//                       <b>Our Registration: </b>
//                       <br />
//                       <br />
//                       ZOZAC Community is legally registered under the Cameroon government with the headquarters in Tiko sub-division,
//                       Fako division, South West Region, Cameroon, West Africa. And it operates in conformity with the
//                       prescription of Article 7 of Law No <p style={{ color: "green" }}>90/054 of 19/12/1990</p> relating to the creation and functioning of
//                       associations in Cameroon West Africa, with registration No;  <p style={{ color: "green" }}>1165/G.37/C84/VOLI/SAAJP.</p> This registration
//                       demonstrates our commitment to transparency, accountability, and good governance. We envisage a world where
//                       every individual has the opportunity to reach their full potential and contribute to a better society. We are
//                       dedicated to making a lasting impact and creating a brighter future for generations to come, through our work,
//                       we aim to inspire positive change, promote education, peace building, social cohesion, community development, youth
//                       empowerment initiatives, and empower leaders to drive progress
//                       and innovation for community development within self, Cameroon, Africa and beyond.

//                     </li>
//                   </ul>}



//                 <h2>Mission & Vision</h2>
//                 <div className="text">
//                   <p style={{ color: "green" }}>Mission:</p>
//                   <br />
//                   Empower individuals with self-awareness, discipline,
//                   and the willpower to lead themselves and others towards a positive destination built on trust.
//                   <br />
//                   <br />
//                   <p style={{ color: "green" }}>Vision:</p>
//                   <br />
//                   Be the leading force transforming, educating, and empowering individuals,
//                   groups, and communities with knowledge to prepare for tomorrow and the
//                   next generation.


//                   <br />
//                   <br />
//                   <p style={{ color: "green" }}>With it motto:</p>
//                   <br />
//                   Creating innovative leaders for a better tomorrow.

//                   <br />
//                   <br />
//                   <p style={{ color: "green" }}>Slogan:</p>
//                   <br />
//                   Togetherness is strength
//                   <br />
//                   <br />
//                   <p style={{ color: "green" }}>Goal: </p>
//                   <br />
//                   Create a sustainable model for community development that will be replicated in other regions.

//                 </div>


//                 <ul className="grape">
//                   <h1>What We Do</h1>
//                   <li>
//                     <b>Our core purpose: </b>
//                     <br />
//                     <br />

//                     Empowering leaders, promoting community development, and positive change through education,
//                     peace building, youth empowerment, humanitarian aid, and environmental preservation, driven by
//                     collective efforts and commitment to a
//                     common goal, creating a brighter future for
//                     all starting from grassroots communities.
//                   </li>
//                   <li>
//                     <b>Programs:
//                       <br />
//                       <br />
//                       We are dedicated to making a positive impact in the lives of individuals and communities
//                       through our diverse flagship programs
//                       that are designed to empower leaders, foster community development and
//                       promote positive change which include:
//                     </b>
//                   </li>



//                   <li>
//                     <b>Ropauni Peace Guards Initiative</b>
//                     <br />
//                     <br />
//                     Promoting community peace and conflict resolution through training, mediation,
//                     and community engagement, and to create a culture of peace, tolerance,
//                     and understanding.
//                     <br />
//                     <br />
//                     <b>Objectives:</b>
//                     <br />
//                     <ul className="grape">
//                       <li>Train community peace ambassadors (Peace Guards) </li>
//                       <br />
//                       <li>Mediate conflicts and disputes</li>
//                       <br />
//                       <li>Promote peace education and awareness</li>
//                     </ul>

//                   </li>


//                   <li>
//                     <b>ZOZAC Food Program</b>
//                     <br />
//                     <br />
//                     Provides food assistance and nutrition support to vulnerable individuals
//                     and communities, ensuring everyone has access to nutritious food.
//                     <br />
//                     <br />
//                     <b>Objectives:</b>
//                     <br />
//                     <ul className="grape">
//                       <li>Provide food aid to those in need</li>
//                       <br />
//                       <li>Support sustainable agriculture and food systems</li>
//                       <br />
//                       <li>Promote nutrition education and awareness</li>

//                       <br />
//                       <li>Reduce food insecurity and malnutrition</li>
//                     </ul>

//                   </li>






//                   <li>
//                     <b>Go To School</b>
//                     <br />
//                     <br />
//                     Supports education and increases access to quality learning, ensuring every child has the opportunity to learn and succeed.
//                     <br />
//                     <br />

//                     <b>Objectives:</b>
//                     <br />
//                     <ul className="grape">
//                       <li>Provide educational resources and materials</li>
//                       <br />
//                       <li>Support teacher training and development</li>
//                       <br />
//                       <li>Promote literacy and numeracy skills</li>

//                       <br />
//                       <li>Increase access to education for marginalized groups</li>
//                     </ul>

//                   </li>




//                   <li>
//                     <b>Keypoint Awards</b>
//                     <br />
//                     <br />
//                     Recognize and celebrate community leaders and innovators, inspiring and motivating others to make a positive impact.
//                     <br />
//                     <br />

//                     <b>Objectives:</b>
//                     <br />
//                     <ul className="grape">
//                       <li>Recognize outstanding community contributions</li>
//                       <br />
//                       <li>Celebrate innovation and creativity</li>
//                       <br />
//                       <li>Inspire others to make a difference</li>

//                       <br />
//                       <li>Foster a culture of excellence and achievement</li>
//                     </ul>

//                   </li>






//                   <li>
//                     <b>ZOZAC Health Center</b>
//                     <br />
//                     <br />
//                     ZOZAC Health Center delivers healthcare services (first aids) and promotes well-being.
//                     Our goal is to ensure everyone has access to quality healthcare.
//                     <br />
//                     <br />

//                     <b>Objectives:</b>
//                     <br />
//                     <ul className="grape">
//                       <li>Provide first aids</li>
//                       <br />
//                       <li>Promote health education and awareness</li>
//                       <br />
//                       <li>Support disease prevention and control</li>

//                       <br />
//                       <li>Improve health outcomes and quality of life</li>
//                     </ul>

//                   </li>






//                   <li>
//                     <b>ZOZAC Women Network</b>
//                     <br />
//                     <br />
//                     Empowers women and promotes gender equality and support women development and leadership.
//                     <br /> <br />

//                     <b>Objectives:</b>
//                     <br />
//                     <ul className="grape">
//                       <li>Support women economic empowerment</li>
//                       <br />
//                       <li>Provide training and capacity-building for women</li>
//                       <br />
//                       <li>Foster a community of women leaders and mentors</li>

//                       <br />
//                       <b>Slogan: </b>
//                       <br />
//                       <li>Women on the frontline of change</li>
//                     </ul>

//                   </li>









//                   <li>
//                     <b>African Congress For Local Organizations (ACFLO)</b>
//                     <br />
//                     <br />
//                     Bringing together other organizations for collaboration and capacity-building, and our goal
//                     is to strengthen local
//                     organization for community development and promote collective impact.
//                     <br /> <br />
//                     <b>Objectives:</b>
//                     <br />
//                     <ul className="grape">
//                       <li> Provide a platform for networking and collaboration</li>
//                       <br />
//                       <li>Support capacity-building and training for local organizations</li>
//                       <br />
//                       <li>Promote knowledge sharing and innovation</li>
//                       <br />
//                       <li>Encourage partnerships and resource mobilization</li>


//                     </ul>

//                   </li>






//                   <li>
//                     <b>ZOZAC Institute</b>
//                     <br />
//                     <br />
//                     Offer training, research, and capacity and skills building initiatives, support personal and collective development.
//                     <br /> <br />
//                     <b>Objectives:</b>
//                     <br />
//                     <ul className="grape">
//                       <li> Provide training and capacity and skills building programs</li>
//                       <br />
//                       <li>Support research and innovation</li>
//                       <br />
//                       <li>Develop knowledge sharing and collaboration</li>
//                       <br />
//                       <li>Promote excellence and best practices</li>


//                     </ul>

//                   </li>









//                   <li>
//                     <b> ZOZAC Pitch Show</b>
//                     <br />
//                     <br />
//                     About showcases and inspiring innovative ideas and supports entrepreneurship.      <br />
//                     <br /> <br />
//                     <b>Objectives:</b>
//                     <br />
//                     <ul className="grape">
//                       <li>Provide a platform for entrepreneurs to pitch their ideas</li>
//                       <br />
//                       <li>Support innovation and creativity</li>
//                       <br />
//                       <li>Facilitate networking and collaboration</li>
//                       <br />
//                       <li>Promote entrepreneurship and job creation</li>


//                     </ul>

//                   </li>



//                   <li>
//                     <b>ZOZAC Youth Fellowship Program</b>
//                     <br />
//                     <br />
//                     ZOZAC Youth Fellowship Program supports youth development, leadership,
//                     and mentorship with the goal is to empower young people to become leaders and change-makers.   <br /> <br />
//                     <b>Objectives:</b>
//                     <br />
//                     <ul className="grape">
//                       <li>Provide training and capacity-building for youth</li>
//                       <br />
//                       <li> Support youth leadership and mentorship</li>
//                       <br />
//                       <li>Promote youth entrepreneurship and innovation</li>
//                       <br />
//                       <li>Encourage a community of young leaders and change-makers</li>


//                     </ul>

//                   </li>


//                 </ul>
//                 <div className="lemon">
//                   <a href="tel: 674274276" className="pineapple" style={{ background: "#2d5b1a" }}>
//                     Contact Us
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Image Column */}
//           <div className="watermelon">
//             <div className="plum">
//               <figure className="cherry">
//                 <img
//                   src={img1}
//                   alt="Image 1 about"
//                   className="img"
//                 />
//               </figure>
//               <figure className="blueberry">
//                 <img
//                   src={img2}
//                   alt="Image 2 about"
//                   className="img"
//                 />
//               </figure>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Team />



//     </>
//   );
// };

// export default About;











































































































































// import React, { useState } from "react";
// import img1 from "../../assets/WhatsApp Image 2025-07-04 at 10.09.35_3aa4d729.jpg";
// import img2 from "../../assets/WhatsApp Image 2025-07-04 at 10.09.30_441aaa22.jpg";
// import Team from "../../Componennts/Team/Team";

// const About = () => {
//   const [open, setOpen] = useState(false);

//   const sectionStyle = {
//     display: "flex",
//     flexWrap: "wrap",
//     maxWidth: "1400px",
//     margin: "90px auto",
//     padding: "0 30px",
//     gap: "60px",
//     justifyContent: "space-between",
//   };

//   const columnStyle = {
//     flex: "1 1 45%",
//     minWidth: "300px",
//   };

//   const textStyle = {
//     fontSize: "16px",
//     lineHeight: "26px",
//     color: "#848484",
//     marginBottom: "30px",
//   };

//   const titleStyle = {
//     fontSize: "40px",
//     fontWeight: 600,
//     color: "#222",
//     paddingBottom: "18px",
//     position: "relative",
//   };

//   const buttonStyle = {
//     width: "100%",
//     padding: "12px",
//     background: "green",
//     color: "#fff",
//     border: "none",
//     cursor: "pointer",
//     borderRadius: "5px",
//     marginBottom: "30px",
//   };

//   const listStyle = {
//     listStyle: "none",
//     padding: 0,
//     margin: "20px 0",
//   };

//   const listItemStyle = {
//     marginBottom: "12px",
//     paddingLeft: "30px",
//     position: "relative",
//   };

//   return (
//     <>
//       <section className="apple" style={sectionStyle}>
//         {/* Text Column */}
//         <div className="kiwi" style={columnStyle}>
//           <div className="pear">
//             <div className="orange">
//               <span className="mango" style={{ color: "#2d5b1a", fontWeight: 500 }}>
//                 About ZOZAC
//               </span>
//               <h2 style={titleStyle}>About ZOZAC Community</h2>

//               <div className="text" style={textStyle}>
//                 At ZOZAC Community, we are a dynamic non-governmental, non-profit civil society organization
//                 dedicated to empowering the next generation of leaders and creating a brighter future for all.
//                 Our focus is to empower leaders, support community development, and promote positive change.
//                 Our mission is built on the belief that every individual has the potential to make a difference,
//                 while we strive to create opportunities for growth, development, and positive impact in our
//                 communities through areas like:
//               </div>

//               <button style={buttonStyle} onClick={() => setOpen(!open)}>
//                 {open ? "Show Less" : "Read More"}
//               </button>

//               {open && (
//                 <ul className="grape" style={listStyle}>
//                   <li style={listItemStyle}><strong>Education:</strong> Providing quality education and personal growth opportunities to empower individuals and communities.</li>
//                   <li style={listItemStyle}><strong>Peace Building:</strong> Promoting inclusivity and community cohesion through initiatives that promote understanding, tolerance, and mutual respect.</li>
//                   <li style={listItemStyle}><strong>Youth Empowerment:</strong> Supporting young people in acquiring skills and being self-sustainable with opportunities that enable them to contribute to their communities.</li>
//                   <li style={listItemStyle}><strong>Humanitarian Aid:</strong> Providing support to vulnerable individuals and communities in need, including emergency relief and long-term development programs.</li>
//                   <li style={listItemStyle}><strong>Social Cohesion:</strong> Building strong, inclusive, and resilient communities by promoting a sense of belonging, trust, and cooperation among community members.</li>
//                   <li style={listItemStyle}><strong>Community Development:</strong> Fostering sustainable development and improving the quality of life for communities through initiatives that promote economic growth, social justice, and community empowerment.</li>
//                   <li style={listItemStyle}><strong>Environmental Preservation:</strong> Protecting and conserving the natural environment, promoting sustainable practices and mitigating the impact of climate change.</li>
//                   <li style={listItemStyle}><strong>Our Story:</strong> ZOZAC Community was founded by Afuh Alfred Ngum, a visionary leader who overcame incredible adversity to drive positive change. Witnessing the struggles of vulnerable youths and the lack of opportunities for education, sustainable skills, and employment, he decided to take action starting in 2009 by opening a free recording studio, movie production house and a stage where young talents can showcase their talents as a young leader. In 2020 he founded ZOZAC and in 2022 registered ZOZAC Community. The name "ZOZAC" is derived from our founder-created language, meaning "Togetherness Is Strength," reflecting the belief that collective efforts are essential for creating lasting impact and driving positive change.</li>
//                   <li style={listItemStyle}><strong>Our Registration:</strong> ZOZAC Community is legally registered under the Cameroon government with headquarters in Tiko sub-division, Fako division, South West Region, Cameroon. Compliance with Article 7 of Law No <span style={{ color: "green" }}>90/054 of 19/12/1990</span>, Registration No: <span style={{ color: "green" }}>1165/G.37/C84/VOLI/SAAJP</span>. Demonstrates commitment to transparency, accountability, and good governance. We aim to inspire positive change, promote education, peace building, social cohesion, community development, youth empowerment initiatives, and empower leaders to drive progress within Cameroon, Africa, and beyond.</li>
//                 </ul>
//               )}

//               <h2 style={titleStyle}>Mission & Vision</h2>
//               <div className="text" style={textStyle}>
//                 <p><strong style={{ color: "green" }}>Mission:</strong> Empower individuals with self-awareness, discipline, and the willpower to lead themselves and others towards a positive destination built on trust.</p>
//                 <p><strong style={{ color: "green" }}>Vision:</strong> Be the leading force transforming, educating, and empowering individuals, groups, and communities with knowledge to prepare for tomorrow and the next generation.</p>
//                 <p><strong style={{ color: "green" }}>Motto:</strong> Creating innovative leaders for a better tomorrow.</p>
//                 <p><strong style={{ color: "green" }}>Slogan:</strong> Togetherness is strength.</p>
//                 <p><strong style={{ color: "green" }}>Goal:</strong> Create a sustainable model for community development that will be replicated in other regions.</p>
//               </div>

//               <ul className="grape" style={listStyle}>
//                 <h2>What We Do</h2>
//                 <li style={listItemStyle}><strong>Our core purpose:</strong> Empowering leaders, promoting community development, and positive change through education, peace building, youth empowerment, humanitarian aid, and environmental preservation, driven by collective efforts and commitment to a common goal, creating a brighter future for all starting from grassroots communities.</li>
//                 <li style={listItemStyle}><strong>Programs:</strong> We are dedicated to making a positive impact in the lives of individuals and communities through diverse flagship programs designed to empower leaders, foster community development, and promote positive change.</li>
//                 <li style={listItemStyle}><strong>Ropauni Peace Guards Initiative:</strong> Promoting community peace and conflict resolution through training, mediation, and engagement. <strong>Objectives:</strong> Train community peace ambassadors, mediate conflicts, promote peace education and awareness.</li>
//                 <li style={listItemStyle}><strong>ZOZAC Food Program:</strong> Provides food assistance and nutrition support to vulnerable individuals and communities. <strong>Objectives:</strong> Provide food aid, support sustainable agriculture, promote nutrition education, reduce food insecurity.</li>
//                 <li style={listItemStyle}><strong>Go To School:</strong> Supports education and increases access to quality learning. <strong>Objectives:</strong> Provide resources, support teacher development, promote literacy, increase access for marginalized groups.</li>
//                 <li style={listItemStyle}><strong>Keypoint Awards:</strong> Recognize and celebrate community leaders and innovators. <strong>Objectives:</strong> Recognize contributions, celebrate creativity, inspire action, foster excellence.</li>
//                 <li style={listItemStyle}><strong>ZOZAC Health Center:</strong> Delivers healthcare services and promotes well-being. <strong>Objectives:</strong> Provide first aids, promote health education, support disease prevention, improve health outcomes.</li>
//                 <li style={listItemStyle}><strong>ZOZAC Women Network:</strong> Empowers women and promotes gender equality. <strong>Objectives:</strong> Support economic empowerment, provide training, foster women leaders. Slogan: Women on the frontline of change.</li>
//                 <li style={listItemStyle}><strong>ACFLO:</strong> African Congress For Local Organizations strengthens local organizations for community development. <strong>Objectives:</strong> Networking, capacity-building, knowledge sharing, partnerships.</li>
//                 <li style={listItemStyle}><strong>ZOZAC Institute:</strong> Offers training, research, and capacity-building initiatives. <strong>Objectives:</strong> Training, research, knowledge sharing, promoting excellence.</li>
//                 <li style={listItemStyle}><strong>ZOZAC Pitch Show:</strong> Showcases innovative ideas and supports entrepreneurship. <strong>Objectives:</strong> Provide platform for pitching, support innovation, facilitate networking, promote entrepreneurship.</li>
//                 <li style={listItemStyle}><strong>ZOZAC Youth Fellowship Program:</strong> Supports youth development, leadership, and mentorship. <strong>Objectives:</strong> Training, youth leadership, entrepreneurship, and community of young leaders.</li>
//               </ul>

//               <div className="lemon">
//                 <a href="tel:674274276" className="pineapple" style={{ background: "#2d5b1a" }}>Contact Us</a>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Image Column */}
//         <div className="watermelon" style={columnStyle}>
//           <div className="plum">
//             <figure className="cherry">
//               <img src={img1} alt="About 1" className="img" />
//             </figure>
//             <figure className="blueberry">
//               <img src={img2} alt="About 2" className="img" />
//             </figure>
//           </div>
//         </div>
//       </section>

//       <Team />
//     </>
//   );
// };

// export default About;
























import React, { useState } from "react";
import img1 from "../../assets/WhatsApp Image 2025-07-04 at 10.09.35_3aa4d729.jpg";
import img2 from "../../assets/WhatsApp Image 2025-07-04 at 10.09.30_441aaa22.jpg";
import Team from "../../Componennts/Team/Team";

const About = () => {
  const [open, setOpen] = useState(false);

  const sectionStyle = {
    display: "flex",
    flexWrap: "wrap",
    maxWidth: "1400px",
    margin: "90px auto",
    padding: "0 30px",
    gap: "60px",
    justifyContent: "space-between",
  };

  const columnStyle = {
    flex: "1 1 45%",
    minWidth: "300px",
  };

  const textStyle = {
    fontSize: "16px",
    lineHeight: "26px",
    color: "#848484",
    marginBottom: "30px",
  };

  const headingStyle = {
    display: "flex",
    alignItems: "center",
    background: "#2d5b1a",
    color: "#fff",
    padding: "10px 15px",
    borderRadius: "5px",
    marginBottom: "20px",
    fontSize: "22px",
    fontWeight: 600,
  };

  const tickStyle = {
    display: "inline-block",
    marginRight: "10px",
    fontWeight: "bold",
    fontSize: "20px",
    color: "#00ff00", // bright green tick
  };

  const buttonStyle = {
    width: "100%",
    padding: "12px",
    background: "green",
    outline: "none",
    border: "none",
    color: "#fff",
    cursor: "pointer",
    borderRadius: "5px",
    marginBottom: "30px",
  };

  const listStyle = {
    listStyle: "none",
    padding: 0,
    margin: "20px 0",
  };

  const listItemStyle = {
    marginBottom: "12px",
    paddingLeft: "30px",
    position: "relative",
    fontFamily: "sans-serif",
    color: "#333",
    fontSize: "19px"
  };

  return (
    <>
      <section className="apple" style={sectionStyle}>
        {/* Text Column */}
        <div className="kiwi" style={columnStyle}>
          <div className="pear">
            <div className="orange">
              <span className="mango" style={{ color: "#2d5b1a", fontWeight: 500 }}>
                About ZOZAC
              </span>

              <div style={headingStyle}>
                <span style={tickStyle}>✔</span>
                About ZOZAC Community
              </div>

              <div className="text" style={textStyle}>
                At ZOZAC Community, we are a dynamic non-governmental, non-profit civil society organization
                dedicated to empowering the next generation of leaders and creating a brighter future for all.
                Our focus is to empower leaders, support community development, and promote positive change.
                Our mission is built on the belief that every individual has the potential to make a difference,
                while we strive to create opportunities for growth, development, and positive impact in our
                communities through areas like:
              </div>

              <button style={buttonStyle} onClick={() => setOpen(!open)}>
                {open ? "Show Less" : "Read More"}
              </button>

              {open && (
                <ul className="grape" style={listStyle}>
                  <li style={listItemStyle}><strong style={{ color: "green" }}> Education:</strong><br /> <br />  Providing quality education and personal growth opportunities to empower individuals and communities.</li>
                  <li style={listItemStyle}><strong style={{ color: "green" }}> Peace Building:</strong><br /> <br />  Promoting inclusivity and community cohesion through initiatives that promote understanding, tolerance, and mutual respect.</li>
                  <li style={listItemStyle}><strong style={{ color: "green" }}> Youth Empowerment:</strong> <br /> <br /> Supporting young people in acquiring skills and being self-sustainable with opportunities that enable them to contribute to their communities.</li>
                  <li style={listItemStyle}><strong style={{ color: "green" }}> Humanitarian Aid:</strong> <br /> <br /> Providing support to vulnerable individuals and communities in need, including emergency relief and long-term development programs.</li>
                  <li style={listItemStyle}><strong style={{ color: "green" }}> Social Cohesion:</strong><br /> <br />  Building strong, inclusive, and resilient communities by promoting a sense of belonging, trust, and cooperation among community members.</li>
                  <li style={listItemStyle}><strong style={{ color: "green" }}> Community Development:</strong><br /> <br />  Fostering sustainable development and improving the quality of life for communities through initiatives that promote economic growth, social justice, and community empowerment.</li>
                  <li style={listItemStyle}><strong style={{ color: "green" }}> Environmental Preservation:</strong> <br /> <br /> Protecting and conserving the natural environment, promoting sustainable practices and mitigating the impact of climate change.</li>
                  <li style={listItemStyle}><strong style={{ color: "green" }}> Our Story:</strong> <br /> <br /> ZOZAC Community was founded by Afuh Alfred Ngum, a visionary leader who overcame incredible adversity to drive positive change. Witnessing the struggles of vulnerable youths and the lack of opportunities for education, sustainable skills, and employment, he decided to take action starting in 2009 by opening a free recording studio, movie production house and a stage where young talents can showcase their talents as a young leader. In 2020 he founded ZOZAC and in 2022 registered ZOZAC Community. The name "ZOZAC" is derived from our founder-created language, meaning "Togetherness Is Strength," reflecting the belief that collective efforts are essential for creating lasting impact and driving positive change.</li>
                  <li style={listItemStyle}><strong style={{ color: "green" }}> Our Registration:</strong><br /> <br />  ZOZAC Community is legally registered under the Cameroon government with headquarters in Tiko sub-division, Fako division, South West Region, Cameroon. Compliance with Article 7 of Law No <span style={{ color: "green" }}>90/054 of 19/12/1990</span>, Registration No: <span style={{ color: "green" }}>1165/G.37/C84/VOLI/SAAJP</span>. Demonstrates commitment to transparency, accountability, and good governance. We aim to inspire positive change, promote education, peace building, social cohesion, community development, youth empowerment initiatives, and empower leaders to drive progress within Cameroon, Africa, and beyond.</li>
                </ul>
              )}

              <div style={headingStyle}>
                <span style={tickStyle}>✔</span>
                Mission & Vision
              </div>
              <div className="text" style={textStyle}>
                <p><strong style={{ color: "green" }}>Mission:</strong> Empower individuals with self-awareness, discipline, and the willpower to lead themselves and others towards a positive destination built on trust.</p>
                <p><strong style={{ color: "green" }}>Vision:</strong> Be the leading force transforming, educating, and empowering individuals, groups, and communities with knowledge to prepare for tomorrow and the next generation.</p>
                <p><strong style={{ color: "green" }}>Motto:</strong> Creating innovative leaders for a better tomorrow.</p>
                <p><strong style={{ color: "green" }}>Slogan:</strong> Togetherness is strength.</p>
                <p><strong style={{ color: "green" }}>Goal:</strong> Create a sustainable model for community development that will be replicated in other regions.</p>
              </div>

              <div style={headingStyle}>
                <span style={tickStyle}>✔</span>
                What We Do
              </div>
              <ul className="grape" style={listStyle}>
                <li style={listItemStyle}><strong style={{ color: "green" }}>Our core purpose:</strong> <br /> <br /> Empowering leaders, promoting community development, and positive change through education, peace building, youth empowerment, humanitarian aid, and environmental preservation.</li>
                <li style={listItemStyle}><strong style={{ color: "green" }}>Programs:</strong>  <br /> <br />Diverse flagship programs designed to empower leaders, foster community development, and promote positive change.</li>
                <li style={listItemStyle}><strong style={{ color: "green" }}>Ropauni Peace Guards Initiative:</strong> <br /> <br /> Promoting community peace and conflict resolution. <strong>Objectives:</strong> Train ambassadors, mediate conflicts, promote peace education.</li>
                <li style={listItemStyle}><strong style={{ color: "green" }}>ZOZAC Food Program:</strong> <br /> <br /> Provides food assistance and nutrition support. <strong>Objectives:</strong> Provide food aid, support agriculture, promote nutrition education, reduce food insecurity.</li>
                <li style={listItemStyle}><strong style={{ color: "green" }}>Go To School:</strong> <br /> <br /> Supports education access. <strong>Objectives:</strong> Provide resources, support teachers, promote literacy, increase access.</li>
                <li style={listItemStyle}><strong style={{ color: "green" }}>Keypoint Awards:</strong> <br /> <br /> Recognize community leaders and innovators. <strong>Objectives:</strong> Recognize contributions, celebrate creativity, inspire action.</li>
                <li style={listItemStyle}><strong style={{ color: "green" }}>ZOZAC Health Center:</strong> <br /> <br /> Delivers healthcare services. <strong>Objectives:</strong> First aid, health education, disease prevention, improve outcomes.</li>
                <li style={listItemStyle}><strong style={{ color: "green" }}>ZOZAC Women Network:</strong> <br /> <br /> Empowers women. <strong>Objectives:</strong> Support economic empowerment, provide training, foster leaders. Slogan: Women on the frontline of change.</li>
                <li style={listItemStyle}><strong style={{ color: "green" }}>ACFLO:</strong>  <br /> <br />Collaboration for local organizations. <strong>Objectives:</strong> Networking, capacity-building, knowledge sharing, partnerships.</li>
                <li style={listItemStyle}><strong style={{ color: "green" }}>ZOZAC Institute:</strong> <br /> <br /> Training, research, and skill building. <strong>Objectives:</strong> Training, research, knowledge sharing, excellence.</li>
                <li style={listItemStyle}><strong style={{ color: "green" }}>ZOZAC Pitch Show:</strong>  <br /> <br />Showcases ideas and supports entrepreneurship. <strong>Objectives:</strong> Pitch platform, innovation support, networking, entrepreneurship.</li>
                <li style={listItemStyle}><strong style={{ color: "green" }}>ZOZAC Youth Fellowship Program:</strong> <br /> <br /> Youth development, leadership, mentorship. <strong>Objectives:</strong> Training, youth leadership, entrepreneurship, young leaders community.</li>
              </ul>

              <div className="lemon">
                <a href="tel:674274276" className="pineapple" style={{ background: "#2d5b1a" }}>Contact Us</a>
              </div>
            </div>
          </div>
        </div>

        {/* Image Column */}
        <div className="watermelon" style={columnStyle}>
          <div className="plum">
            <figure className="cherry">
              <img src={img1} alt="About 1" className="img" />
            </figure>
            <figure className="blueberry">
              <img src={img2} alt="About 2" className="img" />
            </figure>
          </div>
        </div>
      </section>

      <Team />
    </>
  );
};

export default About;
