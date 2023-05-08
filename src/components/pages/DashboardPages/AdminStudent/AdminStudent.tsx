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
  Table,
  Tag,
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
import {
  useGetPendingInstructorQuery,
  useGetApprovedInstructorQuery,
  usePartialUpdateChangeApprovedByIdMutation,
  useGetAllStudentsQuery,
} from "../../../../features/administrator/administratorApiSlice";
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

const AdminStudent = (props: any) => {
  const [selectedFile, setSelectedFile] = useState<any>("");
  const { data: instructorData } = useGetInstructorInfoQuery(1);
  const { data: pendingInstructors } = useGetPendingInstructorQuery(1);
  const { data: allStudents } = useGetAllStudentsQuery(1);
  const { data: videosList } = useGetVideosQuery(1);
  const [form] = Form.useForm();
  const [approve, { isLoading }] = usePartialUpdateChangeApprovedByIdMutation();
  let noficationMsg: String;

  console.log(pendingInstructors);
  console.log(allStudents);

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

  const onFinish = async (number: any) => {
    console.log("Received value: ", number);
    //data.append("video_file_name", "thename");
    //data.append("video_file_path", "video/mp4");
    const data = {
      id: number,
      is_approved: true,
    };

    try {
      const res = await approve(data).unwrap();
      console.log(res);
      noficationMsg = "Your Instructor has been approved successfully";
      openNotificationSuccess();
    } catch (error: any) {
      console.log(error);
      openNotification();
    }
  };

  interface DataType {
    key: React.Key;
    name: string;
    email: any;
    phone: any;
    status: any;
    parent_status: any;
    student_status: any;
    action: any;
  }

  const columns2: ColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Phone Number",
      dataIndex: "phone",
    },
    {
      title: "Instructor Status",
      dataIndex: "status",
      render: (tags: string[]) => (
        <span>
          {tags.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "false") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </span>
      ),
    },
    {
      title: "Parent Status",
      dataIndex: "parent_status",
      render: (tags: string[]) => (
        <span>
          {tags.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "false") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </span>
      ),
    },
    {
      title: "Student Status",
      dataIndex: "student_status",
      render: (tags: string[]) => (
        <span>
          {tags.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "false") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </span>
      ),
    },
  ];

  const data: DataType[] = [];
  for (let i = 0; i < allStudents?.length; i++) {
    data.push({
      key: allStudents[i]?.id,
      name: `${allStudents[i]?.first_name} ${allStudents[i]?.last_name}`,
      email: allStudents[i]?.email,
      phone: allStudents[i]?.phone_number,
      status: [`${allStudents[i]?.is_instructor}`],
      parent_status: [`${allStudents[i]?.is_parent}`],
      student_status: [`${allStudents[i]?.is_student}`],
      action: allStudents[i]?.id,
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
      label: `All Students`,
      children: (
        <Row
          justify="center"
          style={{ minHeight: "100vh" }}
          className="gap_container"
        >
          <Col xs={24} sm={24} md={24} lg={24}>
            <Table
              rowSelection={rowSelection}
              columns={columns2}
              dataSource={data}
            />
          </Col>
        </Row>
      ),
    },
  ];
  return (
    <Row justify="center" style={{ height: "100%" }}>
      <Col xs={20} sm={20} md={20} lg={20}>
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      </Col>
    </Row>
  );
};

AdminStudent.propTypes = {};

export default AdminStudent;
