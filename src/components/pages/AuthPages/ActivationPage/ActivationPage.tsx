import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Button, Empty, Result, Spin, notification } from "antd";
import { SmileOutlined } from "@ant-design/icons";
import { useParams, useNavigate } from "react-router-dom";
import { useActivateUserMutation } from "../../../../features/auth/registerUserApiSlice";

const ActivationPage = (props: any) => {
  const [activate, { isLoading }] = useActivateUserMutation();
  const { uid, token } = useParams();
  const navigate = useNavigate();
  let noficationMsg: String;

  const openNotification = () => {
    notification.error({
      message: "Ooops, something went wrong!",
      description: `${noficationMsg}`,
      onClick: () => {
        console.log("Notification Clicked!");
      },
    });
  };

  const activationData = {
    uid,
    token,
  };
  console.log(activationData);

  const onFinish = async (activationData: any) => {
    try {
      const result = await activate(activationData).unwrap();
      navigate("/login");
    } catch (error: any) {
      noficationMsg = `${error?.status} error - Contact system admin for more information`;
      openNotification();
    }
  };

  useEffect(() => {
    onFinish(activationData);
  }, []);

  return (
    <>
      <Result
        icon={<SmileOutlined style={{ color: "#0a0050" }} />}
        title="Hey again!, we are setting up your account just a moment.."
        extra={<Spin size="large" />}
      />
    </>
  );
};

ActivationPage.propTypes = {};

export default ActivationPage;
