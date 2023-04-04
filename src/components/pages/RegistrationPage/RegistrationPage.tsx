import React from "react";
import PropTypes from "prop-types";
import {
  Layout,
  Col,
  Row,
  Form,
  Button,
  Input,
  Typography,
  Select,
} from "antd";
import {
  LockOutlined,
  UserOutlined,
  DingtalkOutlined,
  MailOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Header, Content } = Layout;
const { Title } = Typography;
const { Option } = Select;

const validateMessages = {
  required: "Your ${label} is required!",
  types: {
    email: "Your ${label} is not a valid email!",
  },
};

const RegistrationPage = (props: any) => {
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  return (
    <Layout style={{ height: "100dvh" }}>
      <Header
        style={{
          backgroundColor: "#800080",
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
      <Content className="inherit-height">
        <Row className="inherit-height" justify="center">
          <Col className="registration-bg" xs={0} sm={0} md={12} lg={12}></Col>
          <Col className="inherit-height" xs={20} sm={20} md={12} lg={12}>
            <Row justify="center" className="center-div">
              <Col xs={24} sm={24} md={18} lg={18}>
                <Title level={4} type="secondary" style={{ color: "#8B008B" }}>
                  <GlobalOutlined />
                  &nbsp; Lets Get You Setup!
                </Title>
                <Form
                  name="normal_login"
                  className="login-form"
                  onFinish={onFinish}
                  validateMessages={validateMessages}
                >
                  <Form.Item
                    name="name"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input prefix={<UserOutlined />} placeholder="John Doe" />
                  </Form.Item>
                  <Form.Item
                    name="category"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Select
                      placeholder="Register as Instructor/Parent"
                      options={[
                        { value: "PARENT", label: "Parent" },
                        { value: "INSTRUCTOR", label: "Instructor" },
                      ]}
                    />
                  </Form.Item>
                  <Form.Item
                    name="email"
                    rules={[
                      {
                        required: true,
                        type: "email",
                      },
                    ]}
                  >
                    <Input
                      prefix={<MailOutlined />}
                      placeholder="johndoe@etc.com"
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
                    <Input style={{ width: "100%" }} placeholder="0700444777" />
                  </Form.Item>
                  <Form.Item
                    name="country"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Select
                      placeholder="Choose your country"
                      options={[
                        { value: "KENYA", label: "KENYA" },
                      ]}
                    />
                  </Form.Item>
                  <Form.Item
                    name="password"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input.Password
                      prefix={<LockOutlined />}
                      type="password"
                      placeholder="Password"
                    />
                  </Form.Item>
                  <Form.Item
                    name="confirm-password"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input.Password
                      prefix={<LockOutlined />}
                      type="password"
                      placeholder="Confirm Password"
                    />
                  </Form.Item>
                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      block
                      style={{ backgroundColor: "#8B008B" }}
                    >
                      Create Account
                    </Button>
                  </Form.Item>
                  <hr />
                  <Form.Item style={{ textAlign: "center" }}>
                    Already have an account?&nbsp;
                    <Link to="/login" style={{ color: "#8B008B" }}>
                      Log in
                    </Link>
                  </Form.Item>
                </Form>
              </Col>
            </Row>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

RegistrationPage.propTypes = {};

export default RegistrationPage;
