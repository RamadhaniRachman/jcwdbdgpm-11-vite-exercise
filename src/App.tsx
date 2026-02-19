import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <nav className="navbar">
        <div className="logo">Logo</div>
        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
        </ul>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <h1>
            Hi, I'm <span>Ramadhani Rachman</span>
          </h1>
          <p>Frontend Developer </p>
          <button className="btn">Lihat Proyek</button>
        </div>
      </section>

      <footer>
        <p>&copy; 2026 Ramadhani Rachman</p>
      </footer>
    </>
  );
}

export default App;
