import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import "./Order.css";

const Order = () => {
  const emptyForm = {
    name: "",
    email: "",
    phonenumber: "",
    whatsappnumber: "",
    details: "",
    source: "",
    contactMethod: "",
  };

  const [formData, setFormData] = useState(emptyForm);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post(
        "https://zozacbackend.onrender.com/api/post/orders",
        formData
      );

      if (response.status === 200) {
        toast.success(response.data.message);
        setFormData(emptyForm);
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Submission failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="order-page">
      <div className="order-shell">
        <header className="order-heading">
          <span className="order-kicker">Get involved</span>
          <h1 className="order-title">Create Your Project with Us</h1>
          <p className="order-intro">
            We are committed to making a lasting impact. Partner with us to
            create a better future for our communities. Together we can achieve
            much more, because <strong>"Togetherness Is Strength"</strong> -
            ZOZAC is the spirit of togetherness, with the combination of
            self-strength and ability for everyone's benefit.
          </p>
        </header>

        <div className="order-grid">
          <div className="order-column">
            <form className="order-form" onSubmit={handleSubmit}>
              <fieldset className="order-fields">
                <legend className="order-legend">
                  <span className="order-badge">1</span> Personal Information
                </legend>

                <label className="order-label">Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="order-input"
                  required
                  placeholder="Enter your full name"
                />

                <label className="order-label">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="order-input"
                  required
                  placeholder="Enter your email address"
                />

                <label className="order-label">Phone Number</label>
                <input
                  type="tel"
                  name="phonenumber"
                  value={formData.phonenumber}
                  onChange={handleChange}
                  className="order-input"
                  placeholder="Enter your phone number"
                />

                <label className="order-label">WhatsApp Number</label>
                <input
                  type="tel"
                  name="whatsappnumber"
                  value={formData.whatsappnumber}
                  onChange={handleChange}
                  className="order-input"
                  placeholder="Enter your WhatsApp number"
                />
              </fieldset>

              <fieldset className="order-fields">
                <legend className="order-legend">
                  <span className="order-badge">2</span> About Yourself
                </legend>

                <label className="order-label">Detailed Information About You</label>
                <textarea
                  name="details"
                  value={formData.details}
                  onChange={handleChange}
                  className="order-textarea"
                  placeholder="Tell us about yourself, your background, and your project ideas..."
                ></textarea>
              </fieldset>
            </form>
          </div>

          <div className="order-column">
            <div className="order-form">
              <fieldset className="order-fields">
                <legend className="order-legend">
                  <span className="order-badge">3</span> How You Found Us
                </legend>

                <label className="order-label">How did you know about us?</label>
                <select name="source" value={formData.source} onChange={handleChange} className="order-select">
                  <option value="">-- Choose an option --</option>
                  <option value="Facebook">From Facebook</option>
                  <option value="Referral">From a referral</option>
                  <option value="Google">From Google</option>
                  <option value="Instagram">From Instagram</option>
                  <option value="LinkedIn">From LinkedIn</option>
                  <option value="Friend">From a friend</option>
                  <option value="Other">Other</option>
                </select>
              </fieldset>

              <fieldset className="order-fields">
                <legend className="order-legend">
                  <span className="order-badge">4</span> Preferred Contact Method
                </legend>

                <label className="order-label">How should we contact you?</label>
                <select name="contactMethod" value={formData.contactMethod} onChange={handleChange} className="order-select">
                  <option value="">-- Choose preferred method --</option>
                  <option value="Email">Email</option>
                  <option value="Phone">Phone Call</option>
                  <option value="WhatsApp">WhatsApp Message</option>
                  <option value="Text">Text Message</option>
                </select>
              </fieldset>

              <button type="submit" className="order-submit" onClick={handleSubmit} disabled={loading}>
                {loading ? "Processing..." : "Submit Your Project Request"}
              </button>

              <p className="order-note">* Required fields</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;