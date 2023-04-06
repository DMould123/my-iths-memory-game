import React from 'react';
import { AiFillLinkedin, AiFillGithub, AiFillTwitterCircle } from 'react-icons/ai';
import cv from '../files/David-Mould-CV.pdf';
import grades from '../files/David Mould - grades.pdf'

const About = () => {
  const handleDownloadCV = () => {
    window.open(cv)
  }

  const handleDownloadGrades = () => {
    window.open(grades);
  }

  const handleVisitWebsite = () => {
    window.open('https://www.your-website-url.com')
  }

  return (
    <div id='about'>
      <h1 className="heading">About Me</h1>
      <div className="about-container">
        <div className="image-container">
          <div className="square"></div>
          <img
            className='about-img'
            src="https://res.cloudinary.com/dele4dvi9/image/upload/v1680781966/memory-game-pictures/1679569823407_u98yg8.jpg"
            alt="David"
          />
          <div className="social-links">
            <a href="https://github.com/DMould123"><AiFillGithub className="social-img" /></a>
            <a href="https://www.linkedin.com/in/david-mould-b6731a21a/"><AiFillLinkedin className="social-img" /></a>
            <a href="https://twitter.com/DM12_51"><AiFillTwitterCircle className="social-img" /></a>
          </div>
        </div>
        <p>
          I'm David Mould, a newly qualified developer! Throughout my studies,
          I have acquired a strong foundation in a variety of languages,
          I hope you enjoyed playing my memory game of my favorite football team! If you are
          keen to find out more about me, please visit my Portfolio website or download my
          resume.
        </p>
        <button className="dw-btn" onClick={handleVisitWebsite}>
          Visit My Website
        </button>
        <button className="dw-btn" onClick={handleDownloadCV}>
          Download My Resume
        </button>
        <button className="dw-btn" onClick={handleDownloadGrades}>
          Download Grades
        </button>
      </div>
    </div>
  );
};

export default About;
