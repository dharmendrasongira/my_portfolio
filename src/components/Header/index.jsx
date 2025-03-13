import "./Header.css";
import HeaderTitle from "../../ui/HeaderTitle";
import { profile1 } from "../../assets";
import CodeBlock from "../../ui/CodeBlock";
import Facts from "../../ui/Facts";
import SocialHandles from "../../ui/SocialHandles";
import BreathCircle from "../../ui/BreathCircle";

const code = `
const developer = {   
    firstName: "Dharmendra",
    lastName: "Songira",
    aka: "Mr DEVELOPER",
    hobby: repeat = () => {
        // eat();
        // sleep();
        // code();
        // repeat();
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
              I dissect intricate user experience challenges to engineer
              integrity-focused solutions that resonate with billions of users.
            </p>
            <Facts />
            <SocialHandles />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
