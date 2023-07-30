import React from "react";
import PropTypes from "prop-types";
import { Row, Col, Card, Divider } from "antd";
import { useGetUserInfoQuery } from "../../../../features/auth/authApiSlice";

interface DescriptionItemProps {
  title: string;
  content: React.ReactNode;
}

const DescriptionItem = ({ title, content }: DescriptionItemProps) => (
  <div className="site-description-item-profile-wrapper">
    <p className="site-description-item-profile-p-label">{title}:</p>
    {content}
  </div>
);

const MyProfile = (props: any) => {
  const { data: userInfo } = useGetUserInfoQuery(1);

  const date = new Date(userInfo?.last_login);

  const formattedDate = date.toLocaleString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  console.log(userInfo);
  return (
    <Row
      justify="center"
      style={{
        minHeight: "91vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Col
        xs={20}
        sm={20}
        md={16}
        lg={16}
        style={{ backgroundColor: "white", padding: "30px", borderRadius:"10px" }}
        className="box-shadow"
      >
        <b
          className="site-description-item-profile-p"
          style={{ marginBottom: 24 }}
        >
          User Profile
        </b>
        <p className="site-description-item-profile-p">Personal</p>
        <Row>
          <Col xs={22} sm={22} md={12} lg={12}>
            <DescriptionItem
              title="Full Name"
              content={`${userInfo?.first_name} ${userInfo?.last_name}`}
            />
          </Col>
          <Col xs={22} sm={22} md={12} lg={12}>
            <DescriptionItem title="Account" content={userInfo?.email} />
          </Col>
        </Row>
        <Row>
          <Col xs={22} sm={22} md={12} lg={12}>
            <DescriptionItem title="Country" content={userInfo?.country} />
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <DescriptionItem
              title="Last Login"
              content={formattedDate}
            />
          </Col>
        </Row>
        <Divider />
        <b className="site-description-item-profile-p">Roles</b>
        <Row>
          {userInfo.is_parent ? (
            <Col xs={22} sm={22} md={12} lg={12}>
              <DescriptionItem
                title="Parent"
                content={`${userInfo?.is_parent}`}
              />
            </Col>
          ) : null}
          {userInfo.is_instructor ? (
            <Col xs={22} sm={22} md={12} lg={12}>
              <DescriptionItem
                title="Instructor"
                content={`${userInfo?.is_instructor}`}
              />
            </Col>
          ) : null}
          {userInfo.is_staff ? (
            <Col xs={22} sm={22} md={12} lg={12}>
              <DescriptionItem
                title="Admin"
                content={`${userInfo?.is_staff}`}
              />
            </Col>
          ) : null}
          {userInfo.is_moderator ? (
            <Col xs={22} sm={22} md={12} lg={12}>
              <DescriptionItem
                title="Moderator"
                content={`${userInfo?.is_moderator}`}
              />
            </Col>
          ) : null}
          {userInfo.is_student ? (
            <Col xs={22} sm={22} md={12} lg={12}>
              <DescriptionItem
                title="Student"
                content={`${userInfo?.is_student}`}
              />
            </Col>
          ) : null}
        </Row>
        <Divider />
        <b className="site-description-item-profile-p">Contacts</b>
        <Row>
          <Col xs={22} sm={22} md={12} lg={12}>
            <DescriptionItem title="Email" content={userInfo?.email} />
          </Col>
          <Col xs={22} sm={22} md={12} lg={12}>
            <DescriptionItem
              title="Phone Number"
              content={userInfo?.phone_number}
            />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

MyProfile.propTypes = {};

export default MyProfile;
