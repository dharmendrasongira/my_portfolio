import "./Footer.css";
import { menu } from "../../data"; 
import { Link } from "react-scroll";
import SocialHandles from "../../ui/SocialHandles";

const Footer = () => {
  return (
    <footer>
      <div className="section_wrapper">
        <ul className="nav">
          {menu.map((list, index) => (
            <Link
              to={list.name.toLowerCase()}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              key={index}
              className="nav_item"
              activeClass="btn_shine"
            >
              {list.name}
            </Link>
          ))}
        </ul>
        <SocialHandles />
        <div className="copyright">
          <h3>Copyright &copy; All rights reserved - 2024</h3>
          <p className="text_muted">Built with love by Dharmendra Songira</p>
        </div>
        <div className="base_logo">
          <h1 className="full_name shine">Dharmendra Songira</h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
