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
  AuditOutlined,
  SolutionOutlined,
  LogoutOutlined,
  PoweroffOutlined,
  FileDoneOutlined,
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
  Button,
} from "antd";
import { useLocation, Navigate, Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../../features/auth/authSlice";
import { useDispatch } from "react-redux";
import { logOut } from "../../../features/auth/authSlice";
import { apiSlice } from "../../../app/api/apiSlice";
import { useGetUserInfoQuery } from "../../../features/auth/authApiSlice";

const { Title, Text } = Typography;
const { Header, Content, Footer, Sider } = Layout;
const { Meta } = Card;

function getItem(label: any, key: any, icon: any) {
  return {
    key,
    icon,
    label,
  };
}
const Panel = (props: any) => {
  const { data: userInfo } = useGetUserInfoQuery(1);
  const dispatch = useDispatch();
  const logOutUser = () => {
    dispatch(logOut());
    dispatch(apiSlice.util.resetApiState());
    console.log("logout clicked");
  };

  console.log(userInfo);
  let items: any = []

    if (userInfo?.is_staff){
      items = [
        getItem(<Link to="">Explore</Link>, "explore", <CompassOutlined />),
        getItem(
          <Link to="admin-content">Content</Link>,
          "content",
          <VideoCameraOutlined />
        ),
        getItem(
          <Link to="admin-users">Users</Link>,
          "users",
          <UserOutlined />
        ),
        getItem(
          <Link to="admin-students">Students</Link>,
          "students",
          <UserOutlined />
        ),
        getItem(
          <Link to="admin-instructors">Instructors</Link>,
          "instructors",
          <UsergroupAddOutlined />
        ),
        getItem(
          <Link to="profile">My profile</Link>,
          "profile",
          <SolutionOutlined />
        ),
        getItem(
          <a href="/terms" target="_blank">
            Terms & Conditions
          </a>,
          "terms",
          <FileDoneOutlined />
        ),
        getItem(
          <Button ghost onClick={() => logOutUser()}>
            Log out
          </Button>,
          "logout",
          <PoweroffOutlined />
        ),
      ];
    }else if(userInfo?.is_instructor){
      items = [
        getItem(<Link to="">Explore</Link>, "explore", <CompassOutlined />),
        // getItem(<Link to="courses">My Courses</Link>, "courses", <BookOutlined />),
        getItem(
          <Link to="manage-content">Manage Content</Link>,
          "content",
          <VideoCameraOutlined />
        ),
        getItem(
          <Link to="manage-student">Manage Students</Link>,
          "student",
          <UserOutlined />
        ),
        getItem(
          <Link to="profile">My profile</Link>,
          "profile",
          <SolutionOutlined />
        ),
        getItem(
          <a href="/terms" target="_blank">
            Terms & Conditions
          </a>,
          "terms",
          <FileDoneOutlined />
        ),
        getItem(
          <Button ghost onClick={() => logOutUser()}>
            Log out
          </Button>,
          "logout",
          <PoweroffOutlined />
        ),
      ];
    }else if(userInfo?.is_parent){
      items = [
        getItem(<Link to="">Explore</Link>, "explore", <CompassOutlined />),
        // getItem(
        //   <Link to="courses">My Courses</Link>,
        //   "courses",
        //   <BookOutlined />
        // ),
        getItem(
          <Link to="manage-student">Manage Students</Link>,
          "student",
          <UserOutlined />
        ),
        getItem(
          <Link to="instructor-registration">Instructor Application</Link>,
          "instructor-reg",
          <SolutionOutlined />
        ),
        getItem(
          <Link to="profile">My profile</Link>,
          "profile",
          <SolutionOutlined />
        ),
        getItem(
          <a href="/terms" target="_blank">
            Terms & Conditions
          </a>,
          "terms",
          <FileDoneOutlined />
        ),
        getItem(
          <Button ghost onClick={() => logOutUser()}>
            Log out
          </Button>,
          "logout",
          <PoweroffOutlined />
        ),
      ];
    }else{
      items = [
        getItem(<Link to="">Explore</Link>, "explore", <CompassOutlined />),
        // getItem(
        //   <Link to="courses">My Courses</Link>,
        //   "courses",
        //   <BookOutlined />
        // ),
        getItem(
          <Link to="profile">My profile</Link>,
          "profile",
          <SolutionOutlined />
        ),
        getItem(
          <a href="/terms" target="_blank">
            Terms & Conditions
          </a>,
          "terms",
          <FileDoneOutlined />
        ),
        getItem(
          <Button ghost onClick={() => logOutUser()}>
            Log out
          </Button>,
          "logout",
          <PoweroffOutlined />
        ),
      ];
    }
  

  const status = true;


  // if(status){
  //   items.splice(2,1);
  // }

  const token = useSelector(selectCurrentToken);
  const location = useLocation();
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
            style={{ backgroundColor: "#0a0050" }}
            mode="inline"
            items={items}
            className="menuText"
          />
        </Sider>
        <Layout>
          <Content>
            {token ? (
              <Outlet />
            ) : (
              <Navigate to="/login" state={{ from: location }} replace />
            )}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

Panel.propTypes = {};

export default Panel;
