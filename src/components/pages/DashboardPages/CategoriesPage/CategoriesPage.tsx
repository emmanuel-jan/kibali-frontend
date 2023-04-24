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
  Input,
  Skeleton,
} from "antd";
import { Link } from "react-router-dom";
import { useGetVideosQuery } from "../../../../features/videos/videosApiSlice";
import { useGetCoursesQuery, useGetCoursesCategoriesQuery } from "../../../../features/courses/coursesApiSlice";
import videoImg from "../../../../assets/images/video.svg";

const { Search } = Input;
const onSearch = (value: string) => console.log(value);

const { Title, Text } = Typography;
const { Meta } = Card;
const CategoriesPage = (props: any) => {
  const { data: categoryList, isLoading } = useGetCoursesQuery(1);
  return (
    <>
      <Row
        justify="center"
        className="gap_container"
        style={{ minHeight: "100vh" }}
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
            {categoryList?.map((video: any) => (
              <Col xs={20} sm={20} md={7} lg={7} key={video?.id}>
                <Link to={`/panel/category/${video?.id}`}>
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
          </>
        )}
      </Row>
    </>
  );
};

CategoriesPage.propTypes = {};

export default CategoriesPage;
