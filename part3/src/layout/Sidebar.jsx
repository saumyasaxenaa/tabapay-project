import "./Sidebar.css";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";

import logo from "../assets/tabapay-logo.svg";

const Sidebar = () => {
  return (
    <>
      <div className="navbar">
        <img src={logo} className="logo" alt="logo" />
      </div>
      <div className="sidebar">
        <div className="sidebar-wrap">
          {SidebarData.map((item, index) => {
            return <SubMenu item={item} key={index} />;
          })}
        </div>
      </div>
    </>
  );
};
export default Sidebar;
