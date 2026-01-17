import React, { useEffect, useState } from "react";
import "./Sample.css";
import axios from "axios";
import toast from "react-hot-toast";
import { BarLoader } from "react-spinners";
import { Link } from "react-router-dom";

const Samples = () => {
  // increment page views
  useEffect(() => {
    const incrementCount = async () => {
      try {
        await axios.post("https://zozacbackend.onrender.com/api/pageview");
      } catch (error) {
        console.error("Failed to increment page views", error);
      }
    };
    incrementCount();
  }, []);

  const [imagepost, setimagepost] = useState([]);
  const [videopost, setvideopost] = useState([]);
  const [loading, setloading] = useState(true);

  // track which picture/video is expanded
  const [expandedPics, setExpandedPics] = useState({});
  const [expandedVideos, setExpandedVideos] = useState({});

  const togglePic = (index) => {
    setExpandedPics((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const toggleVideo = (index) => {
    setExpandedVideos((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  useEffect(() => {
    const fetchpictures = async () => {
      try {
        setloading(true);
        const allpictures = await axios.get(
          "https://zozacbackend.onrender.com/admin/picture/post"
        );
        setimagepost(allpictures.data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setloading(false);
      }
    };

    const fetchvideo = async () => {
      try {
        setloading(true);
        const allvideos = await axios.get(
          "https://zozacbackend.onrender.com/admin/video/post"
        );
        setvideopost(allvideos.data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setloading(false);
      }
    };

    fetchvideo();
    fetchpictures();
  }, []);

  const [more, setloadmore] = useState(false);

  return (
    <>
      {/* Picture Post */}
      <section id="samples" className="samples">
        <div className="container">
          <div className="section-header">
            <center>
              <h2 style={{ fontSize: "24px" }}>
                ACTIVITIES
                <br />
              </h2>
            </center>
          </div>

          <div className="samples-grid">
            {loading && <BarLoader />}
            {!more
              ? imagepost.slice(0, 5).map((item, index) => (
                <div className="sample-card" key={index}>
                  <div className="sample-image">
                    <img src={item.ImageUrl} alt={item.title} />
                  </div>
                  <div className="sample-content">
                    <h3>{item.title}</h3>
                    <p>
                      {expandedPics[index] || item.content.length <= 70
                        ? item.content
                        : item.content.slice(0, 70)}

                      {item.content.length > 70 && (
                        <span
                          style={{ cursor: "pointer", color: "#333" }}
                          onClick={() => togglePic(index)}
                        >
                          {expandedPics[index]
                            ? " ..show less"
                            : " ..read more"}
                        </span>
                      )}
                    </p>

                    <Link to={`/picturepost/${item._id}`}>
                      <span className="btn-text">
                        Read More <i className="fas fa-arrow-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              ))
              : imagepost.map((item, index) => (
                <div className="sample-card" key={index}>
                  <div className="sample-image">
                    <img src={item.ImageUrl} alt={item.title} />
                  </div>
                  <div className="sample-content">
                    <h3>{item.title}</h3>
                    <p>
                      {expandedPics[index] || item.content.length <= 70
                        ? item.content
                        : item.content.slice(0, 70)}

                      {item.content.length > 70 && (
                        <span
                          style={{ cursor: "pointer", color: "#333" }}
                          onClick={() => togglePic(index)}
                        >
                          {expandedPics[index]
                            ? " ..show less"
                            : " ..read more"}
                        </span>
                      )}
                    </p>


                    <span className="btn-text"

                      onClick={() => {
                        window.scrollTo({ top: 0, behavior: "smooth" }); // scroll to top
                        window.location.href = `/picturepost/${item._id}`;
                      }}

                    >
                      Read More <i className="fas fa-arrow-right"></i>
                    </span>

                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Video Post */}
      <section id="samples" className="samples">
        <div className="container">
          <div className="samples-grid">
            {loading && <BarLoader />}
            {!more
              ? videopost.slice(0, 5).map((item, index) => (
                <div className="sample-card" key={index}>
                  <div>
                    <video
                      src={item.VidUrl}
                      controls
                      preload="metadata"
                      style={{
                        width: "100%",
                        borderRadius: "10px",
                        backgroundColor: "#000",
                        outline: "none",
                      }}
                      onContextMenu={(e) => e.preventDefault()}
                    ></video>
                  </div>
                  <div className="sample-content">
                    <h3>{item.title}</h3>
                    <p>
                      {expandedVideos[index] || item.content.length <= 70
                        ? item.content
                        : item.content.slice(0, 70)}

                      {item.content.length > 70 && (
                        <span
                          style={{ cursor: "pointer", color: "#333" }}
                          onClick={() => toggleVideo(index)}
                        >
                          {expandedVideos[index]
                            ? " ..show less"
                            : " ..read more"}
                        </span>
                      )}
                    </p>


                    <span className="btn-text"

                      onClick={() => {
                        window.scrollTo({ top: 0, behavior: "smooth" }); // scroll to top
                        window.location.href = `/posts/${item._id}`;
                      }}
                    >
                      Read More <i className="fas fa-arrow-right"></i>
                    </span>

                  </div>
                </div>
              ))
              : videopost.map((item, index) => (
                <div className="sample-card" key={index}>
                  <div>
                    <video
                      src={item.VidUrl}
                      controls
                      preload="metadata"
                      style={{
                        width: "100%",
                        borderRadius: "10px",
                        backgroundColor: "#000",
                        outline: "none",
                      }}
                      onContextMenu={(e) => e.preventDefault()}
                    ></video>
                  </div>
                  <div className="sample-content">
                    <h3>{item.title}</h3>
                    <p>
                      {expandedVideos[index] || item.content.length <= 70
                        ? item.content
                        : item.content.slice(0, 70)}

                      {item.content.length > 70 && (
                        <span
                          style={{ cursor: "pointer", color: "#333" }}
                          onClick={() => toggleVideo(index)}
                        >
                          {expandedVideos[index]
                            ? " ..show less"
                            : " ..read more"}
                        </span>
                      )}
                    </p>


                    <span className="btn-text"

                      onClick={() => {
                        window.scrollTo({ top: 0, behavior: "smooth" }); // scroll to top
                        window.location.href = `/posts/${item._id}`;
                      }}>
                      Read More <i className="fas fa-arrow-right"></i>
                    </span>

                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Load More Button */}
        <button
          style={{
            background: more
              ? "green"
              : "green",
            color: "white",
            border: "none",
            borderRadius: "8px",
            padding: "12px 20px",
            fontSize: "16px",
            fontWeight: "600",
            cursor: "pointer",
            transition: "all 0.3s ease",
            boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
            marginTop: "20px",
          }}
          onClick={() => setloadmore(!more)}
        >
          {more ? "Show Less" : "Load More"}
        </button>
      </section>
    </>
  );
};

export default Samples;


