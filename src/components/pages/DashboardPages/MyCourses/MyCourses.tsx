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
} from "antd";
import { Link } from "react-router-dom";
import { useGetVideosQuery } from "../../../../features/videos/videosApiSlice";
import videoImg from "../../../../assets/images/video.svg"

const { Title, Text } = Typography;
const { Meta } = Card;

const MyCourses = (props: any) => {
  const { data: videosList } = useGetVideosQuery(1);

  return (
    <>
      <Row justify="center" className="gap_container" style={{minHeight:"100vh"}}>
      {videosList?.map((video: any) => (
            <Col xs={24} sm={24} md={7} lg={7}>
              <Link to={`/panel/video-detail/${video?.id}`}>
                <Card
                  hoverable
                  cover={
                    <img
                      alt="example"
                      style={{padding:"25px"}}
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
    </>  )
}

MyCourses.propTypes = {}

export default MyCourses