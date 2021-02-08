import React from "react";
import { Link } from "react-router-dom";
import {
  CalendarOutlined,
  UserOutlined,
  HomeOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button } from "antd";

import "./Navbar.css";

const { Sider } = Layout;

const Navbar = ({
  collapse,
  isLoggedIn,
  loginupdater,
  setProfileCheck,
  profileCheck,
}) => {
  const logout = () => {
    console.log("Logout Request!");
    localStorage.removeItem("usertoken");
    loginupdater(false);
    setProfileCheck({ ...profileCheck, tok: false });
  };

  return (
    <div>
      <Sider
        style={{ height: "100%" }}
        trigger={null}
        collapsible
        collapsed={collapse}
        collapsedWidth="50"
        width="150"
      >
        <div className="logo">η</div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<HomeOutlined />}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<CalendarOutlined />}>
            <Link to="/events">Events</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<UserOutlined />}>
            <Link to="/profile">Profile</Link>
          </Menu.Item>
          {isLoggedIn && (
            <Menu.Item isSelected="false" key="4" icon={<LogoutOutlined />}>
              <Button
                onClick={() => logout()}
                style={{
                  backgroundColor: "transparent",
                  backgroundRepeat: "no-repeat",
                  border: "none",
                  color: "white",
                  textAlign: "left",
                  paddingLeft: "0px",
                }}
              >
                Logout
              </Button>
            </Menu.Item>
          )}
        </Menu>
      </Sider>
    </div>
  );
};

export default Navbar;
