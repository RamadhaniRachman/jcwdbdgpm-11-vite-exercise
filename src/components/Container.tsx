import "../App.css";
import "./Container.css";

export default function Container() {
  return (
    <>
      <section id="about" className="container">
        <h2>About Me</h2>
        <p>
          Halo! Saya seorang mahasiswa Teknik Informatika yang fokus pada
          <strong> FullStack Web Development</strong>. Saat ini saya sedang
          belajar di Purwadhika
        </p>
        <div className="skills">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>Figma</span>
        </div>
      </section>

      <section id="projects" className="container">
        <h2>Projects</h2>
        <div className="project-grid">
          <div className="card">
            <h3>Magang</h3>
            <p>Magang untuk mahasiswa.</p>
          </div>
          <div className="card">
            <h3>Tes</h3>
            <p>Eksplorasi data .</p>
          </div>
        </div>
      </section>
    </>
  );
}
