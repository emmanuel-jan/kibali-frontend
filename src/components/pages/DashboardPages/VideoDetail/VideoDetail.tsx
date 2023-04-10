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
} from "antd";
import { Link } from "react-router-dom";
import VirtualList from "rc-virtual-list";
import VideojsPlayer from "../../../VideojsPlayer/VideojsPlayer";
import videojs from "video.js";
import InfiniteScroll from "react-infinite-scroll-component";
import { useParams } from "react-router-dom";
import { useGetVideosByIdQuery } from "../../../../features/videos/videosApiSlice";

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
  const playerRef = React.useRef<any>(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<DataType[]>([]);
  const {id} = useParams();
  const {data:videoData} = useGetVideosByIdQuery(id);

  console.log(videoData);

  const loadMoreData = () => {
    if (loading) {
      return;
    }
    setLoading(true);
    fetch(
      "https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo"
    )
      .then((res) => res.json())
      .then((body) => {
        setData([...data, ...body.results]);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    loadMoreData();
  }, []);

  const videoJsOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: `https://d2de5vvhbdytdl.cloudfront.net/videos/${videoData?.video_file_name.replace(/ /g,"_")}`,
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
      <Row justify="center" style={{ padding: "10px", gap: "1rem" }}>
        <Col xs={24} sm={24} md={15} lg={15}>
          <VideojsPlayer options={videoJsOptions} onReady={handlePlayerReady} />
          <Title level={3} style={{ margin: 0, padding: 0 }}>
            {videoData?.title}
          </Title>
          <div style={{ padding: "10px" }}>
            <Text>
              <Avatar icon={<UserOutlined />} />
              &nbsp;Jim Gordon
            </Text>

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
              <p>{text}</p>
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
              align:"center"
            }}
            dataSource={datas}
            header={
              <div>
                Comments ...
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
        <Col xs={24} sm={24} md={8} lg={8}>
          <div
            id="scrollableDiv"
            style={{
              height: "100vh",
              overflow: "auto",
              padding: "0 16px",
              border: "1px solid rgba(140, 140, 140, 0.35)",
              borderRadius:"10px"
            }}
          >
            <InfiniteScroll
              dataLength={data.length}
              next={loadMoreData}
              hasMore={data.length < 50}
              loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
              endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
              scrollableTarget="scrollableDiv"
            >
              <List
                header={
                  <div>
                    <VideoCameraOutlined />
                    &nbsp;Related videos...
                  </div>
                }
                dataSource={data}
                renderItem={(item) => (
                  <List.Item key={item.email}>
                    <List.Item.Meta
                      title={<a href="https://ant.design">{item.name.last}</a>}
                      description={item.email}
                    />
                    <div>05:00 min</div>
                  </List.Item>
                )}
              />
            </InfiniteScroll>
          </div>
        </Col>
      </Row>
    </>
  );
};

VideoDetail.propTypes = {};

export default VideoDetail;
