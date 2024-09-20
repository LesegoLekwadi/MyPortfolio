import React from 'react'
import "./home.css";
// import com from "../../assets/Logo.jpeg";
import HeaderSocials from './HeaderSocials';
// import ScrollDown from './ScrollDown';

const Home = () => {
  return (
   <section className="container" id="home">

<div className="intro">

<h1 className="home__name">Refilwe Lekwadi</h1>
<span className="home__education">I am a FullStack developer</span>

<HeaderSocials/>

<a href="#contact" className="btn">Contact Me</a>


</div>
   </section>
  )
}

export default Home
