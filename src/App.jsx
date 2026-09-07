import "./App.css";

function App() {
  const projects = [
    {
      title: "Weather App",
      description:
        "A modern weather application that shows temperature and weather conditions.",
      icon: "☁️",
    },
    {
      title: "Task Manager",
      description:
        "An easy application to manage daily tasks and stay organized.",
      icon: "📝",
    },
    {
      title: "Portfolio Website",
      description:
        "A responsive personal portfolio created using React and CSS.",
      icon: "💻",
    },
  ];

  return (
    <div className="app">

      {/* Simple Intro / CV */}
      <section className="intro-cv">
        <div className="intro-content">

          <p className="intro-tag">HELLO, I'M</p>

          <h1>
            Sundas<span>.</span>
          </h1>

          <h2>BSIT Student & Web Developer</h2>

          <p className="intro-description">
            I am a passionate BSIT student and web developer focused on
            creating modern, responsive and user-friendly web experiences.
            I enjoy learning new technologies and turning creative ideas
            into functional digital solutions.
          </p>

          <div className="education">
            <span>EDUCATION</span>
            <p>BSIT — Bachelor of Science in Information Technology</p>
          </div>

          <div className="intro-contact">
            <p>📞 03344072741</p>
            <p>📧 sundasawais74@gmail.com</p>
          </div>

        </div>
      </section>

      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">
          Pixel<span>Verse</span>
        </h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-text">
          <p className="small-text">WELCOME TO MY DIGITAL SPACE</p>

          <h1>
            Turning Ideas Into <span>Digital Experiences.</span>
          </h1>

          <p className="hero-description">
            I am an Information Technology student and a passionate web
            developer who enjoys creating modern, responsive and creative
            websites.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary-btn">
              View My Work
            </a>

            <a href="#contact" className="btn secondary-btn">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-card">
          <div className="circle circle-one"></div>
          <div className="circle circle-two"></div>

          <div className="profile-box">
            <span>👩‍💻</span>
            <h2>Creative Developer</h2>
            <p>React • CSS • JavaScript</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section about" id="about">
        <p className="section-tag">ABOUT ME</p>
        <h2 className="section-title">
          Creating With Passion & Creativity
        </h2>

        <p className="section-description">
          I am an Information Technology student interested in web development
          and modern user interfaces. I enjoy learning new technologies and
          transforming creative ideas into functional websites.
        </p>
      </section>

      {/* Skills Section */}
      <section className="section" id="skills">
        <p className="section-tag">MY SKILLS</p>
        <h2 className="section-title">What I Work With</h2>

        <div className="skills-container">
          <div className="skill-card">
            <div className="skill-icon">🌐</div>
            <h3>Web Design</h3>
            <p>Creating attractive and user-friendly website designs.</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">⚛️</div>
            <h3>React Development</h3>
            <p>Building interactive and responsive web applications.</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">🎨</div>
            <h3>UI Design</h3>
            <p>Designing clean, modern and easy-to-use interfaces.</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section projects-section" id="projects">
        <p className="section-tag">MY PROJECTS</p>
        <h2 className="section-title">
          Some Things I Have Created
        </h2>

        <div className="projects-container">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-icon">{project.icon}</div>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <button>Explore Project →</button>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="section contact-section" id="contact">
        <p className="section-tag">GET IN TOUCH</p>

        <h2 className="section-title">
          Let's Create Something Amazing
        </h2>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" />

          <input type="email" placeholder="Your Email" />

          <textarea
            placeholder="Write your message..."
            rows="5"
          ></textarea>

          <button type="submit" className="send-btn">
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer>
        <h2 className="logo">
          Pixel<span>Verse</span>
        </h2>

        <p>© 2026 PixelVerse Studio. Designed with creativity.</p>
      </footer>

    </div>
  );
}

export default App;

