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

const { Title, Text } = Typography;
const { Meta } = Card;

const Explore = (props: any) => {
  return (
    <>
      <Row justify="center" className="gap_container">
        <Col xs={20} sm={20} md={7} lg={7}>
          <Link to="/panel/video-detail/1">
            <Card
              hoverable
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
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
                title="Economics for beginners - the best approach!"
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
        <Col xs={20} sm={20} md={7} lg={7}>
          <Card
            hoverable
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
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
              title="Economics for beginners - the best approach!"
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
        </Col>
        <Col xs={20} sm={20} md={7} lg={7}>
          <Card
            hoverable
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
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
              title="Economics for beginners - the best approach!"
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
        </Col>
        <Col xs={20} sm={20} md={7} lg={7}>
          <Card
            hoverable
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
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
              title="Economics for beginners - the best approach!"
              description={
                <>
                  <Text type="secondary">Jim Gordon</Text>
                  <Text type="secondary" style={{ float: "right" }}>
                    Ksh. 150
                  </Text>
                </>
              }
            />
          </Card>
        </Col>
        <Col xs={20} sm={20} md={7} lg={7}>
          <Card
            hoverable
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
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
              title="Economics for beginners - the best approach!"
              description={
                <>
                  <Text type="secondary">Jim Gordon</Text>
                  <Text type="secondary" style={{ float: "right" }}>
                    Ksh. 2500
                  </Text>
                </>
              }
            />
          </Card>
        </Col>
        <Col xs={20} sm={20} md={7} lg={7}>
          <Card
            hoverable
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
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
              title="Economics for beginners - the best approach!"
              description={
                <>
                  <Text type="secondary">Jim Gordon</Text>
                  <Text type="secondary" style={{ float: "right" }}>
                    Ksh. 3000
                  </Text>
                </>
              }
            />
          </Card>
        </Col>
      </Row>
    </>
  );
};

Explore.propTypes = {};

export default Explore;
