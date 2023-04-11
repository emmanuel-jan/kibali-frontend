import React from "react";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  DingtalkOutlined,
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import {
  Layout,
  Menu,
  theme,
  Row,
  Col,
  Typography,
  Card,
  Avatar,
  Space,
  Button,
  Input
} from "antd";
import { Link } from "react-router-dom";
import { useGetVideosQuery } from "../../../../features/videos/videosApiSlice";
import videoImg from "../../../../assets/images/video.svg";

const { Search } = Input;
const onSearch = (value: string) => console.log(value);

const { Title, Text } = Typography;
const { Meta } = Card;

const MyCourses = (props: any) => {
  const { data: videosList } = useGetVideosQuery(1);

  return (
    <>
      <Row justify="center" style={{margin:"15px"}}>
        <Col xs={20} sm={20} md={16} lg={16}>
          <Search placeholder="Search..." onSearch={onSearch} enterButton />
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={20} sm={20} md={16} lg={16} className="containers">
          <Space>
            <Button
              style={{ backgroundColor: "#f2d3c7" }}
              shape="round"
              size="small"
            >
              All
            </Button>
            <Button
              style={{ backgroundColor: "#f2d3c7" }}
              shape="round"
              size="small"
            >
              English
            </Button>
            <Button
              style={{ backgroundColor: "#f2d3c7" }}
              shape="round"
              size="small"
            >
              Mathematics
            </Button>
            <Button
              style={{ backgroundColor: "#f2d3c7" }}
              shape="round"
              size="small"
            >
              Sciences
            </Button>
            <Button
              style={{ backgroundColor: "#f2d3c7" }}
              shape="round"
              size="small"
            >
              History
            </Button>
            <Button
              style={{ backgroundColor: "#f2d3c7" }}
              shape="round"
              size="small"
            >
              Geography
            </Button>
            <Button
              style={{ backgroundColor: "#f2d3c7" }}
              shape="round"
              size="small"
            >
              Business
            </Button>
            <Button
              style={{ backgroundColor: "#f2d3c7" }}
              shape="round"
              size="small"
            >
              Computer Studies
            </Button>
          </Space>
        </Col>
      </Row>
      <Row
        justify="center"
        className="gap_container"
        style={{ minHeight: "100vh" }}
      >
        {videosList?.map((video: any) => (
          <Col xs={20} sm={20} md={7} lg={7}>
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
    </>
  );
};

MyCourses.propTypes = {};

export default MyCourses;
