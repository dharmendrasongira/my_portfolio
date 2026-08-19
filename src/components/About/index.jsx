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
            I am a Junior Software Engineer at Virim Infotech, Indore, working across mobile and web. I build cross-platform healthcare applications with React Native and TypeScript, along with the companion React.js web platform, using reusable hook-based components and responsive layouts. Alongside product work, I build AI automation pipelines in n8n that parse resumes and score candidates with an LLM, cutting manual screening time by 70%. I am currently completing my B.Tech in Information Technology at Acropolis Institute of Technology and Research, and I enjoy turning ideas into fast, reliable products end to end.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
