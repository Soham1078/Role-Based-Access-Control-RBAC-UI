import React from "react";
import { Card, Col, Row, Statistic, Typography, Progress } from "antd";
import {
  UserOutlined,
  TeamOutlined,
  AppstoreOutlined,
  LineChartOutlined,
} from "@ant-design/icons";

const { Title } = Typography;

const Dashboard: React.FC = () => {
  return (
    <div style={{ padding: "24px", backgroundColor: "#f0f2f5", minHeight: "100vh" }}>
      {/* Header */}
      <Title level={2} style={{ marginBottom: "24px", color: "#333" }}>
        Dashboard Overview
      </Title>

      {/* Statistics Cards */}
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <Statistic
              title="Total Users"
              value={1200}
              prefix={<UserOutlined />}
              valueStyle={{ color: "#3f8600" }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <Statistic
              title="Active Roles"
              value={85}
              prefix={<TeamOutlined />}
              valueStyle={{ color: "#1890ff" }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <Statistic
              title="Applications"
              value={45}
              prefix={<AppstoreOutlined />}
              valueStyle={{ color: "#cf1322" }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <Statistic
              title="Monthly Growth"
              value="12.5%"
              prefix={<LineChartOutlined />}
              valueStyle={{ color: "#faad14" }}
            />
          </Card>
        </Col>
      </Row>

      {/* Progress Section */}
      <div style={{ marginTop: "32px" }}>
        <Row gutter={[16, 16]}>
          {/* User Growth */}
          <Col xs={24} md={12}>
            <Card title="User Growth" bordered={false}>
              <p style={{ marginBottom: "16px" }}>Growth this year:</p>
              <Progress
                percent={85}
                status="active"
                strokeColor={{
                  "0%": "#108ee9",
                  "100%": "#87d068",
                }}
              />
              <p style={{ marginTop: "16px" }}>New users added monthly:</p>
              <Progress percent={65} status="active" strokeColor="#faad14" />
            </Card>
          </Col>

          {/* Role Distribution */}
          <Col xs={24} md={12}>
            <Card title="Role Distribution" bordered={false}>
              <p style={{ marginBottom: "16px" }}>Admin Roles:</p>
              <Progress percent={40} type="circle" strokeColor="#1890ff" />
              <p style={{ marginTop: "16px", marginBottom: "16px" }}>Editor Roles:</p>
              <Progress percent={30} type="circle" strokeColor="#3f8600" />
              <p style={{ marginTop: "16px" }}>Viewer Roles:</p>
              <Progress percent={30} type="circle" strokeColor="#cf1322" />
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Dashboard;
