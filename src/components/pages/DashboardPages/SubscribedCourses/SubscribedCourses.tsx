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
  DownloadOutlined,
  PlusCircleOutlined,
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
  Button,
  Skeleton,
} from "antd";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  selectCurrentRefresh,
  selectCurrentToken,
} from "../../../../features/auth/authSlice";
import type { TabsProps } from "antd";
import { useGetUserInfoQuery } from "../../../../features/auth/authApiSlice";
import { useGetVideosQuery } from "../../../../features/videos/videosApiSlice";
import {
  useGetCoursesByIdQuery,
  useGetCoursesCategoriesByIdQuery,
} from "../../../../features/courses/coursesApiSlice";
import videoImg from "../../../../assets/images/video.svg";

const { Search } = Input;
const onChange = (key: string) => {
  console.log(key);
};

const onSearch = (value: string) => console.log(value);

const { Title, Text } = Typography;
const { Meta } = Card;

const SubscribedCourses = (props: any) => {
  const { id } = useParams();
  const { data: userInfo } = useGetUserInfoQuery(1);
  const { data: courseCollection, isLoading } =
    useGetCoursesCategoriesByIdQuery("e387b02c-2753-4f57-b494-b5924632cded");
  console.log(userInfo);
  console.log(courseCollection);
  return (
    <>
      <Row justify="center" style={{minHeight:"91vh"}} className="gap_container">
        {isLoading ? (
          <>
            <Col xs={22} sm={22} md={7} lg={7}>
              <Skeleton active />
            </Col>{" "}
            <Col xs={22} sm={22} md={7} lg={7}>
              <Skeleton active />
            </Col>{" "}
            <Col xs={22} sm={22} md={7} lg={7}>
              <Skeleton active />
            </Col>{" "}
            <Col xs={22} sm={22} md={7} lg={7}>
              <Skeleton active />
            </Col>{" "}
            <Col xs={22} sm={22} md={7} lg={7}>
              <Skeleton active />
            </Col>{" "}
            <Col xs={22} sm={22} md={7} lg={7}>
              <Skeleton active />
            </Col>
            <Col xs={22} sm={22} md={7} lg={7}>
              <Skeleton active />
            </Col>
            <Col xs={22} sm={22} md={7} lg={7}>
              <Skeleton active />
            </Col>
            <Col xs={22} sm={22} md={7} lg={7}>
              <Skeleton active />
            </Col>
          </>
        ) : (
          <>
            {" "}
            {courseCollection?.map((video: any) => (
              <Col xs={22} sm={22} md={7} lg={7} key={video?.id}>
                <Link to={`/panel/video-detail-paid/${video?.id}`}>
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
                          <Text type="secondary">
                            {video?.instructor?.user?.first_name}&nbsp;
                            {video?.instructor?.user?.last_name}
                          </Text>
                          <Text
                            type="secondary"
                            style={{ float: "right", color: "#fd4901" }}
                          >
                            Free
                          </Text>
                        </>
                      }
                    />
                  </Card>
                </Link>
              </Col>
            ))}
          </>
        )}
      </Row>
    </>
  );
};

SubscribedCourses.propTypes = {};

export default SubscribedCourses;
