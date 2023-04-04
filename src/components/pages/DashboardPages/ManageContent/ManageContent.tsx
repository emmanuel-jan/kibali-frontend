import React from "react";
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
  EditOutlined
} from "@ant-design/icons";
import { Tabs, Row, Col, Form, Input, Button, Select, Upload, Typography, Card, Avatar } from "antd";
import type { TabsProps } from "antd";
import { Link } from "react-router-dom";
import Explore from "../Explore/Explore";

const onChange = (key: string) => {
  console.log(key);
};

const { Title, Text } = Typography;
const { Meta } = Card;

const { TextArea } = Input;

const onFinish = (values: any) => {
  console.log("Received values of form: ", values);
};

const validateMessages = {
  required: "Your ${label} is required!",
  types: {
    email: "Your ${label} is not a valid email!",
  },
};

const items: TabsProps["items"] = [
  {
    key: "1",
    label: `Publish Content`,
    children: (
      <>
        <Row justify="center" style={{height:"100vh"}}>
          <Col xs={24} sm={24} md={16} lg={16}>
          <Title level={4} style={{ color: "#8B008B" }}>
          <PushpinOutlined />
                  &nbsp; Get Your Content Out There!
                </Title>
            <Form
              name="normal_login"
              className="login-form"
              onFinish={onFinish}
              validateMessages={validateMessages}
            >
              <Form.Item
                name="topic"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input placeholder="Climate Change" />
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
                  placeholder="Topic Category"
                  options={[
                    { value: "MATHEMATICS", label: "MATHEMATICS" },
                    { value: "ENGLISH", label: "ENGLISH" },
                    { value: "CHEMISTRY", label: "CHEMISTRY" },
                  ]}
                />
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
                  placeholder="Choose Form"
                  options={[
                    { value: "FORM 1", label: "FORM 1" },
                    { value: "FORM 2", label: "FORM 2" },
                    { value: "FORM 3", label: "FORM 3" },
                    { value: "FORM 4", label: "FORM 4" },
                  ]}
                />
              </Form.Item>
              <Form.Item
                name="description"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <TextArea rows={4} />
              </Form.Item>
              <Form.Item valuePropName="fileList">
                <Upload action="/upload.do" listType="picture-card">
                  <div>
                    <PlusOutlined />
                    <div style={{ marginTop: 8 }}>Upload</div>
                  </div>
                </Upload>
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  block
                  style={{ backgroundColor: "#8B008B" }}
                >
                  Publish
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </>
    ),
  },
  {
    key: "2",
    label: `Your Content`,
    children: (
        <Row justify="center" className="gap_container">
        <Col xs={24} sm={24} md={7} lg={7}>
          <Link to="/panel/video-detail/1">
            <Card
              hoverable
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
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
                title="Economics for beginners - the best approach!"
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
        <Col xs={24} sm={24} md={7} lg={7}>
          <Card
            hoverable
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
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
              title="Economics for beginners - the best approach!"
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
        </Col>
        <Col xs={24} sm={24} md={7} lg={7}>
          <Card
            hoverable
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
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
              title="Economics for beginners - the best approach!"
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
        </Col>
        <Col xs={24} sm={24} md={7} lg={7}>
          <Card
            hoverable
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
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
              title="Economics for beginners - the best approach!"
              description={
                <>
                  <Text type="secondary">Jim Gordon</Text>
                  <Text type="secondary" style={{ float: "right" }}>
                    Ksh. 150
                  </Text>
                </>
              }
            />
          </Card>
        </Col>
        <Col xs={24} sm={24} md={7} lg={7}>
          <Card
            hoverable
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
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
              title="Economics for beginners - the best approach!"
              description={
                <>
                  <Text type="secondary">Jim Gordon</Text>
                  <Text type="secondary" style={{ float: "right" }}>
                    Ksh. 2500
                  </Text>
                </>
              }
            />
          </Card>
        </Col>
        <Col xs={24} sm={24} md={7} lg={7}>
          <Card
            hoverable
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
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
              title="Economics for beginners - the best approach!"
              description={
                <>
                  <Text type="secondary">Jim Gordon</Text>
                  <Text type="secondary" style={{ float: "right" }}>
                    Ksh. 3000
                  </Text>
                </>
              }
            />
          </Card>
        </Col>
      </Row>
    )
  },
//   {
//     key: "3",
//     label: `Tab 3`,
//     children: `Content of Tab Pane 3`,
//   },
];

const ManageContent = (props: any) => {
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
