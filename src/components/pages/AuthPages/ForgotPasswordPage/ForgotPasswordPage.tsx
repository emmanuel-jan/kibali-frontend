import React, { useEffect } from "react";
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
import { useSendResetEmailMutation } from "../../../../features/auth/registerUserApiSlice";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const { Header, Content } = Layout;
const { Title, Text } = Typography;

const validateMessages = {
  required: "Your ${label} is required!",
  types: {
    email: "Your ${label} is not a valid email!",
  },
};

const ForgotPasswordPage = (props: any) => {
  const token = useSelector(selectCurrentToken);
  const [form] = Form.useForm();
  let noficationMsg: String;
  const [sendEmail, { isLoading }] = useSendResetEmailMutation();
  const navigate = useNavigate();

  const openNotificationSuccess = () => {
    notification.success({
      message: "Hey there!",
      description: `${noficationMsg}`,
      onClick: () => {
        console.log("Notification Clicked!");
      },
      duration: 6.5,
    });
  };

  const openNotification = () => {
    notification.error({
      message: "Ooops, something went wrong!",
      description: `${noficationMsg}`,
      onClick: () => {
        console.log("Notification Clicked!");
      },
    });
  };

  useEffect(() => {
    if(token)
      navigate("/panel");
  }, []);

  const onFinish = async (values: any) => {
    console.log("Received values of form: ", values);
    try {
      const response = await sendEmail(values).unwrap();
      console.log(response);
      noficationMsg =
        "We've sent a reset link to your email. Check your email and click on the reset link";
      openNotificationSuccess();
      form.resetFields();
    } catch (error: any) {
      console.log(error);
      openNotification();
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
                  form={form}
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
                      style={{ backgroundColor: "#0a0050" }}
                      loading={isLoading}
                    >
                      Send Reset Link
                    </Button>
                  </Form.Item>
                  <Form.Item style={{ textAlign: "center" }}>
                    Or&nbsp;
                    <Link to="/login" className="thelinks">
                      Log in
                    </Link>
                  </Form.Item>
                  <hr />
                  <Form.Item style={{ textAlign: "center" }}>
                    Don't have an account?&nbsp;
                    <Link to="/registration" className="thelinks">
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
