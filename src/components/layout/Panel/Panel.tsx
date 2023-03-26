import React from "react";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  DingtalkOutlined,
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
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

const { Title, Text } = Typography;
const { Header, Content, Footer, Sider } = Layout;
const { Meta } = Card;

const Panel = (props: any) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Header
        style={{
          backgroundColor: "#800080",
          padding: 5,
          position: "sticky",
          top: 0,
          zIndex: 1,
        }}
      >
        <Row justify={"center"}>
          <Col xs={12} sm={12} md={24} lg={24}>
            <Title style={{ margin: 0, paddingTop: "10px", color: "white" }}>
              <DingtalkOutlined />
              Kibali
            </Title>
          </Col>
        </Row>
      </Header>
      <Layout>
        <Sider
          style={{ backgroundColor: "#800080" }}
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="logo" />
          <Menu
            style={{ backgroundColor: "#800080", color: "#DAA520" }}
            mode="inline"
            items={[
              UserOutlined,
              VideoCameraOutlined,
              UploadOutlined,
              UserOutlined,
            ].map((icon, index) => ({
              key: String(index + 1),
              icon: React.createElement(icon),
              label: `nav ${index + 1}`,
            }))}
          />
        </Sider>
        <Layout>
          <Content style={{}}>
            <Row justify="center" className="gap_container">
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
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

Panel.propTypes = {};

export default Panel;
