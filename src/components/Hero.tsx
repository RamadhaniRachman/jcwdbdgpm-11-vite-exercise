import "./Hero.css";
import "../App.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Hi, I'm <span>Ramadhani Rachman</span>
        </h1>
        <p>Frontend Developer </p>
        <a href="#projects" className="btn">
          Lihat Proyek
        </a>
      </div>
    </section>
  );
}
