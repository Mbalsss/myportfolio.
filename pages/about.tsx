import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="container">
      <header className="header">
        <h1>About Me</h1>
      </header>
      <section className="intro">
        <h2>Introduction</h2>
        <p>
          Hello! I’m Mbali Kgatlhane, a Full Stack Developer with a passion for creating innovative and efficient web applications. 
          With a solid foundation in both front-end and back-end development, I am dedicated to crafting solutions that solve real-world 
          problems.
        </p>
      </section>
      <section className="background">
        <h2>Background</h2>
        <p>
        </p>
      </section>
      <section className="skills">
        <h2>Skills</h2>
        <ul>
          <li>JavaScript, TypeScript, React,</li>
          <li>Node.js</li>
          <li>HTML, CSS</li>
          <li>Database management (SQL)</li>
          <li>Version control with Git</li>
        </ul>
      </section>
      <section className="contact">
        <h2>Contact</h2>
        <p>
          If you’d like to get in touch or collaborate on a project, feel free to reach out!
        </p>
        <a href="mailto:your-email@example.com" className="contactButton">Email Me</a>
      </section>
      <style jsx>{`
        .container {
          padding: 20px;
          max-width: 800px;
          margin: 0 auto;
        }
        .header {
          text-align: center;
          margin-bottom: 20px;
        }
        .intro, .background, .skills, .contact {
          margin-bottom: 20px;
        }
        .contactButton {
          display: inline-block;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 5px;
          padding: 10px 20px;
          font-size: 1rem;
          text-decoration: none;
          font-weight: bold;
          transition: background-color 0.3s ease;
        }
        .contactButton:hover {
          background-color: #0056b3;
        }
      `}</style>
    </div>
  );
};

export default AboutPage;
