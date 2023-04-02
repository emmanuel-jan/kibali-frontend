import React, { useEffect, useState } from "react";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  DingtalkOutlined,
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  HomeOutlined,
  LikeOutlined,
  MessageOutlined,
  StarOutlined,
} from "@ant-design/icons";
import { List, Row, Col, Typography, Card, Avatar, Space, message } from "antd";
import { Link } from "react-router-dom";
import VirtualList from "rc-virtual-list";

interface UserItem {
  email: string;
  gender: string;
  name: {
    first: string;
    last: string;
    title: string;
  };
  nat: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
}

const fakeDataUrl =
  "https://randomuser.me/api/?results=20&inc=name,gender,email,nat,picture&noinfo";
const ContainerHeight = 400;

const { Title, Text } = Typography;
const { Meta } = Card;


const VideoDetail = (props: any) => {

  return (
    <>
      <Row justify="center" style={{ padding: "10px", gap:"1rem"}}>
        <Col xs={20} sm={20} md={15} lg={15}>
         
        </Col>
        <Col xs={20} sm={20} md={8} lg={8}>
     
        </Col>
      </Row>
    </>
  );
};

VideoDetail.propTypes = {};

export default VideoDetail;
