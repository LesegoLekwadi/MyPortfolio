import React from 'react'
import "./about.css";
import image from "../../assets/profile.jpg";

const About = () => {
  return (
    <section className="about container section" id='about'>

<h2 className="section__title">About Me</h2>

<div className="about__container grid">

<img src={image} alt="" className="_about__img" />

<div className="about__data grid">

    <div className="about__info">

        <p className="about__decription">I'm a passionate Full Stack Developer with expertise in both front-end and back-end technologies. With a strong foundation in JavaScript, React, Node.js, and databases like PostgreSQL, I thrive on building dynamic, user-friendly applications that solve real-world problems. My approach combines creative problem-solving with a keen eye for detail, ensuring that every project I undertake is not only functional but also visually appealing.

I love collaborating with cross-functional teams to deliver high-quality products, and I'm always eager to learn new technologies and improve my skills. Outside of coding, you can find me exploring the latest tech trends, contributing to open-source projects, or enjoying outdoor adventures. Let's connect and create something amazing together!</p>
        {/* <a href="" className="btn">Download CV</a> */}
    </div>

    <div className="about__skills grid">

        <div className="skills__data">
            <div className="skills__titles">

                <h3 className="skills__name">Development</h3>
                <span className="skills__number ">65%</span>
            </div>

            <div className="skills__bar">
                <span className="skills__percentage development"></span>
            </div>
        </div>

        <div className="skills__data">
            <div className="skills__titles">

                <h3 className="skills__name">Database</h3>
                <span className="skills__number">60%</span>
            </div>

            <div className="skills__bar">
                <span className="skills__percentage database"></span>
            </div>
        </div>

        <div className="skills__data">
            <div className="skills__titles">

                <h3 className="skills__name">UI/Design</h3>
                <span className="skills__number">70%</span>
            </div>

            <div className="skills__bar">
                <span className="skills__percentage design"></span>
            </div>
        </div>

    </div>
</div>
</div>

</section>

  )
}

export default About
