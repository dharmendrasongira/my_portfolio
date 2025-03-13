/* eslint-disable react/prop-types */
import "./SkillCard.css"
const SkillCard= ({title ,data})=>{

    return(
     <div className="card skill_card">
        <h3 className="title">
            <span className="g-text">{title}</span>
        </h3>
        <div className="skill_content">
        {data.map((list, index)=>(
            <article key={index} className="skill_details">
                <div className="skill_logo">
                    <img src={list.logo} alt={list.title}/>
                </div>
                <div className="">
                    <h4 className="skill_name">{list.skill}</h4>
                    <small className="text_muted skill_level">{list.level}</small>
                </div>
        </article>
        ))}
     </div>
     </div>
    )

}
export default SkillCard;