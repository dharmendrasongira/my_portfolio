import "./About.css";
import Hole from "../../ui/Hole";
import { skills } from "../../data";
import CardUi from "../../assets/CardUi";

const About = () => {
  return (
    <section id="about">
      <div className="card section_wrapper">
        <Hole />
        <div className="column left-column"> {/* ✅ Fixed "coloumn" typo */}
          <h3 className="skill_title">My Skills</h3>
          <div className="skills_container">
            {skills.map((skill, index) => (
              <div key={index} className="flex skill_group">
                {skill.data.map((list, key) => (
                  <div key={key} className="blur_overlay skill">
                    <div className="skill_logo">
                      <img src={list.logo} alt={list.name} /> {/* ✅ Added alt text */}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <CardUi className="card_ui-item" color={"var(--color-primary)"} /> {/* ✅ Fixed "va(--color-primary)" */}
        </div>
        <div className="column right-column"> {/* ✅ Fixed "coloumn" typo */}
          <h2 className="shine">About Me</h2>
          <h1 className="title">
            I am <span className="color_primary">Dharmendra Songira</span>
          </h1>
          <p className="text_muted description">
            I am a passionate software engineer with a strong background in user experience design. My expertise lies in creating intuitive, user-centric solutions that enhance the overall user experience. I am constantly seeking ways to improve my skills and collaborate with talented team members to create innovative solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
