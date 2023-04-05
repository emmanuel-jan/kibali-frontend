import React from "react";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  DingtalkOutlined,
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  HomeOutlined,
  CompassOutlined,
  BookOutlined,
  UsergroupAddOutlined,
  ContactsOutlined,
  AuditOutlined
} from "@ant-design/icons";
import {
  Layout,
  Menu,
  theme,
  Row,
  Col,
  Typography,
  Card,
  Avatar,
  Space,
} from "antd";
import { Link, Outlet } from "react-router-dom";

const { Title, Text } = Typography;
const { Header, Content, Footer, Sider } = Layout;
const { Meta } = Card;

function getItem(label: any, key: any, icon: any){
  return{
    key,
    icon,
    label
  }
}

const items = [
  getItem(<Link to="">Explore</Link>, "explore", <CompassOutlined />),
  getItem(<Link to="courses">My Courses</Link>, "courses", <BookOutlined />),
  // getItem(<Link to="user-profile">Profile</Link>, "profile", <UserOutlined />),
  getItem(<Link to="manage-content">Manage Content</Link>, "content", <VideoCameraOutlined />),
  // getItem(<Link to="manage-student">Manage Students</Link>, "student", <UsergroupAddOutlined />),
  // getItem(<Link to="settings">Settings</Link>, "settings", <HomeOutlined/>),
  // getItem(<Link to="contact-us">Contact Us</Link>, "contact-us", <ContactsOutlined />),
  // getItem(<Link to="policy">Policy</Link>, "policy", <AuditOutlined />),
]

const Panel = (props: any) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Header
        style={{
          backgroundColor: "#0a0050",
          padding: 5,
          position: "sticky",
          top: 0,
          zIndex: 1,
        }}
      >
        <Row justify={"center"}>
          <Col xs={12} sm={12} md={24} lg={24}>
            <Title style={{ margin: 0, paddingTop: "10px", color: "white" }}>
              <DingtalkOutlined />
              Kibali
            </Title>
          </Col>
        </Row>
      </Header>
      <Layout>
        <Sider
          style={{ backgroundColor: "#0a0050" }}
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="logo" />
          <Menu
            style={{ backgroundColor: "#0a0050", color: "#fdfcfa" }}
            mode="inline"
            items={items}
          />
        </Sider>
        <Layout>
          <Content>
           <Outlet/>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

Panel.propTypes = {};

export default Panel;
