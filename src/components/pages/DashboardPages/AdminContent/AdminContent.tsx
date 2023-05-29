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
  LikeOutlined,
  StarOutlined,
  CommentOutlined,
  ShareAltOutlined,
  CaretRightOutlined,
  MessageOutlined,
  PlayCircleOutlined,
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
  Space,
  Tooltip,
  Collapse,
  List,
  Drawer,
} from "antd";
import type { TabsProps } from "antd";
import { Link, useParams } from "react-router-dom";
import Explore from "../Explore/Explore";
import { useGetInstructorInfoQuery } from "../../../../features/instructors/instructorsApiSlice";
import {
  useGetApprovedCoursesQuery,
  useGetPendingCoursesQuery,
  usePartialApproveCourseByIdMutation,
  useGetApprovedVideosQuery,
  useGetPendingVideosQuery,
  usePartialUpdatePendingVideosByIdMutation,
} from "../../../../features/administrator/administratorApiSlice";
import { useGetCoursesByIdQuery } from "../../../../features/courses/coursesApiSlice";
import videoImg from "../../../../assets/images/video.svg";
import type { ColumnsType } from "antd/es/table";
import type { TableRowSelection } from "antd/es/table/interface";
import VideojsPlayer from "../../../VideojsPlayer/VideojsPlayer";
import videojs from "video.js";

const onChange = (key: string) => {
  console.log(key);
};

const { Title, Text } = Typography;
const { Meta } = Card;
const { Panel } = Collapse;

const { TextArea } = Input;

const validateMessages = {
  required: "Your ${label} is required!",
  types: {
    email: "Your ${label} is not a valid email!",
  },
};
interface DataType {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  email: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  nat: string;
}

const fakeDataUrl =
  "https://randomuser.me/api/?results=20&inc=name,gender,email,nat,picture&noinfo";
const ContainerHeight = 400;

const datas = Array.from({ length: 23 }).map((_, i) => ({
  href: "https://ant.design",
  title: `John Doe ${i}`,
  avatar: `{<UserOutlined />}`,
  description:
    "Ant Design, a design language for background applications, is refined by Ant UED Team.",
  content:
    "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
}));

const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const AdminContent = (props: any) => {
  const [selectedFile, setSelectedFile] = useState<any>("");
  const { data: instructorData } = useGetInstructorInfoQuery(1);
  const { data: pendingCourses } = useGetPendingCoursesQuery(1);
  const { data: approvedCourses } = useGetApprovedCoursesQuery(1);
  const { data: approvedVideos } = useGetApprovedVideosQuery(1);
  const { data: pendingVideos } = useGetPendingVideosQuery(1);
  const [approve, { isLoading }] = usePartialApproveCourseByIdMutation();
  const [approveVideo] = usePartialUpdatePendingVideosByIdMutation();
  const { id } = useParams();
  const playerRef = React.useRef<any>(null);
  const [loading, setLoading] = useState(false);
  // const [data, setData] = useState<DataType[]>([]);
  const { data: videoData } = useGetCoursesByIdQuery(id);
  const [videoUrl, setVideoUrl] = useState<any>("");
  const [videoTitle, setVideoTitle] = useState<any>("");
  const [videoFileExtension, setVideoFileExtension] = useState<any>("");

  const [videoUrl2, setVideoUrl2] = useState<any>("");
  const [videoTitle2, setVideoTitle2] = useState<any>("");
  const [videoFileExtension2, setVideoFileExtension2] = useState<any>("");
  const datass = pendingVideos;
  const approved = approvedVideos;
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  console.log(videoData);
  console.log(videoUrl);
  console.log(approvedVideos);
  console.log(pendingVideos);

  const videoJsOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: `https://d2de5vvhbdytdl.cloudfront.net/videos/${videoUrl}.${videoFileExtension}`,
        type: "video/mp4",
      },
    ],
  };

  const videoJsOptions2 = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: `https://d2de5vvhbdytdl.cloudfront.net/videos/${videoUrl2}.${videoFileExtension2}`,
        type: "video/mp4",
      },
    ],
  };

  const handlePlayerReady = (player: any) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on("waiting", () => {
      videojs.log("player is waiting");
    });

    player.on("dispose", () => {
      videojs.log("player will dispose");
    });
  };

  const handlePlayerReady2 = (player: any) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on("waiting", () => {
      videojs.log("player is waiting");
    });

    player.on("dispose", () => {
      videojs.log("player will dispose");
    });
  };

  let noficationMsg: String;

  console.log("pending courses", pendingCourses);
  console.log(approvedCourses);

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
    const data = {
      id: number,
      is_approved: true,
    };

    try {
      const res = await approve(data).unwrap();
      console.log(res);
      noficationMsg = "The Course has been approved successfully";
      openNotificationSuccess();
    } catch (error: any) {
      console.log(error);
      openNotification();
    }
  };

  const onFinish2 = async (number: any) => {
    console.log("Received value: ", number);
    const data = {
      id: number,
      is_approved: true,
    };

    try {
      const res = await approveVideo(data).unwrap();
      console.log(res);
      noficationMsg = "The Video has been approved successfully";
      openNotificationSuccess();
    } catch (error: any) {
      console.log(error);
      openNotification();
    }
  };

  interface DataType {
    key: React.Key;
    name: string;
    category: string;
    level: any;
    instructor: any;
    status: any;
    action: any;
  }

  const columns: ColumnsType<DataType> = [
    {
      title: "Course Title",
      dataIndex: "name",
    },
    {
      title: "Course Category",
      dataIndex: "category",
    },
    {
      title: "Course Level",
      dataIndex: "level",
    },
    {
      title: "Instructor",
      dataIndex: "instructor",
    },
    {
      title: "Approval Status",
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
      title: "Action",
      dataIndex: "action",
      key: "x",
      render: (number: any) => (
        <div>
          <>
            <Button
              type="primary"
              style={{ backgroundColor: "#0a0050" }}
              //loading={isLoading}
              onClick={() => onFinish(number)}
            >
              Approve
            </Button>
          </>
        </div>
      ),
    },
  ];

  const columns2: ColumnsType<DataType> = [
    {
      title: "Course Title",
      dataIndex: "name",
    },
    {
      title: "Course Category",
      dataIndex: "category",
    },
    {
      title: "Course Level",
      dataIndex: "level",
    },
    {
      title: "Instructor",
      dataIndex: "instructor",
    },
    {
      title: "Approval Status",
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
  ];

  const data: DataType[] = [];
  for (let i = 0; i < approvedCourses?.length; i++) {
    data.push({
      key: approvedCourses[i]?.id,
      name: `${approvedCourses[i]?.title}`,
      category: approvedCourses[i]?.course_category?.name,
      level: approvedCourses[i]?.course_level?.name,
      instructor: `${approvedCourses[i]?.instructor?.user?.first_name} ${approvedCourses[i]?.instructor?.user?.last_name}`,
      status: [`${approvedCourses[i]?.is_approved}`],
      action: approvedCourses[i]?.id,
    });
  }

  const data2: DataType[] = [];
  for (let i = 0; i < pendingCourses?.length; i++) {
    data2.push({
      key: pendingCourses[i]?.id,
      name: `${pendingCourses[i]?.title}`,
      category: pendingCourses[i]?.course_category?.name,
      level: pendingCourses[i]?.course_level?.name,
      instructor: `${pendingCourses[i]?.instructor?.user?.first_name} ${pendingCourses[i]?.instructor?.user?.last_name}`,
      status: [`${pendingCourses[i]?.is_approved}`],
      action: pendingCourses[i]?.id,
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
      label: `Pending Ccourse Approvals`,
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
              dataSource={data2}
            />
          </Col>
        </Row>
      ),
    },
    {
      key: "2",
      label: `Approved Courses`,
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
    {
      key: "3",
      label: `Pending Video Approvals`,
      children: (
        <>
          <Row justify="center" style={{ padding: "10px", gap: "1rem" }}>
            {videoTitle == "" && videoUrl == "" && videoFileExtension == "" ? (
              <Col xs={24} sm={24} md={15} lg={15}>
                <div
                  style={{
                    background: "black",
                    height: "350px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "10px",
                  }}
                >
                  <div>
                    <PlayCircleOutlined
                      style={{
                        color: "#fd530c",
                        fontSize: "200px",
                        textAlign: "center",
                      }}
                    />
                    <h3 style={{ color: "white", textAlign: "center" }}>
                      Select Video To Play From List
                    </h3>
                  </div>
                </div>
              </Col>
            ) : (
              <Col xs={24} sm={24} md={15} lg={15}>
                <VideojsPlayer
                  options={videoJsOptions}
                  onReady={handlePlayerReady}
                />

                <div style={{ padding: "20px" }}>
                  <Text>{videoTitle}</Text>

                  {/* <Space>
                <IconText
                  icon={StarOutlined}
                  text="156"
                  key="list-vertical-star-o"
                />
                <IconText
                  icon={LikeOutlined}
                  text="156"
                  key="list-vertical-like-o"
                />
                <IconText
                  icon={MessageOutlined}
                  text="2"
                  key="list-vertical-message"
                />
              </Space> */}
                </div>
              </Col>
            )}

            <Col xs={24} sm={24} md={8} lg={8}>
              <div
                id="scrollableDiv"
                style={{
                  overflow: "auto",
                  padding: "0 16px",
                  border: "1px solid rgba(140, 140, 140, 0.35)",
                  borderRadius: "10px",
                }}
              >
                <List
                  header={
                    <div>
                      {" "}
                      <Title level={3} style={{ margin: 0, padding: 0 }}>
                        Unapproved Videos
                      </Title>
                    </div>
                  }
                  itemLayout="horizontal"
                  dataSource={datass}
                  renderItem={(item: any, index) => (
                    <List.Item
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        setVideoUrl(item?.slug);
                        setVideoTitle(item?.title);
                        setVideoFileExtension(item?.video_file_extension);
                      }}
                    >
                      <List.Item.Meta
                        title={item.title}
                        description={item.description}
                      />
                      <Button
                        type="primary"
                        style={{ backgroundColor: "#0a0050" }}
                        loading={isLoading}
                        onClick={() => onFinish2(item?.id)}
                      >
                        Approve
                      </Button>
                    </List.Item>
                  )}
                />
              </div>
            </Col>
          </Row>
          <Drawer
            title="Comment Here!"
            onClose={onClose}
            open={open}
            bodyStyle={{ paddingBottom: 80 }}
            extra={
              <Space>
                <Button onClick={onClose}>Cancel</Button>
              </Space>
            }
          >
            <Form layout="vertical" hideRequiredMark>
              <Row gutter={16}>
                <Col span={24}>
                  <Form.Item
                    name="comment"
                    label="Comment"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your comment before you submit",
                      },
                    ]}
                  >
                    <Input.TextArea
                      rows={4}
                      placeholder="Please enter your comment"
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Form.Item>
                <Button htmlType="submit" type="primary">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Drawer>
        </>
      ),
    },
    {
      key: "4",
      label: `Approved Videos`,
      children: (
        <>
          <Row justify="center" style={{ padding: "10px", gap: "1rem" }}>
            {videoTitle2 == "" &&
            videoUrl2 == "" &&
            videoFileExtension2 === "" ? (
              <Col xs={24} sm={24} md={15} lg={15}>
                <div
                  style={{
                    background: "black",
                    height: "350px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "10px",
                  }}
                >
                  <div>
                    <PlayCircleOutlined
                      style={{
                        color: "#fd530c",
                        fontSize: "200px",
                        textAlign: "center",
                      }}
                    />
                    <h3 style={{ color: "white", textAlign: "center" }}>
                      Select Video To Play From List
                    </h3>
                  </div>
                </div>
              </Col>
            ) : (
              <Col xs={24} sm={24} md={15} lg={15}>
                <VideojsPlayer
                  options={videoJsOptions2}
                  onReady={handlePlayerReady2}
                />

                <div style={{ padding: "20px" }}>
                  <Text>{videoTitle2}</Text>
                  <span style={{ float: "right" }}>
                    <Space.Compact block>
                      <Tooltip title="Like">
                        <Button icon={<LikeOutlined />} />
                      </Tooltip>
                      <Tooltip title="Comment">
                        <Button icon={<CommentOutlined />} />
                      </Tooltip>
                      <Tooltip title="Star">
                        <Button icon={<StarOutlined />} />
                      </Tooltip>
                      <Tooltip title="Share">
                        <Button icon={<ShareAltOutlined />} />
                      </Tooltip>
                    </Space.Compact>
                  </span>

                  {/* <Space>
            <IconText
              icon={StarOutlined}
              text="156"
              key="list-vertical-star-o"
            />
            <IconText
              icon={LikeOutlined}
              text="156"
              key="list-vertical-like-o"
            />
            <IconText
              icon={MessageOutlined}
              text="2"
              key="list-vertical-message"
            />
          </Space> */}
                </div>
                <Collapse
                  bordered={false}
                  expandIcon={({ isActive }) => (
                    <CaretRightOutlined rotate={isActive ? 90 : 0} />
                  )}
                  size="small"
                >
                  <Panel header="34K Views 1 year ago" key="1">
                    <p>{videoData?.description}</p>
                  </Panel>
                </Collapse>
                <List
                  itemLayout="vertical"
                  size="small"
                  pagination={{
                    onChange: (page) => {
                      console.log(page);
                    },
                    pageSize: 3,
                    align: "center",
                  }}
                  dataSource={datas}
                  header={
                    <div style={{ cursor: "pointer" }} onClick={showDrawer}>
                      {" "}
                      <PlusOutlined /> Add Comment ...
                    </div>
                  }
                  renderItem={(items) => (
                    <List.Item
                      key={items.title}
                      actions={[
                        <IconText
                          icon={StarOutlined}
                          text="156"
                          key="list-vertical-star-o"
                        />,
                        <IconText
                          icon={LikeOutlined}
                          text="156"
                          key="list-vertical-like-o"
                        />,
                        <IconText
                          icon={MessageOutlined}
                          text="2"
                          key="list-vertical-message"
                        />,
                      ]}
                    >
                      <List.Item.Meta
                        avatar={<Avatar icon={<UserOutlined />} />}
                        title={<a href={items.href}>{items.title}</a>}
                      />
                      {items.content}
                    </List.Item>
                  )}
                />
              </Col>
            )}

            <Col xs={24} sm={24} md={8} lg={8}>
              <div
                id="scrollableDiv"
                style={{
                  overflow: "auto",
                  padding: "0 16px",
                  border: "1px solid rgba(140, 140, 140, 0.35)",
                  borderRadius: "10px",
                  height: "71vh",
                }}
              >
                <List
                  header={
                    <div>
                      {" "}
                      <Title level={3} style={{ margin: 0, padding: 0 }}>
                        Approved Videos
                      </Title>{" "}
                    </div>
                  }
                  itemLayout="horizontal"
                  dataSource={approved}
                  renderItem={(item: any, index) => (
                    <List.Item
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        setVideoUrl2(item?.slug);
                        setVideoTitle2(item?.title);
                        setVideoFileExtension2(item?.video_file_extension);
                      }}
                    >
                      <List.Item.Meta
                        title={item.title}
                        description={item.description}
                      />
                    </List.Item>
                  )}
                />
              </div>
            </Col>
          </Row>
          <Drawer
            title="Comment Here!"
            onClose={onClose}
            open={open}
            bodyStyle={{ paddingBottom: 80 }}
            extra={
              <Space>
                <Button onClick={onClose}>Cancel</Button>
              </Space>
            }
          >
            <Form layout="vertical" hideRequiredMark>
              <Row gutter={16}>
                <Col span={24}>
                  <Form.Item
                    name="comment"
                    label="Comment"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your comment before you submit",
                      },
                    ]}
                  >
                    <Input.TextArea
                      rows={4}
                      placeholder="Please enter your comment"
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Form.Item>
                <Button htmlType="submit" type="primary">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Drawer>
        </>
      ),
    },
    //   {
    //     key: "3",
    //     label: `Tab 3`,
    //     children: `Content of Tab Pane 3`,
    //   },
  ];
  return (
    <Row justify="center" style={{ minHeight: "91vh" }}>
      <Col xs={20} sm={20} md={20} lg={20}>
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      </Col>
    </Row>
  );
};

AdminContent.propTypes = {};

export default AdminContent;
