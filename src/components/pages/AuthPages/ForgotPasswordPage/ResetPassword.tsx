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
import { Link, useNavigate, useParams } from "react-router-dom";
import { useResetPasswordMutation } from "../../../../features/auth/registerUserApiSlice";

const { Header, Content } = Layout;
const { Title, Text } = Typography;

const validateMessages = {
  required: "Your ${label} is required!",
  types: {
    email: "Your ${label} is not a valid email!",
  },
};

const ResetPassword = (props: any) => {
  const [form] = Form.useForm();
  let noficationMsg: String;
  const [resetPassword, { isLoading }] = useResetPasswordMutation();
  const { uid, token } = useParams();
  const navigate = useNavigate();

  const openNotificationSuccess = () => {
    notification.success({
      message: "Great!",
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
  const onFinish = async (values: any) => {
    if (values.new_password !== values.re_new_password) {
      noficationMsg = "Your passwords don't match";
      openNotification();
    } else {
      try {
        const data = {
          uid,
          token,
          new_password: values.new_password,
          re_new_password: values.re_new_password,
        };
        console.log(data);
        const response = await resetPassword(data).unwrap();
        console.log(response);
        noficationMsg = "Your password has been successfully reset";
        openNotificationSuccess();
        form.resetFields();
        navigate("/login");
      } catch (error: any) {
        console.log(error);
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
                  Lets Reset Your Password!
                </Title>
                <Form
                  form={form}
                  name="normal_login"
                  className="login-form"
                  onFinish={onFinish}
                  validateMessages={validateMessages}
                >
                  <Form.Item
                    name="new_password"
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
                    name="re_new_password"
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
                      style={{ backgroundColor: "#0a0050" }}
                      loading={isLoading}
                    >
                      Reset Password
                    </Button>
                  </Form.Item>
                  <Form.Item style={{ textAlign: "center" }}>
                    Or&nbsp;
                    <Link to="/login" className="thelinks">
                      Log in
                    </Link>
                  </Form.Item>
                  <hr />
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

ResetPassword.propTypes = {};

export default ResetPassword;
