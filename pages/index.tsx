import Link from '@/node_modules/next/link';
import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="container">
      <nav className="navBar">
        <Link href="/about" className="navItem">About Me</Link>
        <Link href="#contact" className="navItem">Contacts</Link>
      </nav>
      <div className="mainContent">
        <p className="introText">
          Hi there! My name is Mbali and<br />
          I am a Full Stack Developer
        </p>
        <Link href="/documents/CV.pdf" className="downloadButton" download>
          Download CV
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
