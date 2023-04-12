import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  AndroidOutlined,
  AppleOutlined,
  UserOutlined,
  LockOutlined,
  PlusOutlined,
  LoginOutlined,
  PushpinOutlined,
  SettingOutlined,
  EllipsisOutlined,
  EditOutlined,
} from "@ant-design/icons";
import {
  Tabs,
  Row,
  Col,
  Form,
  Input,
  Button,
  Select,
  Upload,
  Typography,
  Card,
  Avatar,
  notification,
} from "antd";
import type { TabsProps } from "antd";
import { Link } from "react-router-dom";
import Explore from "../Explore/Explore";
import { useGetInstructorInfoQuery } from "../../../../features/instructors/instructorsApiSlice";
import {
  useCreateVideoMutation,
  useGetVideoCategoriesQuery,
  useGetVideosQuery,
} from "../../../../features/videos/videosApiSlice";
import videoImg from "../../../../assets/images/video.svg";

const onChange = (key: string) => {
  console.log(key);
};

const { Title, Text } = Typography;
const { Meta } = Card;

const { TextArea } = Input;

const validateMessages = {
  required: "Your ${label} is required!",
  types: {
    email: "Your ${label} is not a valid email!",
  },
};

const ManageContent = (props: any) => {
  const [selectedFile, setSelectedFile] = useState<any>("");
  const { data: instructorData } = useGetInstructorInfoQuery(1);
  const { data: categoryData } = useGetVideoCategoriesQuery(1);
  const { data: videosList } = useGetVideosQuery(1);
  const [form] = Form.useForm();
  const [video, { isLoading }] = useCreateVideoMutation();
  let noficationMsg: String;

  console.log(videosList);

  const changeHandler = (event: any) => {
    setSelectedFile(event.target.files[0]);
    console.log(event.target.files[0]);
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
    console.log("Received values of form: ", values);

    const data = new FormData();
    data.append("title", values.title);
    data.append("description", values.description);
    data.append("video", selectedFile);
    data.append("video_category", "1");
    data.append("instructor", instructorData[0]?.id);
    //data.append("video_file_name", "thename");
    //data.append("video_file_path", "video/mp4");

    try {
      const res = await video(data).unwrap();
      console.log(res);
      noficationMsg = "Your video has been posted successfully";
      openNotificationSuccess();
      form.resetFields();
    } catch (error: any) {
      console.log(error);
      openNotification();
    }
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: `Publish Content`,
      children: (
        <>
          <Row justify="center" style={{ height: "100vh" }}>
            <Col xs={24} sm={24} md={16} lg={16}>
              <Title level={4} style={{ color: "#2b243f" }}>
                <PushpinOutlined />
                &nbsp; Get Your Content Out There!
              </Title>
              <Card bordered={false}>
                <Form
                  form={form}
                  name="normal_login"
                  className="login-form"
                  onFinish={onFinish}
                  validateMessages={validateMessages}
                >
                  <Form.Item
                    name="title"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input placeholder="Video Title" />
                  </Form.Item>
                  {/* <Form.Item
                name="category"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Select
                  placeholder="Topic Category"
                  options={[
                    { value: "MATHEMATICS", label: "MATHEMATICS" },
                    { value: "ENGLISH", label: "ENGLISH" },
                    { value: "CHEMISTRY", label: "CHEMISTRY" },
                  ]}
                />
              </Form.Item> */}
                  {/* <Form.Item
                name="category"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Select
                  placeholder="Choose Form"
                  options={[
                    { value: "FORM 1", label: "FORM 1" },
                    { value: "FORM 2", label: "FORM 2" },
                    { value: "FORM 3", label: "FORM 3" },
                    { value: "FORM 4", label: "FORM 4" },
                  ]}
                />
              </Form.Item> */}
                  <Form.Item
                    name="description"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <TextArea
                      rows={4}
                      placeholder="Video description goes here..."
                    />
                  </Form.Item>
                  <Form.Item name="video">
                    Your Video File:
                    <input type="file" onChange={changeHandler} />
                    {/* <Upload action="/upload.do" listType="picture-card">
                  <div>
                    <PlusOutlined />
                    <div style={{ marginTop: 8 }}>Upload</div>
                  </div>
                </Upload> */}
                  </Form.Item>
                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      block
                      style={{ backgroundColor: "#0a0050" }}
                      loading={isLoading}
                    >
                      Publish
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
      label: `Your Content`,
      children: (
        <Row
          justify="center"
          style={{ minHeight: "100vh" }}
          className="gap_container"
        >
          {videosList?.map((video: any) => (
            <Col xs={24} sm={24} md={7} lg={7} key={video?.id}>
              <Link to={`/panel/video-detail/${video?.id}`}>
                <Card
                  hoverable
                  cover={
                    <img
                      alt="example"
                      style={{ padding: "25px" }}
                      src={videoImg}
                    />
                  }
                  actions={[
                    <SettingOutlined key="setting" />,
                    <EditOutlined key="edit" />,
                    <EllipsisOutlined key="ellipsis" />,
                  ]}
                >
                  <Meta
                    avatar={<Avatar icon={<UserOutlined />} />}
                    title={video?.title}
                    description={
                      <>
                        <Text type="secondary">Jim Gordon</Text>
                        <Text type="secondary" style={{ float: "right" }}>
                          Free
                        </Text>
                      </>
                    }
                  />
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      ),
    },
    //   {
    //     key: "3",
    //     label: `Tab 3`,
    //     children: `Content of Tab Pane 3`,
    //   },
  ];

  return (
    <Row justify="center" style={{ height: "100%" }}>
      <Col xs={20} sm={20} md={20} lg={20}>
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      </Col>
    </Row>
  );
};

ManageContent.propTypes = {};

export default ManageContent;
