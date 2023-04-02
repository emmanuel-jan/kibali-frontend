import React from "react";
import PropTypes from "prop-types";
import { Layout, Col, Row, Form, Button, Input, Typography } from "antd";
import {
  LockOutlined,
  UserOutlined,
  DingtalkOutlined,
  LoginOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Header, Content } = Layout;
const { Title, Text } = Typography;

const validateMessages = {
  required: "Your ${label} is required!",
  types: {
    email: "Your ${label} is not a valid email!",
  },
};

const ForgotPasswordPage = (props: any) => {
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
          <Col className="inherit-height" xs={20} sm={20} md={12} lg={12}>
            <Row justify="center" className="center-div">
              <Col xs={24} sm={24} md={18} lg={18}>
                <Title
                  style={{ textAlign: "center", margin: 0, padding: 0 }}
                  level={4}
                  type="secondary"
                >
                  Forgot Password?
                </Title>
                <Title
                  level={5}
                  style={{ textAlign: "center", margin: 0, padding: "10px" }}
                  type="secondary"
                >
                  We can help with that, all we need is your email address
                </Title>
                <Form
                  name="normal_login"
                  className="login-form"
                  onFinish={onFinish}
                  validateMessages={validateMessages}
                >
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
                      prefix={<UserOutlined className="site-form-item-icon" />}
                      placeholder="johndoe@etc.com"
                    />
                  </Form.Item>
                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      block
                      style={{ backgroundColor: "#8B008B" }}
                    >
                      Reset Password
                    </Button>
                  </Form.Item>
                  <Form.Item style={{ textAlign: "center" }}>
                    Or&nbsp;
                    <Link to="/login" style={{ color: "#8B008B" }}>
                      Log in
                    </Link>
                  </Form.Item>
                  <hr />
                  <Form.Item style={{ textAlign: "center" }}>
                    Don't have an account?&nbsp;
                    <Link to="/registration" style={{ color: "#8B008B" }}>
                      Sign up
                    </Link>
                  </Form.Item>
                </Form>
              </Col>
            </Row>
          </Col>
          <Col
            className="forgotpassword-bg"
            xs={0}
            sm={0}
            md={12}
            lg={12}
          ></Col>
        </Row>
      </Content>
    </Layout>
  );
};

ForgotPasswordPage.propTypes = {};

export default ForgotPasswordPage;
