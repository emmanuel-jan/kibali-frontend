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
  Table
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
import type { ColumnsType } from "antd/es/table";
import type { TableRowSelection } from "antd/es/table/interface";

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

const ManageStudent = (props: any) => {
  const [selectedFile, setSelectedFile] = useState<any>("");
  const { data: instructorData } = useGetInstructorInfoQuery(1);
  const { data: categoryData } = useGetVideoCategoriesQuery(1);
  const { data: videosList } = useGetVideosQuery(1);
  const [form] = Form.useForm();
  const [video, { isLoading }] = useCreateVideoMutation();
  let noficationMsg: String;

  console.log(instructorData);

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

  interface DataType {
    key: React.Key;
    name: string;
    age: number;
    address: string;
  }

  const columns: ColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
    },
  ];

  const data: DataType[] = [];
  for (let i = 0; i < 46; i++) {
    data.push({
      key: i,
      name: `Edward King ${i}`,
      age: 32,
      address: `London, Park Lane no. ${i}`,
    });
  }

  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection: TableRowSelection<DataType> = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
      {
        key: "odd",
        text: "Select Odd Row",
        onSelect: (changeableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return false;
            }
            return true;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
      {
        key: "even",
        text: "Select Even Row",
        onSelect: (changeableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return true;
            }
            return false;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
    ],
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: `Sync with Student`,
      children: (
        <>
          <Row justify="center" style={{ height: "100vh" }}>
            <Col xs={24} sm={24} md={16} lg={16}>
              <Title level={4} style={{ color: "#2b243f" }}>
                <PushpinOutlined />
                &nbsp; Enter Student Account Email
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
                    name="name"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input placeholder="Student Email eg student@kibali.com" />
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
                  {/* <Form.Item
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
                  </Form.Item> */}
                 
                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      block
                      style={{ backgroundColor: "#0a0050" }}
                      loading={isLoading}
                    >
                      Send Sync Request
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
      label: `Your Student(s)`,
      children: (
        <Row
          justify="center"
          style={{ minHeight: "100vh" }}
          className="gap_container"
        >
          <Col xs={24} sm={24} md={24} lg={24}>
            <Table
              rowSelection={rowSelection}
              columns={columns}
              dataSource={data}
            />
          </Col>
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

ManageStudent.propTypes = {};

export default ManageStudent;
