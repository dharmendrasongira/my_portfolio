import "./Header.css";
import HeaderTitle from "../../ui/HeaderTitle";
import { profile1 } from "../../assets";
import CodeBlock from "../../ui/CodeBlock";
import Facts from "../../ui/Facts";
import SocialHandles from "../../ui/SocialHandles";
import BreathCircle from "../../ui/BreathCircle";
import { FiDownload } from "react-icons/fi";

const code = `
const developer = {   
    firstName: "Dharmendra",
    lastName: "Songira",
    role: "Junior Software Engineer",
    stack: ["React Native", "React.js", "Node.js"],
    build: () => {
        // design();
        // develop();
        // automate();
        // ship();
    }
}
`;
const Header = () => {
  return (
    <header id="header">
      <BreathCircle />
      <div className="section_wrapper">
        <div className="grid upper">
          <div className="column">
            <HeaderTitle />
          </div>
          <div className="column">
            <img src={profile1} className="profile_photo" alt="Profile" />
          </div>
        </div>
        <div className="card grid lower">
          <CodeBlock language={"javascript"} code={code} />
          <div className="lower-content"> {/* Fixed missing className */}
            <p className="text_muted description">
              I build cross-platform mobile and web products with React Native,
              React.js and Node.js, and automate the repetitive parts with n8n and
              LLM-powered workflows.
            </p>
            <Facts />
            <div className="header_actions">
              <SocialHandles />
              <a
                className="btn flex_center resume_btn"
                href="/Dharmendra-Songira-Resume.pdf"
                download="Dharmendra-Songira-Resume.pdf"
              >
                <span>Resume</span>
                <span className="flex_center icon">
                  <FiDownload />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
