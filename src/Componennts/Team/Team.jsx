import React, { useEffect, useState } from 'react';
import './Team.css';
import axios from 'axios';
import toast from 'react-hot-toast';
import { BarLoader } from 'react-spinners';

const Team = () => {
  const [admindata, setadmindata] = useState([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    const alladmin = async () => {
      try {
        setloading(true);
        const alldata = await axios.get("https://zozacbackend.onrender.com/api/signup/admin");
        setadmindata(alldata.data);
      } catch (error) {
        toast.error(error);
      } finally {
        setloading(false);
      }
    };
    alladmin();
  }, []);

  return (
    <section className="team" aria-labelledby="team-title">
      <header className="team-heading">
        <span className="team-kicker">Leadership</span>
        <h2 className="team-title" id="team-title">Our Team</h2>
        <p className="team-intro">
          The dedicated leaders working behind the scenes to drive ZOZAC
          Community forward - building bridges, empowering youth and
          transforming lives every single day.
        </p>
      </header>

      {loading && (
        <div className="team-loading">
          <BarLoader />
        </div>
      )}

      {!loading && admindata.length === 0 && (
        <div className="team-empty">
          <p>Team profiles are on their way. Please check back soon.</p>
        </div>
      )}

      <div className="team-list">
        {admindata.map((admin, i) => (
          <article className="team-card" key={admin._id || i}>
            <div className="team-card-media">
              <img src={admin.profileImage} alt={admin.username} loading="lazy" />
            </div>
            <div className="team-card-body">
              <h3 className="team-card-name">{admin.username}</h3>
              <p className="team-card-role">{admin.about}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Team;