import React, { useEffect, useState } from 'react';
import './Team.css';
import axios from 'axios';
import toast from 'react-hot-toast';
import { BarLoader } from 'react-spinners';

const Team = () => {
  const [admindata, setadmindata] = useState([]);
  const [loading, setloading] = useState(false);
  const [selected, setselected] = useState(null);

  useEffect(() => {
    const alladmin = async () => {
      try {
        setloading(true);
        const alldata = await axios.get("https://zozacbackend.onrender.com/api/signup/admin");
        setadmindata(Array.isArray(alldata.data) ? alldata.data : []);
      } catch (error) {
        toast.error(error.message || "Failed to load team");
      } finally {
        setloading(false);
      }
    };
    alladmin();
  }, []);

  // ✅ Only approved members are part of the public team section
  const team = admindata.filter(
    (a) => String(a?.status || "").toLowerCase() === "approved"
  );

  // lock body scroll while the detail overlay is open
  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selected]);

  // average project rating helper
  const avgRating = (ratings) => {
    const vals = (Array.isArray(ratings) ? ratings : [])
      .map((r) => Number(r?.value))
      .filter((v) => v >= 1 && v <= 5);
    if (vals.length === 0) return 0;
    return (vals.reduce((s, v) => s + v, 0) / vals.length).toFixed(1);
  };

  const projectCount = (admin) =>
    Array.isArray(admin?.projects) ? admin.projects.length : 0;

  return (
    <section className="team" aria-labelledby="team-title">
      <header className="team-heading">
        <span className="team-kicker">Leadership</span>
        <h2 className="team-title" id="team-title">Our Team</h2>
        <p className="team-intro">
          The dedicated leaders working behind the scenes to drive ZOZAC
          Community forward - building bridges, empowering youth and
          transforming lives every single day. Click a profile to view the
          full team bio.
        </p>
      </header>

      {loading && (
        <div className="team-loading">
          <BarLoader />
        </div>
      )}

      {!loading && team.length === 0 && (
        <div className="team-empty">
          <p>Team profiles are on their way. Please check back soon.</p>
        </div>
      )}

      <div className="team-list">
        {team.map((admin, i) => (
          <article
            className="team-card"
            key={admin._id || i}
            onClick={() => setselected(admin)}
            role="button"
            tabIndex={0}
            aria-label={`View full bio of ${admin.username}`}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setselected(admin);
              }
            }}
          >
            <div className="team-card-media">
              <img src={admin.profileImage} alt={admin.username} loading="lazy" />
              <span className="team-card-view">View bio</span>
            </div>
            <div className="team-card-body">
              <h3 className="team-card-name">{admin.username}</h3>
              <p className="team-card-role">
                {admin.role === "admin" ? "Team Lead" : "Team Member"} · {projectCount(admin)} project{projectCount(admin) === 1 ? "" : "s"}
              </p>
              <p className="team-card-role team-card-preview">
                {String(admin.about || "").replace(/\s+/g, " ").trim().slice(0, 90)}
                {String(admin.about || "").length > 90 ? "…" : ""}
              </p>
            </div>
          </article>
        ))}
      </div>

      {/* ---------- TEAM DETAILS / BIO OVERLAY ---------- */}
      {selected && (
        <div
          className="team-detail-backdrop"
          onClick={() => setselected(null)}
          role="presentation"
        >
          <div
            className="team-detail"
            role="dialog"
            aria-modal="true"
            aria-label={`${selected.username} - team bio`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="team-detail-close"
              aria-label="Close team bio"
              onClick={() => setselected(null)}
            >
              ×
            </button>

            {/* Bio header */}
            <div className="team-detail-header">
              <div className="team-detail-avatar">
                <img src={selected.profileImage} alt={selected.username} />
              </div>
              <div className="team-detail-id">
                <h3 className="team-detail-name">{selected.username}</h3>
                <p className="team-detail-position">
                  {selected.role === "admin" ? "Team Lead" : "Team Member"}
                </p>
                <div className="team-detail-chips">
                  {selected.status && (
                    <span className="team-detail-chip">
                      {String(selected.status).toUpperCase()}
                    </span>
                  )}
                  {selected.date && (
                    <span className="team-detail-chip">
                      Joined{" "}
                      {new Date(selected.date).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                  )}
                  <span className="team-detail-chip">
                    {projectCount(selected)} project{projectCount(selected) === 1 ? "" : "s"}
                  </span>
                </div>
              </div>
            </div>

            {/* Full bio */}
            <div className="team-detail-section">
              <h4 className="team-detail-subtitle">Bio</h4>
              <p className="team-detail-bio">{selected.about}</p>
            </div>

            {/* Contact */}
            {(selected.email || selected.number) && (
              <div className="team-detail-section">
                <h4 className="team-detail-subtitle">Contact</h4>
                <ul className="team-detail-contact">
                  {selected.email && (
                    <li>
                      <strong>Email:</strong>{" "}
                      <a href={`mailto:${selected.email}`}>{selected.email}</a>
                    </li>
                  )}
                  {selected.number && (
                    <li>
                      <strong>Phone:</strong>{" "}
                      <a href={`tel:${selected.number}`}>{selected.number}</a>
                    </li>
                  )}
                </ul>
              </div>
            )}

            {/* Projects */}
            {Array.isArray(selected.projects) && selected.projects.length > 0 && (
              <div className="team-detail-section">
                <h4 className="team-detail-subtitle">Projects</h4>
                <div className="team-detail-projects">
                  {selected.projects.map((p, pi) => (
                    <div className="team-detail-project" key={pi}>
                      {p?.imageUrlwork && (
                        <div className="team-detail-project-media">
                          <img
                            src={p.imageUrlwork}
                            alt={p?.title || "Project"}
                            loading="lazy"
                          />
                        </div>
                      )}
                      <div className="team-detail-project-body">
                        <h5 className="team-detail-project-title">
                          {p?.title || "Untitled project"}
                          {p?.completed && (
                            <span className="team-detail-project-done">Completed</span>
                          )}
                        </h5>
                        {p?.description && (
                          <p className="team-detail-project-desc">{p.description}</p>
                        )}
                        <div className="team-detail-project-meta">
                          {avgRating(p?.ratings) > 0 && (
                            <span className="team-detail-rating">
                              ★ {avgRating(p?.ratings)} / 5
                            </span>
                          )}
                          {p?.GithubLink && (
                            <a
                              className="team-detail-project-link"
                              href={p.GithubLink}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              GitHub Link
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Team;