import React, { useState } from "react";
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
  ShoppingCartOutlined,
  DollarOutlined,
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
  Drawer,
  Badge,
  List,
  Form,
  Select,
  Alert,
  Input,
  Modal,
  Tabs,
} from "antd";
import type { TabsProps } from "antd";
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

const validateMessages = {
  required: "Your ${label} is required!",
  types: {
    email: "Your ${label} is not a valid email!",
  },
};

function getItem(label: any, key: any, icon: any) {
  return {
    key,
    icon,
    label,
  };
}

const data = [
  {
    title: "Course Title 1",
  },
  {
    title: "Course Title 2",
  },
  {
    title: "Course Title 3",
  },
  {
    title: "Course Title 4",
  },
  {
    title: "Course Title 1",
  },
  {
    title: "Course Title 2",
  },
  {
    title: "Course Title 3",
  },
  {
    title: "Course Title 4",
  },
  {
    title: "Course Title 1",
  },
  {
    title: "Course Title 2",
  },
  {
    title: "Course Title 3",
  },
  {
    title: "Course Title 4",
  },
];

const onChange = (key: string) => {
  console.log(key);
};

const Panel = (props: any) => {
  const { data: userInfo } = useGetUserInfoQuery(1);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const onFinish = async (values: any) => {};

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const logOutUser = () => {
    dispatch(logOut());
    dispatch(apiSlice.util.resetApiState());
    console.log("logout clicked");
  };

  console.log(userInfo);
  let items: any = [];

  if (userInfo?.is_staff) {
    items = [
      getItem(
        <Link to="subscribed">Subscribed Courses</Link>,
        "subscribe",
        <DollarOutlined />
      ),
      getItem(<Link to="">Explore</Link>, "explore", <CompassOutlined />),
      getItem(
        <Link to="admin-content">Content</Link>,
        "content",
        <VideoCameraOutlined />
      ),
      getItem(<Link to="admin-users">Users</Link>, "users", <UserOutlined />),
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
  } else if (userInfo?.is_instructor) {
    items = [
      getItem(
        <Link to="subscribed">Subscribed Courses</Link>,
        "subscribe",
        <DollarOutlined />
      ),
      getItem(
        <Link to="">Explore</Link>,
        "explore",
        <CompassOutlined style={{ color: "#f2d3c7" }} />
      ),
      // getItem(<Link to="courses">My Courses</Link>, "courses", <BookOutlined />),
      getItem(
        <Link to="manage-content">Manage Content</Link>,
        "content",
        <VideoCameraOutlined style={{ color: "#f2d3c7" }} />
      ),
      getItem(
        <Link to="manage-student">Manage Students</Link>,
        "student",
        <UserOutlined style={{ color: "#f2d3c7" }} />
      ),
      getItem(
        <Link to="profile">My profile</Link>,
        "profile",
        <SolutionOutlined style={{ color: "#f2d3c7" }} />
      ),
      getItem(
        <a href="/terms" target="_blank">
          Terms & Conditions
        </a>,
        "terms",
        <FileDoneOutlined style={{ color: "#f2d3c7" }} />
      ),
      getItem(
        <Button ghost onClick={() => logOutUser()}>
          Log out
        </Button>,
        "logout",
        <PoweroffOutlined style={{ color: "#f2d3c7" }} />
      ),
    ];
  } else if (userInfo?.is_parent) {
    items = [
      getItem(
        <Link to="subscribed">Subscribed Courses</Link>,
        "subscribe",
        <DollarOutlined />
      ),
      getItem(<Link to="">Explore</Link>, "explore", <CompassOutlined />),
      // getItem(
      //   <Link to="courses">My Courses</Link>,
      //   "courses",
      //   <BookOutlined />
      // ),
      getItem(
        <Link to="manage-student">Manage Students</Link>,
        "student",
        <UserOutlined style={{ color: "#f2d3c7" }} />
      ),
      getItem(
        <Link to="instructor-registration">Instructor Application</Link>,
        "instructor-reg",
        <SolutionOutlined style={{ color: "#f2d3c7" }} />
      ),
      getItem(
        <Link to="profile">My profile</Link>,
        "profile",
        <SolutionOutlined style={{ color: "#f2d3c7" }} />
      ),
      getItem(
        <a href="/terms" target="_blank">
          Terms & Conditions
        </a>,
        "terms",
        <FileDoneOutlined style={{ color: "#f2d3c7" }} />
      ),
      getItem(
        <Button ghost onClick={() => logOutUser()}>
          Log out
        </Button>,
        "logout",
        <PoweroffOutlined style={{ color: "#f2d3c7" }} />
      ),
    ];
  } else if (userInfo?.is_student) {
    items = [
      getItem(
        <Link to="subscribed">Subscribed Courses</Link>,
        "subscribe",
        <DollarOutlined />
      ),
      getItem(<Link to="">Explore</Link>, "explore", <CompassOutlined />),
      // getItem(
      //   <Link to="courses">My Courses</Link>,
      //   "courses",
      //   <BookOutlined />
      // ),
      getItem(
        <Link to="profile">My profile</Link>,
        "profile",
        <SolutionOutlined style={{ color: "#f2d3c7" }} />
      ),
      getItem(
        <a href="/terms" target="_blank">
          Terms & Conditions
        </a>,
        "terms",
        <FileDoneOutlined style={{ color: "#f2d3c7" }} />
      ),
      getItem(
        <Button ghost onClick={() => logOutUser()}>
          Log out
        </Button>,
        "logout",
        <PoweroffOutlined style={{ color: "#f2d3c7" }} />
      ),
    ];
  } else {
    items = [];
  }

  const itemss: TabsProps["items"] = [
    {
      key: "1",
      label: `Mpesa`,
      children: (
        <>
          <Row justify="center">
            <Col xs={24} sm={24} md={24} lg={24}>
              <Card bordered={false}>
                <Alert
                  message="After clicking on the make payment button, you should receive an STK push on your phone"
                  type="info"
                  showIcon
                />
                <br />
                <Form
                  form={form}
                  name="normal_login"
                  className="login-form"
                  onFinish={onFinish}
                  validateMessages={validateMessages}
                >
                  <Form.Item
                    name="plan"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Select
                      placeholder="Choose Subscription Plan"
                      options={[
                        { value: "30", label: "Daily (USD 30)" },
                        { value: "60", label: "Weekly (USD 60)" },
                        { value: "90", label: "Monthly(USD 90)" },
                      ]}
                    />
                  </Form.Item>
                  <Form.Item
                    name="phone"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input placeholder="Phone Number" />
                  </Form.Item>

                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      block
                      style={{ backgroundColor: "#0a0050" }}
                    >
                      Make Payment
                    </Button>
                  </Form.Item>
                </Form>
              </Card>
            </Col>
          </Row>
        </>
      ),
    },
    {
      key: "2",
      label: `Card`,
      children: (
        <Row justify="center" className="gap_container">
          <Col xs={24} sm={24} md={24} lg={24}>
            <Card bordered={false}>
              <Form
                form={form}
                name="normal_login"
                className="login-form"
                onFinish={onFinish}
                validateMessages={validateMessages}
              >
                <Form.Item
                  name="plan"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Select
                    placeholder="Choose Subscription Plan"
                    options={[
                      { value: "30", label: "Daily (USD 30)" },
                      { value: "60", label: "Weekly (USD 60)" },
                      { value: "90", label: "Monthly(USD 90)" },
                    ]}
                  />
                </Form.Item>
                <Form.Item
                  name="card"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input placeholder="Card Number" />
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    block
                    style={{ backgroundColor: "#0a0050" }}
                  >
                    Make Payment
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </Col>
        </Row>
      ),
    },
  ];

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
          <Col xs={12} sm={12} md={12} lg={12}>
            <Title style={{ margin: 0, paddingTop: "5px", color: "white" }}>
              <DingtalkOutlined />
              Kibali
            </Title>
          </Col>
          <Col xs={12} sm={12} md={12} lg={12}>
            {/* <Button
              icon={<PoweroffOutlined style={{ color: "#f2d3c7" }} />}
              style={{ float: "right", fontSize: "20px", border:"none", paddingTop:"20px" }}
              ghost
              onClick={() => logOutUser()}
            >
            </Button> */}
            <Button
              type="primary"
              ghost
              style={{
                float: "right",
                color: "white",
                fontSize: "30px",
                border: "none",
              }}
              onClick={showDrawer}
            >
              <Badge size="small" count={50}>
                <Avatar size="large" icon={<ShoppingCartOutlined />} />
              </Badge>
            </Button>
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
            <Drawer
              title="Your Courses"
              placement="right"
              onClose={onClose}
              open={open}
            >
              <Button block onClick={() => showModal()}>
                Checkout Here
              </Button>
              <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={(item, index) => (
                  <List.Item>
                    <List.Item.Meta
                      title={<a href="https://ant.design">{item.title}</a>}
                      description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                    />
                    <Button danger>Remove</Button>
                  </List.Item>
                )}
              />
            </Drawer>
            {token ? (
              <Outlet />
            ) : (
              <Navigate to="/login" state={{ from: location }} replace />
            )}
          </Content>
          <Modal
            title="Unlock the Power of Subscription!"
            open={isModalOpen}
            onCancel={handleCancel}
            okButtonProps={{ style: { display: "none" } }}
            cancelButtonProps={{ style: { display: "none" } }}
          >
            <p style={{ textAlign: "center" }}>
              Join our thriving community and experience a world of exclusive
              benefits that await you as a subscriber. Don't miss out on the
              incredible opportunities, insights, and rewards that come with
              being a part of our inner circle.
            </p>
            <Row justify="center">
              <Col xs={20} sm={20} md={20} lg={20}>
                <Tabs defaultActiveKey="1" items={itemss} onChange={onChange} />
              </Col>
            </Row>
          </Modal>
        </Layout>
      </Layout>
    </Layout>
  );
};

Panel.propTypes = {};

export default Panel;
