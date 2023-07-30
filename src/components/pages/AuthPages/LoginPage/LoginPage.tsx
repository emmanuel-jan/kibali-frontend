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
  notification,
} from "antd";
import {
  LockOutlined,
  UserOutlined,
  DingtalkOutlined,
  LoginOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../../../features/auth/authSlice";
import { useLoginMutation } from "../../../../features/auth/authApiSlice";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../../../features/auth/authSlice";

const { Header, Content } = Layout;
const { Title } = Typography;

const validateMessages = {
  required: "Your ${label} is required!",
  types: {
    email: "Your ${label} is not a valid email!",
  },
};

const LoginPage = (props: any) => {
  const token = useSelector(selectCurrentToken);
  const userRef = useRef<HTMLInputElement>(null);
  const errRef = useRef<HTMLInputElement>(null);
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();
  let noficationMsg: String;

  const openNotification = () => {
    notification.error({
      message: "Ooops, something went wrong!",
      description: `${noficationMsg}`,
      placement: "topLeft",
      onClick: () => {
        console.log("Notification Clicked!");
      },
    });
  };

  useEffect(() => {
    userRef.current?.focus();
    if(token)
      navigate("/panel");
  }, []);

  const onFinish = async (values: any) => {
    try {
      const userData = await login(values).unwrap();
      dispatch(setCredentials({ ...userData }));
      navigate("/panel");
    } catch (error: any) {
      if (error?.data?.detail) {
        noficationMsg = `${error?.status} error - ${error?.data?.detail} NB: Check your password and username and try again`;
        openNotification();
      } else {
        noficationMsg = `${error?.status} error - Try again later`;
        openNotification();
      }
    }
  };
  return (
    <Layout style={{ height: "100dvh" }}>
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
            <Title style={{ margin: 0, paddingTop: "5px", color: "white" }}>
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
                <Title level={4} style={{ color: "#0a0050" }}>
                  <LoginOutlined />
                  &nbsp; Log in to your Kibali account
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
                      style={{ backgroundColor: "#0a0050" }}
                      loading={isLoading}
                    >
                      Log in
                    </Button>
                  </Form.Item>
                  <Form.Item style={{ textAlign: "center" }}>
                    Or&nbsp;
                    <Link to="/forgot-password" className="thelinks" style={{}}>
                      Forgot password?
                    </Link>
                  </Form.Item>
                  <hr />
                  <Form.Item style={{ textAlign: "center" }}>
                    Don't have an account?&nbsp;
                    <Link to="/registration" className="thelinks">
                      Sign Up
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
