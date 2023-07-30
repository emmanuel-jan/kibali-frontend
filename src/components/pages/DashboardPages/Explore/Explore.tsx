import React, { useState } from "react";
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
  Alert,
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
  useGetCoursesLevelsQuery,
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

const Explore = (props: any) => {
  const { id } = useParams();
  const [year, setYear] = useState<any>("");
  const [yearName, setYearName] = useState<any>("");
  const { data: userInfo } = useGetUserInfoQuery(1);
  const { data: courseLevels } = useGetCoursesLevelsQuery(1);
  console.log(courseLevels);
  let data = {
    id: id,
    yearId: year,
  };
  const { data: courseCollection, isLoading } =
    useGetCoursesCategoriesByIdQuery(data);

  console.log(userInfo);
  console.log(courseCollection);

  const addToCart = () => {
    console.log("Clicked");
  };

  const refresh = useSelector(selectCurrentRefresh);
  const token = useSelector(selectCurrentToken);

  console.log(refresh);
  console.log(token);
  return (
    <>
      <Row justify="center">
        <Col xs={22} sm={22} md={16} lg={16} className="containers">
          <Space>
            <Button
              style={{ backgroundColor: "#f2d3c7" }}
              shape="round"
              size="small"
              onClick={() => {
                setYear("");
              }}
            >
              All
            </Button>
            {courseLevels?.map((levels: any) => (
              <Button
                style={{ backgroundColor: "#f2d3c7" }}
                shape="round"
                size="small"
                onClick={() => {
                  setYear(levels?.id);
                  setYearName(levels?.name);
                }}
              >
                {levels.name}
              </Button>
            ))}
          </Space>
        </Col>
      </Row>
      <Row
        justify="center"
        style={{ minHeight: "100vh" }}
        className="gap_container"
      >
        {isLoading ? (
          <>
            <Col xs={24} sm={24} md={7} lg={7}>
              <Skeleton active />
            </Col>{" "}
            <Col xs={24} sm={24} md={7} lg={7}>
              <Skeleton active />
            </Col>{" "}
            <Col xs={24} sm={24} md={7} lg={7}>
              <Skeleton active />
            </Col>{" "}
            <Col xs={24} sm={24} md={7} lg={7}>
              <Skeleton active />
            </Col>{" "}
            <Col xs={24} sm={24} md={7} lg={7}>
              <Skeleton active />
            </Col>{" "}
            <Col xs={24} sm={24} md={7} lg={7}>
              <Skeleton active />
            </Col>
            <Col xs={24} sm={24} md={7} lg={7}>
              <Skeleton active />
            </Col>
            <Col xs={24} sm={24} md={7} lg={7}>
              <Skeleton active />
            </Col>
            <Col xs={24} sm={24} md={7} lg={7}>
              <Skeleton active />
            </Col>
          </>
        ) : (
          <>
            {courseCollection?.length === 0 ? (
              <Col xs={22} sm={22} md={8} lg={8}>
                <Alert
                  message={`Unfortunately there is no content for ${yearName}`}
                  type="info"
                />
              </Col>
            ) : (
              <>
                {courseCollection?.map((video: any) => (
                  <Col xs={22} sm={22} md={7} lg={7} key={video?.id}>
                    <Button style={{}} onClick={addToCart}>
                      <PlusCircleOutlined />
                      &nbsp;Add to Cart
                    </Button>
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
                        <Title
                          level={5}
                        >{`${video?.title} (${video?.course_level?.name})`}</Title>
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
                      </Card>
                    </Link>
                  </Col>
                ))}
              </>
            )}
          </>
        )}
      </Row>
    </>
  );
};

Explore.propTypes = {};

export default Explore;
