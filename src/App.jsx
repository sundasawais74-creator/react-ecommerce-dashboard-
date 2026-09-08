import { useState } from "react";
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState(null);

  const projects = [
    {
      id: "weather",
      title: "Weather App",
      description: "A modern weather application that shows temperature and weather conditions.",
      icon: "☁️",
    },
    {
      id: "tasks",
      title: "Task Manager",
      description: "An easy application to manage daily tasks and stay organized.",
      icon: "📝",
    },
    {
      id: "portfolio",
      title: "Portfolio Website",
      description: "A responsive personal portfolio created using React and CSS.",
      icon: "💻",
    },
  ];

  return (
    <div className="app">

      {/* Simple Intro / CV */}
      <section className="intro-cv">
        <div className="intro-content">
          <p className="intro-tag">HELLO, I'M</p>
          <h1>Sundas<span>.</span></h1>
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

      
      <nav className="navbar">
        <h2 className="logo">Pixel<span>Verse</span></h2>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      
      <section className="hero" id="home">
        <div className="hero-text">
          <p className="small-text">WELCOME TO MY DIGITAL SPACE</p>
          <h1>Turning Ideas Into <span>Digital Experiences.</span></h1>
          <p className="hero-description">
            I am an Information Technology student and a passionate web
            developer who enjoys creating modern, responsive and creative
            websites.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn primary-btn">View My Work</a>
            <a href="#contact" className="btn secondary-btn">Contact Me</a>
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

    
      <section className="section about" id="about">
        <p className="section-tag">ABOUT ME</p>
        <h2 className="section-title">Creating With Passion & Creativity</h2>
        <p className="section-description">
          I am an Information Technology student interested in web development
          and modern user interfaces. I enjoy learning new technologies and
          transforming creative ideas into functional websites.
        </p>
      </section>

      
      <section className="section" id="skills">
        <p className="section-tag">MY SKILLS</p>
        <h2 className="section-title">What I Work With</h2>
        <div className="skills-container">
          <div className="skill-card" onClick={() => setActiveSection('webdesign')}>
            <div className="skill-icon">🌐</div>
            <h3>Web Design</h3>
            <p>Creating attractive and user-friendly website designs.</p>
          </div>
          <div className="skill-card" onClick={() => setActiveSection('react')}>
            <div className="skill-icon">⚛️</div>
            <h3>React Development</h3>
            <p>Building interactive and responsive web applications.</p>
          </div>
          <div className="skill-card" onClick={() => setActiveSection('ui')}>
            <div className="skill-icon">🎨</div>
            <h3>UI Design</h3>
            <p>Designing clean, modern and easy-to-use interfaces.</p>
          </div>
        </div>

        
        {activeSection === 'webdesign' && <SkillDetail title="Web Design" desc="I create responsive websites using HTML, CSS, Tailwind. Tools: Figma, Adobe XD" />}
        {activeSection === 'react' && <SkillDetail title="React Development" desc="I build interactive apps using React, Hooks, State, API Integration. Tools: React, Vite, Git" />}
        {activeSection === 'ui' && <SkillDetail title="UI Design" desc="I design clean interfaces with focus on UX, Colors, Typography. Tools: Figma, Canva" />}
      </section>

      
      <section className="section projects-section" id="projects">
        <p className="section-tag">MY PROJECTS</p>
        <h2 className="section-title">Some Things I Have Created</h2>

        <div className="projects-container">
          {projects.map((project) => (
            <div className="project-card" key={project.id} onClick={() => setActiveSection(project.id)}>
              <div className="project-icon">{project.icon}</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <button>Explore Project →</button>
            </div>
          ))}
        </div>

        {/* PROJECT WORKSPACE SHOW HERE */}
        {activeSection === 'weather' && <WeatherApp />}
        {activeSection === 'tasks' && <TaskManager />}
        {activeSection === 'portfolio' && <PortfolioDetails />}
      </section>

      {/* Contact Section */}
      <section className="section contact-section" id="contact">
        <p className="section-tag">GET IN TOUCH</p>
        <h2 className="section-title">Let's Create Something Amazing</h2>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Write your message..." rows="5"></textarea>
          <button type="submit" className="send-btn">Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer>
        <h2 className="logo">Pixel<span>Verse</span></h2>
        <p>© 2026 PixelVerse Studio. Designed with creativity.</p>
      </footer>

    </div>
  );
}


function SkillDetail({title, desc}) {
  return (
    <div className="project-details">
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  )
}

function WeatherApp() {
  const [city, setCity] = useState("Lahore");
  const [weather, setWeather] = useState(null);

  const getWeather = () => {
    setWeather({ temp: 29, desc: "Sunny", city: city })
  }

  return (
    <div className="project-details">
      <button className="close-btn" onClick={() => setWeather(null)}>✕</button>
      <h3>☁️ Weather App</h3>
      <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter City Name" className="weather-input"/>
      <button onClick={getWeather} className="btn primary-btn">Get Weather</button>
      {weather && (
        <div className="weather-result">
          <h2>{weather.city}</h2>
          <p>{weather.temp}°C - {weather.desc}</p>
        </div>
      )}
    </div>
  )
}

function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if(task.trim() === "") return;
    setTasks([...tasks, {id: Date.now(), text: task, done: false}]);
    setTask("");
  }

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? {...t, done: !t.done} : t))
  }

  return (
    <div className="project-details">
      <h3>📝 Task Manager</h3>
      <div className="task-input">
        <input type="text" value={task} onChange={(e) => setTask(e.target.value)} placeholder="Add new task..."/>
        <button onClick={addTask} className="btn primary-btn">Add</button>
      </div>
      <ul className="task-list">
        {tasks.map(t => (
          <li key={t.id} onClick={() => toggleTask(t.id)} className={t.done ? 'done' : ''}>
            {t.text}
          </li>
        ))}
      </ul>
    </div>
  )
}

function PortfolioDetails() {
  return (
    <div className="project-details">
      <h3>💻 Portfolio Website</h3>
      <p>This website is built with React, CSS3, and deployed on GitHub Pages.</p>
      <p><b>Features:</b> Dark Theme, Responsive Design, Smooth Scroll, Contact Form</p>
    </div>
  )
}

export default App;
