// pages/index.tsx
import Image from "next/image";

export default function Home() {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        color: "#fff",
        backgroundColor: "#2980B9",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        maxWidth: "800px",
        margin: "50px auto",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "2.5rem",
          marginBottom: "20px",
          color: "#4A90E2",
        }}
      >
        Welcome to Blogging Home
      </h1>
      <p
        style={{
          fontSize: "1.2rem",
          marginBottom: "30px",
          lineHeight: "1.6",
        }}
      >
        Explore the amazing features of our application. We are here to provide
        the best experience for you!
      </p>
      <Image
        src="/images/welcome.jpg"
        alt="Welcome Image"
        width={500}
        height={300}
        style={{
          borderRadius: "10px",
          border: "2px solid #ddd",
          margin: "20px 0",
        }}
      />
      <button
        style={{
          padding: "10px 20px",
          fontSize: "1rem",
          backgroundColor: "#4A90E2",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          transition: "background-color 0.3s ease",
        }}
        
      >
        Get Started
      </button>
    </div>
  );
}
