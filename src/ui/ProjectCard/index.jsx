/* eslint-disable react/prop-types */

import "./ProjectCard.css";

const ProjectCard = ({ title, category, image, description, stacks }) => {
  return (
    <div className="card project_card">
      <div className="project_card-top">
        <div className="picture">
            <img src={image} alt={title} className="project_image" />
        </div>
       </div>

      <div className="project_card-bottom">
        <div className="project_info">
          
        <div >
          <h3 className="title">{title}</h3>
          <p className="text_muted category">{category}</p>
        </div>
    </div>
          <p className="text_muted description">{description}</p>
     <div className="stacks">
        {stacks.map((stack,index)=>(
         <div className="stack" key={index}>
             <img src={stack.logo} alt={stack} />

         </div>
        ))}
     </div>
      </div>
    </div>
  );
};

export default ProjectCard;
