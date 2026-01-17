// src/components/Navbar/Navbar.jsx

import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';
import logo from "/logo1.jpg";

const Navbar = () => {
  const token = localStorage.getItem('user-token');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [userdata, setUserdata] = useState(null);

  // Fetch user profile
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        if (!token) return;

        const res = await axios.get(
          'https://zozacbackend.onrender.com/api/normaluser/profile',
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (res.status === 404) {
          toast.error(res.data.message || 'User not found');
        } else {
          setUserdata(res.data);
        }
      } catch (error) {
        toast.error(error?.response?.data?.message || 'Failed to fetch user');
      }
    };

    fetchProfile();
  }, [token]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on any nav link click
  useEffect(() => {
    const closeMenuOnClick = () => setMenuOpen(false);
    const links = document.querySelectorAll('.nav-menu a');
    links.forEach(link => link.addEventListener('click', closeMenuOnClick));

    return () => {
      links.forEach(link =>
        link.removeEventListener('click', closeMenuOnClick)
      );
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="logo" onClick={() => window.location.href = "/"}>
          <img
            src={logo}
            alt="zozac logo"
            style={{ height: "60px", width: "60px" }}
          />
          <span>ZOZAC COMMUNITY</span>
        </div>

        <div className="nav-toggle" onClick={() => setMenuOpen(prev => !prev)}>
          <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </div>

        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <li><Link to="/">Home</Link></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#use-cases">Information</a></li>
          <li><a href="#samples">Posts</a></li>
          <li><a href="#pricing">Report</a></li>
          {/* <li><Link to="/about">About</Link></li> */}
          <li>
            <a href="tel:674274276" target="_blank" rel="noopener noreferrer">
              Contact
            </a>
          </li>

          {token && userdata ? (
            <li>
              <Link to="/profile" className="profildiv">
                <img
                  className="profile"
                  src={userdata.image || '/default-avatar.png'}
                  alt="profile"
                />
                <p>{userdata.name || 'User'}</p>
              </Link>
            </li>
          ) : (
            <li>
              <Link to="/login" className="btn-login">
                Login / Signup
              </Link>
            </li>
          )}

          <li>
            <Link to="/order" className="btn-primary" style={{ color: '#fff' }}>
              Join
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;


