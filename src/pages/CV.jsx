import "./CV.css";

function CV() {
  return (
    <div className="cv-page">

      {/* Header */}
      <div className="cv-header">
        <h1>Sundas Awais</h1>
        <h2>Information Technology Student</h2>

        <p>📧 sundasawais74@gmail.com</p>
      </div>

      {/* Profile */}
      <section className="cv-section-box">
        <h2>Profile</h2>

        <p>
          I am an Information Technology student with an interest in
          web development and modern user interface design. I enjoy
          learning new technologies and creating responsive and
          user-friendly websites.
        </p>
      </section>

      {/* Education */}
      <section className="cv-section-box">
        <h2>Education</h2>

        <div className="cv-content">
          <h3>Information Technology</h3>
          <p>Student</p>
        </div>
      </section>

      {/* Skills */}
      <section className="cv-section-box">
        <h2>Technical Skills</h2>

        <div className="cv-skills">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React</span>
          <span>GitHub</span>
        </div>
      </section>

      {/* Projects */}
      <section className="cv-section-box">
        <h2>Projects</h2>

        <div className="cv-content">
          <h3>Weather App</h3>
          <p>
            A responsive weather application created using React.
          </p>
        </div>

        <div className="cv-content">
          <h3>Task Manager</h3>
          <p>
            A simple application for managing daily tasks.
          </p>
        </div>

        <div className="cv-content">
          <h3>Portfolio Website</h3>
          <p>
            A modern personal portfolio website created using React
            and CSS.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="cv-section-box">
        <h2>Contact</h2>

        <p><strong>Name:</strong> Sundas Awais</p>

        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:sundasawais74@gmail.com">
            sundasawais74@gmail.com
          </a>
        </p>
      </section>

    </div>
  );
}

export default CV;