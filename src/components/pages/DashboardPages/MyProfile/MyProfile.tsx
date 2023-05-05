import React from "react";
import PropTypes from "prop-types";
import { Row, Col, Card } from "antd";

const MyProfile = (props: any) => {
  return (
    <Row justify="center" style={{minHeight:"91vh"}}>
      <Col xs={20} sm={20} md={16} lg={16}>
        <Card title="Card title" bordered={false}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </Col>
    </Row>
  );
};

MyProfile.propTypes = {};

export default MyProfile;
