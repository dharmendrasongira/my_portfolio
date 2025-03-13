import "./Skills.css"
import {skills} from "../../data"
import SkillCard from "../../ui/SkillCard"
const Skills = ()=>{

    return(
     <section id="skills">
        <div className="section_wrapper">
            <div className="section_header">
                <h2 className="shine Topic">My Skills</h2>
            </div>
            <div className="skill_container">
                {skills.map((list, index)=>(
                 <SkillCard key={index} {...list}/>   
                ))}
            </div>
        </div>
     </section>
    )

}
export default Skills;