import React, { useEffect } from 'react';
import Navbar from './Componennts/Navbar/Navbar';

import Footer from './Componennts/Footer/Footer';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollToTop from './Componennts/ScrollToTop';
import Homepage from './Pages/Homepage';
import AuthForms from './Pages/LOGIN/Login';
import VideoHero from './Pages/Videoposts/Videoposts';
import Picturepost from './Pages/Pictureposts/Picturepost';
import Order from './Pages/Orderpage/Order';
import About from './Pages/About/About';
import VolunteerPage from './Pages/Vulonteers';
// import OrderForm from './Pages/Orderpage/Order';





function App() {
  useEffect(() => {
    // Scroll animation
    const animateOnScroll = () => {
      document.querySelectorAll(".feature-card, .sample-card, .pricing-card").forEach((el) => {
        const top = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight - 100) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        }
      });
    };

    const elements = document.querySelectorAll(".feature-card, .sample-card, .pricing-card");
    elements.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(20px)";
      el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    });
    animateOnScroll();
    window.addEventListener("scroll", animateOnScroll);

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          e.preventDefault();
          window.scrollTo({
            top: target.offsetTop - 80,
            behavior: "smooth",
          });
        }
      });
    });

    return () => window.removeEventListener("scroll", animateOnScroll);
  }, []);

  return (
    <>
    <BrowserRouter>
     <Toaster position="top-center" reverseOrder={false} />
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/login' element={<AuthForms/>}/>
        <Route path='/order' element={<Order/>}/>
        <Route path='/posts/:id' element={<VideoHero/>}/>
        <Route path='/picturepost/:id' element={<Picturepost/>}/>
         <Route path='/about' element={<About/>}/>
         <Route path='/vol' element={<VolunteerPage/>}/>
      </Routes>
    <Footer/>
    
    </BrowserRouter>
      
    </>
  );
}

export default App;
