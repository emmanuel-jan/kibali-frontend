import React, { useState } from "react";
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
  Alert,
  notification,
  Checkbox,
} from "antd";
import {
  LockOutlined,
  UserOutlined,
  DingtalkOutlined,
  MailOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import {
  useRegisterUserMutation,
  useGetCountriesQuery,
} from "../../../../features/auth/registerUserApiSlice";
import type { SelectProps } from "antd";

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
  const [register, { isLoading }] = useRegisterUserMutation();
  const [activationMsg, setActivationMsg] = useState<any>("");
  const { data: countries } = useGetCountriesQuery(1);
  const [form] = Form.useForm();
  const options: SelectProps["options"] = [];

  for (let i = 0; i < countries?.length; i++) {
    options.push({
      value: countries[i]?.id,
      label: countries[i]?.name,
    });
  }

  let noficationMsg: String;

  console.log(countries);

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

  const onFinish = async (values: any) => {
    if (values.password !== values.re_password) {
      noficationMsg = "Your passwords don't match";
      openNotification();
    } else {
      try {
        const userDetails = await register(values).unwrap();
        console.log("Received values of form: ", values);
        console.log(userDetails);
        noficationMsg =
          "We've sent an activation link to your email. Check your email and click on the activation link";
        openNotificationSuccess();
        form.resetFields();
      } catch (error: any) {
        console.log(error);
        if (error?.data?.email) {
          if (error?.data?.email[0]) {
            noficationMsg = `${error?.status} error - ${error?.data?.email[0]}`;
            openNotification();
          }
        }
        if (error?.data?.password) {
          if (error?.data?.password[0]) {
            noficationMsg = `${error?.data?.password[0]}`;
            openNotification();
          }
          if (error?.data?.password[1]) {
            noficationMsg = `${error?.data?.password[1]}`;
            openNotification();
          }
          if (error?.data?.password[2]) {
            noficationMsg = `${error?.data?.password[2]}`;
            openNotification();
          }
        }
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
          <Col className="registration-bg" xs={0} sm={0} md={12} lg={12}></Col>
          <Col className="inherit-height" xs={20} sm={20} md={12} lg={12}>
            <Row justify="center" className="center-div">
              <Col xs={24} sm={24} md={18} lg={18}>
                <Title level={4} type="secondary" style={{ color: "#0a0050" }}>
                  <GlobalOutlined />
                  &nbsp; Lets Get You Setup!
                </Title>
                <div style={{ padding: "10px" }}>{activationMsg}</div>
                <Form
                  form={form}
                  name="normal_login"
                  className="login-form"
                  onFinish={onFinish}
                  validateMessages={validateMessages}
                >
                  <Form.Item
                    name="first_name"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input prefix={<UserOutlined />} placeholder="John" />
                  </Form.Item>
                  <Form.Item
                    name="last_name"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input prefix={<UserOutlined />} placeholder="Doe" />
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
                      options={options}
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
                    name="re_password"
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
                  <Form.Item
                    name="Terms&Conditions"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                    valuePropName="checked"
                  >
                    <Checkbox>
                      I agree to the{" "}
                      <a
                        href="/terms"
                        target="_blank"
                        style={{ color: "#fd4901" }}
                      >
                        Terms & Conditions
                      </a>
                    </Checkbox>
                  </Form.Item>
                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      block
                      style={{ backgroundColor: "#0a0050" }}
                      loading={isLoading}
                    >
                      Create Account
                    </Button>
                  </Form.Item>
                  <hr />
                  <Form.Item style={{ textAlign: "center" }}>
                    Already have an account?&nbsp;
                    <Link to="/login" className="thelinks">
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
