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
  ReadOutlined,
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
import videoImg from "../../../../assets/images/subject.svg";

const { Search } = Input;
const onSearch = (value: string) => console.log(value);

const { Title, Text } = Typography;
const { Meta } = Card;
const CategoriesPage = (props: any) => {
  const { data: categoryList, isLoading } = useGetCoursesCategoriesQuery(1);
  console.log(categoryList);
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
            {categoryList?.map((category: any) => (
              <Col xs={20} sm={20} md={7} lg={7} key={category?.id}>
                <Link to={`/panel/category/${category?.id}`}>
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
                      avatar={<Avatar icon={<ReadOutlined />} />}
                      title={category?.name}
                      description={
                        <>
                          <Text type="secondary">{category?.description}</Text>
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
