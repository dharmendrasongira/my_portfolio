import "./Facts.css";
import "odometer/themes/odometer-theme-default.css";
import { useState, useEffect } from "react";
import Odometer from "react-odometerjs";

const Facts = () => {
  const [experience, setExperience] = useState(0);
  const [projects, setProjects] = useState(0);
  const [certifications, setCertifications] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setExperience(1);
      setProjects(5);
      setCertifications(3);
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);

  const factsData = [
    { value: experience, label: "Years of Experience" },
    { value: projects, label: "Projects Delivered" },
    { value: certifications, label: "Certifications" },
  ];

  return (
    <div className="fact_container">
      {factsData.map((item, index) => (
        <div className="fact_item" key={index}>
          <div className="flex_center title">
            <Odometer value={item.value} />
            <h3>+</h3>
          </div>
          <p className="label">{item.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Facts;
