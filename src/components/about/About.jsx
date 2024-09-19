import React from 'react'
import "./about.css";
// import image from "../assets/img.svg";

const About = () => {
  return (
    <section className="about container section" id='about'>

<h2 className="section__title">About Me</h2>

<div className="about__container grid">

<img src={image} alt="" className="_about__img" />

<div className="about__data grid">

    <div className="about__info">

        <p className="about__decription">My input of description</p>
        <a href="" className="btn">Download CV</a>
    </div>

    <div className="about__skills grid">

        <div className="skills__data">
            <div className="skills__titles">

                <h3 className="skills__name">Development</h3>
                <span className="skills__number ">80%</span>
            </div>

            <div className="skills__bar">
                <span className="skills__percentage development"></span>
            </div>
        </div>

        <div className="skills__data">
            <div className="skills__titles">

                <h3 className="skills__name">Database</h3>
                <span className="skills__number">70%</span>
            </div>

            <div className="skills__bar">
                <span className="skills__percentage database"></span>
            </div>
        </div>

        <div className="skills__data">
            <div className="skills__titles">

                <h3 className="skills__name">UI/Design</h3>
                <span className="skills__number">90%</span>
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
