import "./experience.css";
import data from './Data'; // Import the data array
import Cards from '../experience/Cards';

const Experience = () => {
  return (
    <section className="experience container section" id="experience">
      <h2 className="section__title">Experience</h2>

      <div className="experience_container grid">
        <div className="timeline grid"></div>
        {data.map((val, id) => {
          if (val.category === "education") {
            return (
              <Cards key={val.id} icon={val.icon} title={val.title} year={val.year} />
            );
          }
          return null; // Explicitly return null if condition not met
        })}

        <div className="timeline grid"></div>
        {data.map((val, index) => {
          if (val.category === "experience") {
            return (
              <Cards key={val.index} icon={val.icon} title={val.title} year={val.year} />
            );
          }
          return null; // Explicitly return null if condition not met
        })}
      </div>
    </section>
  );
}

export default Experience;
