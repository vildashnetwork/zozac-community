import React, { useState } from 'react';
import './Loging.css';
import toast from 'react-hot-toast';
import axios from 'axios';
import upload from '../../assets/upload_area.svg';

const AuthForms = () => {
  const [showLogin, setShowLogin] = useState(true);
  const [image, setImage] = useState(null);
  const [loading, setloading] = useState(false);

  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [number, setnumber] = useState('');
  const [about, setabout] = useState('');
  const [password, setpassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const [emailcheck, setemailcheck] = useState('');
  const [passwordcheck, setpasswordcheck] = useState('');

  const handleToggle = () => setShowLogin(prev => !prev);
  const handleImageChange = e => setImage(e.target.files[0]);

  const uploadFile = async () => {
    if (!image) {
      toast.error('Please select an image');
      return null;
    }

    const data = new FormData();
    data.append('file', image);
    data.append('upload_preset', 'images-zozac');

    try {
      const res = await axios.post(
        'https://api.cloudinary.com/v1_1/dbq5gkepx/image/upload',
        data
      );
      return res.data.secure_url;
    } catch (error) {
      console.error('Image upload error:', error.response?.data || error);
      toast.error('Image upload failed');
      return null;
    }
  };

  const handleSubmitSignup = async (e) => {
    e.preventDefault();

    if (!name || !email || !number || !about || !password || !image) {
      toast.error('Please fill in all fields');
      return;
    }

    setloading(true);

    try {
      const imgURL = await uploadFile();
      if (!imgURL) return;

      const response = await axios.post('https://zozacbackend.onrender.com/normal/users', {
        name,
        email,
        about,
        number,
        password,
        image: imgURL,
      });

      if (response.status === 200) {
        localStorage.setItem('user-token', response.data.token);
        toast.success(response.data.message || 'Registration successful!');
        window.location.replace('/');
      } else {
        toast.error('Signup failed');
      }

      // Reset form
      setImage(null);
      setabout('');
      setpassword('');
      setname('');
      setnumber('');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Signup error');
      console.error(error);
    } finally {
      setloading(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setloading(true);

    try {
      const response = await axios.post("https://zozacbackend.onrender.com/api/login/users", {
        email: emailcheck,
        password: passwordcheck,
      });

      const token = response.data.token;
      if (token) {
        localStorage.setItem("user-token", token);
        toast.success("You have successfully logged in 🤩");
        window.location.replace('/');
      } else {
        toast.error("Token not received. Login failed.");
      }
    } catch (error) {
      const message =
        error.response?.data?.message ||
        (error.response?.status === 401
          ? "Incorrect password"
          : error.response?.status === 404
            ? "User not found 🤕"
            : "Login failed");
      toast.error(message);
    } finally {
      setloading(false);
    }
  };

  return (
    <div className="containe">
      {showLogin ? (
        <div className="form-container" id="login-form">
          <h1>Login</h1>
          <form className='form' onSubmit={handleLogin} autoComplete='nope'>
            <label>Email</label>
            <input
              type="email"
              autoComplete="off"
              value={emailcheck}
              onChange={(e) => setemailcheck(e.target.value)}
              required
            />
            <label>Password</label>
            <input
              type={showPassword ? "text" : "password"}
              autoComplete="off"
              value={passwordcheck}
              onChange={(e) => setpasswordcheck(e.target.value)}
              required
            />
            <button
              type="button"
              className="auth-toggle"
              onClick={(e) => {
                e.preventDefault();
                setShowPassword(prev => !prev);
              }}
            >
              {showPassword ? "Hide" : "Show"} Password
            </button>
            <button type="submit" disabled={loading || !emailcheck || !passwordcheck}>
              {loading ? "Loading..." : "Login"}
            </button>
          </form>
          <p>
            Don't have an account?{' '}
            <a href="#" onClick={handleToggle}>
              Sign up
            </a>
          </p>
        </div>
      ) : (
        <div className="form-container" id="signup-form">
          <h1>Sign Up</h1>
          <form className='form' onSubmit={handleSubmitSignup} autoComplete='off'>
            <label>Username</label>
            <input type="text" value={name} onChange={(e) => setname(e.target.value)} required />
            <label>Email</label>
            <input type="email" value={email} onChange={(e) => setemail(e.target.value)} required />
            <label>Number</label>
            <input type="number" value={number} onChange={(e) => setnumber(e.target.value)} required />
            <label>About You</label>
            <input type="text" value={about} onChange={(e) => setabout(e.target.value)} required />
            <label>Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="auth-toggle"
              onClick={(e) => {
                e.preventDefault();
                setShowPassword(prev => !prev);
              }}
            >
              {showPassword ? 'Hide' : 'Show'} Password
            </button>

            <div className="form__input-wrapper">
              <label htmlFor="image-input">
                <img
                  src={image ? URL.createObjectURL(image) : upload}
                  alt="Upload"
                  className="addproduct-thumbnail-image"
                />
              </label>
              <input
                id="image-input"
                type="file"
                accept="image/*"
                hidden
                onChange={handleImageChange}
              />
            </div>

            <button type="submit" disabled={loading}>
              {loading ? "Loading..." : "Sign Up"}
            </button>
          </form>
          <p>
            Already have an account?{' '}
            <a onClick={handleToggle} style={{ cursor: "pointer" }}>
              Log In
            </a>
          </p>
        </div>
      )}
    </div>
  );
};

export default AuthForms;
