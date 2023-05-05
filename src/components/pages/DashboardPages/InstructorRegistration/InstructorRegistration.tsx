import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Col,
  Row,
  Form,
  Input,
  Typography,
  Select,
  Button,
  DatePicker,
  Upload,
  notification,
  Card,
} from "antd";
import {
  LockOutlined,
  UserOutlined,
  DingtalkOutlined,
  MailOutlined,
  GlobalOutlined,
  UploadOutlined,
  SolutionOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useGetUserInfoQuery } from "../../../../features/auth/authApiSlice";
import { useCreateInstructorMutation } from "../../../../features/instructors/instructorsApiSlice";

const { Title } = Typography;
const { TextArea } = Input;

const validateMessages = {
  required: "Your ${label} is required!",
  types: {
    email: "Your ${label} is not a valid email!",
  },
};

const normFile = (e: any) => {
  console.log("Upload event:", e);
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const InstructorRegistration = (props: any) => {
  const [instructor, { isLoading }] = useCreateInstructorMutation();
  const [form] = Form.useForm();
  const { data: userInfo } = useGetUserInfoQuery(1);
  const [selectedFile, setSelectedFile] = useState<any>("");
  const [docFile, setDocFile] = useState<any>("");
  let noficationMsg: String;

  const changeHandler = (event: any) => {
    setSelectedFile(event.target.files[0]);
  };

  const changeHandler1 = (event: any) => {
    setDocFile(event.target.files[0]);
  };

  const openNotificationSuccess = () => {
    notification.success({
      message: "Good News!",
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
      onClick: () => {
        console.log("Notification Clicked!");
      },
    });
  };

  const onFinish = async (values: any) => {
    //using dot notation to new add properties to an object
    // values.instructor_image = values.instructor_images[0];
    // values.instructor_documents = values.instructor_docs[0];
    values.user = userInfo?.id;

    console.log(values);

    const data = new FormData();
    data.append("address", values.address);
    data.append("city", values.city);
    data.append("state", values.state);
    data.append("zip_code", values.zip_code);
    data.append("date_of_birth", values.date_of_birth);
    data.append("instructor_notes", values.instructor_notes);
    data.append("instructor_image", selectedFile);
    data.append("instructor_documents", docFile);
    data.append("instructor_description", values.instructor_description);
    data.append("user", values.user);

    try {
      const res = await instructor(data).unwrap();
      console.log(res);
      noficationMsg =
        "Your application has been sent successfully, you will hear from us shortly";
      openNotificationSuccess();
      form.resetFields();
    } catch (error: any) {
      openNotification();
    }
  };

  return (
    <Row justify="center" style={{ minHeight: "100vh", padding: "10px" }}>
      <Col xs={22} sm={22} md={12} lg={12}>
        <Title level={4} type="secondary" style={{ color: "#0a0050" }}>
          <SolutionOutlined />
          &nbsp; Become an instructor today!
        </Title>
        <Card bordered={false}>
          <Form
            form={form}
            name="normal_login"
            className="login-form"
            onFinish={onFinish}
            validateMessages={validateMessages}
          >
            <Row justify="center">
              <Col xs={24} sm={24} md={12} lg={12}>
                <Form.Item
                  name="address"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input placeholder="Your address" />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={12} lg={12}>
                <Form.Item
                  name="city"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input placeholder="Your city" />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={12} lg={12}>
                <Form.Item
                  name="zip_code"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input placeholder="Your zip code" />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={12} lg={12}>
                <Form.Item
                  name="state"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input style={{ width: "100%" }} placeholder="Your state" />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={16} lg={16}>
                <Form.Item
                  name="date_of_birth"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input
                    style={{ width: "100%" }}
                    placeholder="Your date of birth"
                  />
                </Form.Item>
              </Col>
            </Row>

            {/* <Form.Item name="date_of_birth">
            <DatePicker style={{ width: "100%" }} />
          </Form.Item> */}
            <Form.Item
              name="instructor_notes"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <TextArea rows={4} placeholder="Your expertise..." />
            </Form.Item>
            <Form.Item
              name="instructor_description"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <TextArea
                rows={4}
                placeholder="Tell us a little bit about yourself..."
              />
            </Form.Item>
            <Form.Item
              name="instructor_images"
              // valuePropName="fileList"
              // getValueFromEvent={normFile}
            >
              Your Profile Picture:
              <input type="file" onChange={changeHandler} />
              {/* <Upload maxCount={1}>
              <Button icon={<UploadOutlined />}>
                Click to upload your profile pic
              </Button>
            </Upload> */}
            </Form.Item>
            <Form.Item
              name="instructor_docs"
              // valuePropName="fileList"
              // getValueFromEvent={normFile}
            >
              Your Documentation:
              <input type="file" onChange={changeHandler1} />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                block
                style={{ backgroundColor: "#0a0050" }}
                loading={isLoading}
              >
                Apply
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

InstructorRegistration.propTypes = {};

export default InstructorRegistration;
