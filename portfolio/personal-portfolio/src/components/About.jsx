import React from 'react';
import shivani from "../assets/img/shivani.png";


export const About = () => {
  return (
    <section className="about-section"  id="about">
          <h2 className="heading">About <span>Me</span></h2>
      <div className="about">
        <div className="about-img">
          <img src={shivani} alt="Shivani" />
        </div>
        <div className="about-content">
          <h3>Frontend Developer</h3>
          <p>I'm a passionate and self-driven pre-final year student at NSUT, eagerly pursuing my dreams of becoming a successful developer in the tech industry.
With an insatiable thirst for knowledge and a relentless drive to learn, I constantly explore new technologies and techniques to enhance my skills.
Join me as I immerse myself in the exciting realm of technology and strive to make a mark in the ever-evolving tech landscape.</p>
      
        </div>
      </div>
    </section>
  );
}
