import "./Services.css";
import { services } from "../../data";
import ServiceCard from "../../ui/ServiceCard"; // ✅ Removed trailing slash

const Services = () => {
  return (
    <section id="services">
      <div className="section_wrapper">
        <div className="section_header">
          <h2 className="shine Topic">Services</h2>
        </div>
        <div className="services_group">
          {services.map(({ title, description, icon, color, colorRGB }, index) => (
            <ServiceCard 
              key={index}
              title={title}
              description={description}
              icon={icon}
              color={color}
              colorRGB={colorRGB}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
