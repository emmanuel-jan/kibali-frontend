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
const { Title } = Typography;

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
  },
};

const LoginPage = (props: any) => {
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };
  return (
    <Layout style={{ height: "100dvh" }}>
      <Header style={{ backgroundColor: "#800080" }}>
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
                <Title level={2} style={{ color: "#8B008B" }}>
                  <LoginOutlined />
                  &nbsp; Login Here
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
                  <Form.Item
                    name="password"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input.Password
                      prefix={<LockOutlined className="site-form-item-icon" />}
                      type="password"
                      placeholder="Password"
                    />
                  </Form.Item>
                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      block
                      style={{ backgroundColor: "#8B008B" }}
                    >
                      Log in
                    </Button>
                  </Form.Item>
                  <Form.Item>
                    <Link to="/registration" style={{ color: "#8B008B" }}>
                        Register now!
                    </Link>
                    <Link to="/forgot-password" style={{ color: "#8B008B" }} className="login-form-forgot">
                        Forgot password?
                    </Link>
                  </Form.Item>
                </Form>
              </Col>
            </Row>
          </Col>
          <Col className="login-bg" xs={0} sm={0} md={12} lg={12}></Col>
        </Row>
      </Content>
    </Layout>
  );
};

LoginPage.propTypes = {};

export default LoginPage;
