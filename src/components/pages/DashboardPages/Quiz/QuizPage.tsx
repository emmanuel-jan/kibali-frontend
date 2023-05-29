import React from "react";
import PropTypes from "prop-types";
import { Col, List, Row } from "antd";

const QuizPage = (props: any) => {
    const data = [
        'Racing car sprays burning fuel into crowd.',
        'Japanese princess to wed commoner.',
        'Australian walks 100km after outback crash.',
        'Man charged over missing wedding girl.',
        'Los Angeles battles huge wildfires.',
      ];
  return (
    <Row justify="center" style={{minHeight: "91vh"}}>
      <Col xs={20} sm={20} md={14} lg={14}>
        <List
          size="small"
          header={<div>Header</div>}
          footer={<div>Footer</div>}
          bordered
          dataSource={data}
          renderItem={(item) => <List.Item>{item}</List.Item>}
        />
      </Col>
    </Row>
  );
};

QuizPage.propTypes = {};

export default QuizPage;
