import React from "react";

export default function About() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>About <span style={{ color: "#1e90ff" }}>NewsHUNT</span></h1>

      <p style={styles.paragraph}>
        <strong>NewsHUNT</strong> is a modern news web app that brings you the latest and trending headlines from various categories like Business, Sports, Technology, Health, and more. It’s built with performance and simplicity in mind to give users a smooth, real-time experience.
      </p>

      <h2 style={styles.subheading}>🚀 Key Features:</h2>
      <ul style={styles.list}>
        <li>📢 Live News powered by NewsAPI</li>
        <li>🧠 Summarize articles using Google Gemini AI</li>
        <li>🔍 Search functionality for keywords or categories</li>
        <li>📱 Fully responsive and mobile-friendly UI</li>
        <li>💾 Local storage caching for faster browsing</li>
      </ul>

      <h2 style={styles.subheading}>🛠 Technologies Used:</h2>
      <ul style={styles.list}>
        <li>⚛️ React + Vite</li>
        <li>📡 REST APIs (NewsAPI & Gemini Pro)</li>
        <li>🎨 Tailwind CSS or custom CSS modules</li>
        <li>📁 Node.js/Express backend (optional for API proxying)</li>
      </ul>

      <h2 style={styles.subheading}>🎯 What We Learned:</h2>
      <p style={styles.paragraph}>
        Building NewsHUNT taught us how to work with external APIs, manage React state efficiently, handle asynchronous operations, and securely use AI models in real-world applications. It’s also a hands-on experience in modern frontend tooling and user-focused design.
      </p>

      <p style={{ ...styles.paragraph, fontStyle: "italic" }}>
        Thank you for using NewsHUNT – your intelligent gateway to the news world.
      </p>
      
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "100%",
    // margin: "0 auto",
    padding: "6rem 2rem",
    fontFamily: "Arial, sans-serif",
    lineHeight: "1.7",

  },
  heading: {
    fontSize: "2.5rem",
    marginBottom: "1rem",
    textAlign: "center",
  },
  subheading: {
    fontSize: "1.5rem",
    marginTop: "2rem",
    color: "#333",
  },
  paragraph: {
    fontSize: "1rem",
    color: "#444",
    marginTop: "1rem",
  },
  list: {
    marginTop: "0.5rem",
    paddingLeft: "1.2rem",
    color: "#444",
  },
  
};
