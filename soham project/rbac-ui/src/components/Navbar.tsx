import React from "react";
import { Layout, Menu, Avatar } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import {
  DashboardOutlined,
  UserOutlined,
  TeamOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

const { Header } = Layout;

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Active menu item based on current route
  const selectedKey = location.pathname;

  const handleMenuClick = (key: string) => {
    navigate(key);
  };

  return (
    <Header style={{ backgroundColor: "#ffffff", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
      <div className="container mx-auto flex justify-between items-center h-full px-4">
        {/* Logo */}
        <div
          className="text-xl font-bold text-gray-800 cursor-pointer"
          onClick={() => navigate("/")}
        >
          RBAC Admin
        </div>

        {/* Menu */}
        <Menu
          mode="horizontal"
          selectedKeys={[selectedKey]}
          style={{ borderBottom: "none", flex: 1, justifyContent: "center" }}
          onClick={(e) => handleMenuClick(e.key)}
          items={[
            { key: "/", icon: <DashboardOutlined />, label: "Dashboard" },
            { key: "/users", icon: <UserOutlined />, label: "Users" },
            { key: "/roles", icon: <TeamOutlined />, label: "Roles" },
          ]}
        />

        {/* Profile Section */}
        <div className="flex items-center space-x-4">
          <span className="text-gray-600 hidden sm:inline-block">Admin</span>
          <Avatar
            style={{ backgroundColor: "#87d068" }}
            icon={<UserOutlined />}
            className="cursor-pointer"
            onClick={() => console.log("Profile clicked")}
          />
          <LogoutOutlined
            style={{ fontSize: "18px", color: "#f5222d", cursor: "pointer" }}
            onClick={() => console.log("Logout clicked")}
            title="Logout"
          />
        </div>
      </div>
    </Header>
  );
};

export default Navbar;
