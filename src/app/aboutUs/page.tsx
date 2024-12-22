import React from "react";

const AboutUs = () => {
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 20px" }}>
      <h1 style={{ fontSize: "36px", textAlign: "center", color: "#333" }}>
        About Us
      </h1>
      <p style={{ fontSize: "18px", lineHeight: "1.6", textAlign: "center", color: "#555", maxWidth: "900px", margin: "0 auto" }}>
        Welcome to My App, a place where you can explore the latest trends and innovations. 
        Our mission is to provide high-quality content and solutions that help our users stay up-to-date with the world around them.
      </p>

      <div style={{ display: "flex", justifyContent: "center", gap: "40px", marginTop: "40px" }}>
        <div style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "24px", color: "#333" }}>Our Vision</h2>
          <p style={{ fontSize: "16px", color: "#555" }}>
            To be a leading platform in providing technology and innovation insights.
          </p>
        </div>

        <div style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "24px", color: "#333" }}>Our Values</h2>
          <p style={{ fontSize: "16px", color: "#555" }}>
            Integrity, Innovation, and Excellence.
          </p>
        </div>
      </div>

      <div style={{ marginTop: "40px", textAlign: "center" }}>
        <h2 style={{ fontSize: "24px", color: "#333" }}>Meet the Team</h2>
        <div style={{ display: "flex", justifyContent: "center", gap: "30px", marginTop: "20px" }}>
          <div style={{ width: "200px", textAlign: "center" }}>
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              style={{
                width: "100%",
                height: "150px",
                borderRadius: "50%",
                objectFit: "cover",
                marginBottom: "10px",
              }}
            />
            <p style={{ fontSize: "16px", color: "#333" }}>Hasin Pramodya</p>
            <p style={{ fontSize: "14px", color: "#555" }}>Janith Saandaruwan</p>
          </div>
          <div style={{ width: "200px", textAlign: "center" }}>
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              style={{
                width: "100%",
                height: "150px",
                borderRadius: "50%",
                objectFit: "cover",
                marginBottom: "10px",
              }}
            />
            <p style={{ fontSize: "16px", color: "#333" }}>Jane Smith</p>
            <p style={{ fontSize: "14px", color: "#555" }}>COO</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
