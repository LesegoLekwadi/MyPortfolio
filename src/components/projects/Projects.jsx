import React from 'react'
import "./projects.css";
import image1 from "../../assets/project1.png"
import image2 from "../../assets/project2.png"


const data = [
  {
  id:1,
  image:image1,
  title: "MovieBuster",
  description: "A Movie Application that provides popular movies.",
  link: "https://example.com",

  },

  {
    id:2,
    image:image2,
    title: "eMzanziplaza",
    description: "A economic circular market that allows people to sell, donate and upcycle their goods.",
    link: "https://example.com",
  
    },

    


]

const Projects = () => {
  return <section className="project container section" id="projects">
    <h2 className="section__title">Projects</h2>

    <div className="projects__container grid">
      {data.map(project => (
        <div className="project__item" key={project.id}>
          <img src={project.image} alt="" className="project__img" />
          <h3 className="project__title">{project.title}</h3>
          <p className="project__description">{project.description}</p>
          <a href={project.link} className="btn project__btn">Visit Site</a>
        </div>
      ))}
    </div>
  </section>

   
  
}

export default Projects
