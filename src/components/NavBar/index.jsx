import "./Navbar.css";
import Logo from "../../assets/Logo";
import { FaTimes } from "react-icons/fa";
import { menu } from "../../data";
import { Link, animateScroll as scroll } from "react-scroll";
import { FaArrowUpRightFromSquare, FaBarsStaggered } from "react-icons/fa6";
import { useState } from "react";
const Navbar = () => {
  const [showSidebar, setshowSidebar] = useState(false);
  return (
    <nav className="card flex_center navbar">
      {showSidebar && (
        <div
          className="aside_overlay "
          onClick={() => {
            setshowSidebar(!showSidebar);
          }}
        />
      )}
      <div
        className="flex_center logo"
        onClick={() => scroll.scrollToTop({ duration: 500 })}
      >
        <Logo />
      </div>
      <aside className={`flex_center sidebar ${showSidebar && "visible"}`}>
        <div className="flex sidebar_top">
          <span
            className="icon_container close_btn"
            onClick={() => {
              setshowSidebar(!showSidebar);
            }}
          >
            <FaTimes />
          </span>
        </div>
        <div className="flex sidebar_middle ">
          {menu.map((list, index) => (
            <Link
              to={list.name.toLowerCase()}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              key={index}
              className="tab"
              activeClass="btn_shine"
            >
              {list.name}
            </Link>
          ))}
        </div>
      </aside>
      <div className="icon_container buttons_wrapper">
        <Link to="contact" className="btn flex_center hire_btn">
          Hire me
          <div className="flex_center icon">
            <FaArrowUpRightFromSquare />
          </div>
        </Link>
        <FaBarsStaggered
          className="menu"
          onClick={() => {
            setshowSidebar(!showSidebar);
          }}
        />
      </div>
    </nav>
  );
};
export default Navbar;
