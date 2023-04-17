import React from "react";
import PropTypes from "prop-types";
import {
  Breadcrumb,
  Layout,
  Menu,
  Col,
  Row,
  Card,
  Typography,
  Button,
  Space,
  Collapse,
  Carousel,
  Avatar,
} from "antd";
import {
  LockOutlined,
  UserOutlined,
  DingtalkOutlined,
  LoginOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import students from "../../../../assets/images/students.jpg";
import hero1 from "../../../../assets/images/hero1.svg";
import hero2 from "../../../../assets/images/hero2.svg";
import hero3 from "../../../../assets/images/hero3.svg";
import videoImg from "../../../../assets/images/video.svg";
import "./LandingPage.css";

const { Panel } = Collapse;
const { Header, Content, Footer } = Layout;
const { Title, Text } = Typography;
const { Meta } = Card;
const contentStyle = {
  padding: "80px",
  height: "260px",
  color: "#fff",
  textAlign: "center",
  background: "#364d79",
  borderRadius: "10px",
};

const LandingPage = (props: any) => {
  const onChange = (currentSlide: any) => {
    console.log(currentSlide);
  };
  return (
    <Layout>
      <Header
        style={{
          backgroundColor: "#0a0050",
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
      <Content>
        <Row
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundImage: `url(${hero2})`,
            backgroundSize: "cover",
          }}
          justify="center"
          className="responsiveHeight"
        >
          <Col xs={20} sm={20} md={10} lg={10}>
            <Title style={{ color: "white" }}>Welcome to Kibali ...</Title>
            <Title
              level={4}
              style={{ padding: "0px", margin: "0px", color: "white" }}
              type="secondary"
            >
              Our team of experienced professionals carefully hand-picked the
              most qualified instructors and created expertly crafted courses
              that are specifically designed to meet the needs and preferences
              of modern students
            </Title>
            <Space style={{ marginTop: "10px" }}>
              <Link to="/registration">
                <Button
                  style={{ backgroundColor: "#0a0050", color: "white" }}
                  type="primary"
                >
                  Register
                </Button>
              </Link>
              <Link to="/login">
                <Button>Log in</Button>
              </Link>
            </Space>
          </Col>
          <Col
            xs={0}
            sm={0}
            md={6}
            lg={6}
            style={{ display: "grid", gap: "10px" }}
          >
            <Col xs={0} sm={0} md={20} lg={20} offset={4}>
              <Card
                hoverable
                bordered={false}
                style={{
                  width: "100%",
                  borderRadius: "15px",
                  textAlign: "center",
                }}
              >
                <Text>Engaging</Text>
              </Card>
            </Col>
            <Col xs={0} sm={0} md={20} lg={20}>
              <Card
                hoverable
                bordered={false}
                style={{
                  width: "100%",
                  borderRadius: "15px",
                  textAlign: "center",
                }}
              >
                <Text>Eye Opening</Text>
              </Card>
            </Col>
            <Col xs={0} sm={0} md={20} lg={20} offset={4}>
              <Card
                hoverable
                bordered={false}
                style={{
                  width: "100%",
                  borderRadius: "15px",
                  textAlign: "center",
                }}
              >
                <Text>Hands-On</Text>
              </Card>
            </Col>
            <Col xs={0} sm={0} md={20} lg={20}>
              <Card
                hoverable
                bordered={false}
                style={{
                  width: "100%",
                  borderRadius: "15px",
                  textAlign: "center",
                }}
              >
                <Text>Participatory</Text>
              </Card>
            </Col>
          </Col>
        </Row>
        <Row
          justify="center"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
          }}
        >
          <Col xs={20} sm={20} md={16} lg={16}>
            <Title level={2} type="secondary">
              Recommended to you
            </Title>
            <Row style={{ display: "flex", gap: "16px" }}>
              <Col xs={24} sm={24} md={7} lg={7}>
                <Card
                  bordered={false}
                  hoverable
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                  cover={
                    <img
                      style={{ padding: "50px" }}
                      alt="example"
                      src={videoImg}
                    />
                  }
                >
                  <Meta
                    avatar={<Avatar icon={<UserOutlined />} />}
                    title="Fundamentals Of Calculus"
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
              <Col xs={24} sm={24} md={7} lg={7}>
                <Card
                  bordered={false}
                  hoverable
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                  cover={
                    <img
                      style={{ padding: "50px" }}
                      alt="example"
                      src={videoImg}
                    />
                  }
                >
                  <Meta
                    avatar={<Avatar icon={<UserOutlined />} />}
                    title="Fundamentals Of Calculus"
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
              <Col xs={24} sm={24} md={7} lg={7}>
                <Card
                  bordered={false}
                  hoverable
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                  cover={
                    <img
                      style={{ padding: "50px" }}
                      alt="example"
                      src={videoImg}
                    />
                  }
                >
                  <Meta
                    avatar={<Avatar icon={<UserOutlined />} />}
                    title="Fundamentals Of Calculus"
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
            </Row>
          </Col>
          <Col xs={20} sm={20} md={16} lg={16}>
            <Title level={2} type="secondary">
              Most Popular
            </Title>
            <Row style={{ display: "flex", gap: "16px" }}>
              <Col xs={24} sm={24} md={7} lg={7}>
                <Card
                  bordered={false}
                  hoverable
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                  cover={
                    <img
                      style={{ padding: "50px" }}
                      alt="example"
                      src={videoImg}
                    />
                  }
                >
                  <Meta
                    avatar={<Avatar icon={<UserOutlined />} />}
                    title="Fundamentals Of Calculus"
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
              <Col xs={24} sm={24} md={7} lg={7}>
                <Card
                  bordered={false}
                  hoverable
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                  cover={
                    <img
                      style={{ padding: "50px" }}
                      alt="example"
                      src={videoImg}
                    />
                  }
                >
                  <Meta
                    avatar={<Avatar icon={<UserOutlined />} />}
                    title="Fundamentals Of Calculus"
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
              <Col xs={24} sm={24} md={7} lg={7}>
                <Card
                  bordered={false}
                  hoverable
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                  cover={
                    <img
                      style={{ padding: "50px" }}
                      alt="example"
                      src={videoImg}
                    />
                  }
                >
                  <Meta
                    avatar={<Avatar icon={<UserOutlined />} />}
                    title="Fundamentals Of Calculus"
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
            </Row>
          </Col>
          <Col xs={20} sm={20} md={16} lg={16}>
            <Title level={2} type="secondary">
              Trending
            </Title>
            <Row style={{ display: "flex", gap: "16px" }}>
              <Col xs={24} sm={24} md={7} lg={7}>
                <Card
                  bordered={false}
                  hoverable
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                  cover={
                    <img
                      style={{ padding: "50px" }}
                      alt="example"
                      src={videoImg}
                    />
                  }
                >
                  <Meta
                    avatar={<Avatar icon={<UserOutlined />} />}
                    title="Fundamentals Of Calculus"
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
              <Col xs={24} sm={24} md={7} lg={7}>
                <Card
                  bordered={false}
                  hoverable
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                  cover={
                    <img
                      style={{ padding: "50px" }}
                      alt="example"
                      src={videoImg}
                    />
                  }
                >
                  <Meta
                    avatar={<Avatar icon={<UserOutlined />} />}
                    title="Fundamentals Of Calculus"
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
              <Col xs={24} sm={24} md={7} lg={7}>
                <Card
                  bordered={false}
                  hoverable
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                  cover={
                    <img
                      style={{ padding: "50px" }}
                      alt="example"
                      src={videoImg}
                    />
                  }
                >
                  <Meta
                    avatar={<Avatar icon={<UserOutlined />} />}
                    title="Fundamentals Of Calculus"
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
            </Row>
          </Col>
        </Row>
      </Content>
      <Footer
          style={{
            textAlign: "center",
          }}
        >
          Kibali ©2023 Created by Kibali IT Team
        </Footer>
    </Layout>
  );
};

LandingPage.propTypes = {};

export default LandingPage;
