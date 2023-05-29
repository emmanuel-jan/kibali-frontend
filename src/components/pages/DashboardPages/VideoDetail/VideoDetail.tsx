import React, { useEffect, useState } from "react";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  DingtalkOutlined,
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  HomeOutlined,
  LikeOutlined,
  MessageOutlined,
  StarOutlined,
  CaretRightOutlined,
  CommentOutlined,
  ShareAltOutlined,
  HeartOutlined,
  PlusOutlined,
  PlayCircleOutlined,
} from "@ant-design/icons";
import {
  List,
  Row,
  Col,
  Typography,
  Card,
  Avatar,
  Space,
  message,
  Divider,
  Skeleton,
  Collapse,
  Tooltip,
  Button,
  Drawer,
  Form,
  Input,
  Select,
} from "antd";
import { Link, useNavigate } from "react-router-dom";
import VirtualList from "rc-virtual-list";
import VideojsPlayer from "../../../VideojsPlayer/VideojsPlayer";
import videojs from "video.js";
import InfiniteScroll from "react-infinite-scroll-component";
import { useParams } from "react-router-dom";
import { useGetVideosByIdQuery } from "../../../../features/videos/videosApiSlice";
import { useGetCoursesByIdQuery } from "../../../../features/courses/coursesApiSlice";
const { Option } = Select;

interface UserItem {
  email: string;
  gender: string;
  name: {
    first: string;
    last: string;
    title: string;
  };
  nat: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
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

const { Title, Text } = Typography;
const { Meta } = Card;
const { Panel } = Collapse;
const text = `
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
           quibusdam eius cum repellat, modi pariatur possimus atque amet.
            Sed cum recusandae voluptatum minus saepe animi ut optio necessitatibus
             ab possimus?`;

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

const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const VideoDetail = (props: any) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const playerRef = React.useRef<any>(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<DataType[]>([]);
  const { data: videoData } = useGetCoursesByIdQuery(id);
  const [videoUrl, setVideoUrl] = useState<any>("");
  const [videoTitle, setVideoTitle] = useState<any>("");
  const [videoFileExtension, setVideoFileExtension] = useState<any>("");
  const datass = videoData?.videos;
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  console.log(videoData);
  console.log(videoUrl);

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

  return (
    <>
      <Row
        justify="center"
        style={{ padding: "10px", gap: "1rem", minHeight: "91vh" }}
      >
        {videoTitle == "" && videoUrl == "" && videoFileExtension === "" ? (
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
              height: "81vh",
            }}
          >
            <List
              header={
                <div>
                  {" "}
                  <Title level={3} style={{ margin: 0, padding: 0 }}>
                    {videoData?.title}
                  </Title>{" "}
                  by{" "}
                  <Text style={{ color: "#fd4901" }}>
                    {videoData?.instructor?.user?.first_name}&nbsp;
                    {videoData?.instructor?.user?.last_name}
                  </Text>
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
                    onClick={() => {
                      navigate(`/panel/quiz/${item?.quiz?.id}`);
                    }}
                    disabled={item?.quiz?.id == undefined ? true : false}
                  >
                    Take Quiz Here
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
  );
};

VideoDetail.propTypes = {};

export default VideoDetail;
