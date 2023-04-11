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
  Tabs,
  Input,
} from "antd";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  selectCurrentRefresh,
  selectCurrentToken,
} from "../../../../features/auth/authSlice";
import type { TabsProps } from "antd";
import { useGetUserInfoQuery } from "../../../../features/auth/authApiSlice";
import { useGetVideosQuery } from "../../../../features/videos/videosApiSlice";
import videoImg from "../../../../assets/images/video.svg";

const { Search } = Input;
const onChange = (key: string) => {
  console.log(key);
};

const onSearch = (value: string) => console.log(value);

const { Title, Text } = Typography;
const { Meta } = Card;

const Explore = (props: any) => {
  const { data: userInfo } = useGetUserInfoQuery(1);
  const { data: videosList, isLoading } = useGetVideosQuery(1);
  console.log(userInfo);

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: `Year 1 - 2`,
      children: (
        <>
          <Row justify="center">
            <Col xs={24} sm={24} md={16} lg={16}>
              <Search placeholder="Search..." onSearch={onSearch} enterButton />
            </Col>
          </Row>
          <Row justify="center" className="gap_container">
            {videosList?.map((video: any) => (
              <Col xs={24} sm={24} md={7} lg={7}>
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
        </>
      ),
    },
    {
      key: "2",
      label: `Year 3 - 7`,
      children: (
        <>
          <Row justify="center">
            <Col xs={24} sm={24} md={16} lg={16}>
              <Search placeholder="Search..." onSearch={onSearch} enterButton />
            </Col>
          </Row>
          <Row justify="center" className="gap_container">
            {videosList?.map((video: any) => (
              <Col xs={24} sm={24} md={7} lg={7}>
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
        </>
      ),
    },
    {
      key: "3",
      label: `Year 8 - 9`,
      children: (
        <>
          <Row justify="center">
            <Col xs={24} sm={24} md={16} lg={16}>
              <Search placeholder="Search..." onSearch={onSearch} enterButton />
            </Col>
          </Row>
          <Row justify="center" className="gap_container">
            {videosList?.map((video: any) => (
              <Col xs={24} sm={24} md={7} lg={7}>
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
        </>
      ),
    },
    {
      key: "4",
      label: `Year 10 - 11`,
      children: (
        <>
          <Row justify="center">
            <Col xs={24} sm={24} md={16} lg={16}>
              <Search placeholder="Search..." onSearch={onSearch} enterButton />
            </Col>
          </Row>
          <Row justify="center" className="gap_container">
            {videosList?.map((video: any) => (
              <Col xs={24} sm={24} md={7} lg={7}>
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
        </>
      ),
    },
    {
      key: "5",
      label: `Year 12 - 13`,
      children: (
        <>
          <Row justify="center">
            <Col xs={24} sm={24} md={16} lg={16}>
              <Search placeholder="Search..." onSearch={onSearch} enterButton />
            </Col>
          </Row>
          <Row justify="center" className="gap_container">
            {videosList?.map((video: any) => (
              <Col xs={24} sm={24} md={7} lg={7}>
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
        </>
      ),
    },
  ];

  const refresh = useSelector(selectCurrentRefresh);
  const token = useSelector(selectCurrentToken);

  console.log(refresh);
  console.log(token);
  return (
    <>
      <Row justify="center" style={{ minHeight: "100vh" }}>
        <Col xs={20} sm={20} md={20} lg={20}>
          <Tabs
            defaultActiveKey="1"
            centered
            items={items}
            onChange={onChange}
          />
        </Col>
      </Row>
    </>
  );
};

Explore.propTypes = {};

export default Explore;
