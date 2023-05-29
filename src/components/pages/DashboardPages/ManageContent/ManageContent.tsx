import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  AndroidOutlined,
  AppleOutlined,
  UserOutlined,
  LockOutlined,
  PlusOutlined,
  LoginOutlined,
  PushpinOutlined,
  SettingOutlined,
  EllipsisOutlined,
  EditOutlined,
  PlayCircleOutlined,
} from "@ant-design/icons";
import {
  Tabs,
  Row,
  Col,
  Form,
  Input,
  Button,
  Select,
  Upload,
  Typography,
  Card,
  Avatar,
  notification,
  List,
} from "antd";
import type { TabsProps } from "antd";
import { Link } from "react-router-dom";
import Explore from "../Explore/Explore";
import {
  useGetInstructorInfoQuery,
  useCreateInstructorVideoMutation,
  useGetInstructorVideosQuery,
  useCreateInstructorCoursesMutation,
  useCreateQuestionMutation,
  useGetQuestionQuery,
  useCreateQuizMutation,
  useGetInstructorQuizesQuery,
} from "../../../../features/instructors/instructorsApiSlice";
import {
  useCreateVideoMutation,
  useGetVideoCategoriesQuery,
  useGetVideosQuery,
} from "../../../../features/videos/videosApiSlice";
import {
  useGetCoursesCategoriesQuery,
  useGetCoursesLevelsQuery,
  useGetCoursesTypesQuery,
} from "../../../../features/courses/coursesApiSlice";
import { useGetQuizeLevelQuery } from "../../../../features/quizes/quizesApiSlice";
import videoImg from "../../../../assets/images/video.svg";
import type { SelectProps } from "antd";
import VideojsPlayer from "../../../VideojsPlayer/VideojsPlayer";
import videojs from "video.js";

const onChange = (key: string) => {
  console.log(key);
};

const { Title, Text } = Typography;
const { Meta } = Card;

const { TextArea } = Input;

const validateMessages = {
  required: "Your ${label} is required!",
  types: {
    email: "Your ${label} is not a valid email!",
  },
};

const ManageContent = (props: any) => {
  const [selectedFile, setSelectedFile] = useState<any>("");
  const { data: instructorData } = useGetInstructorInfoQuery(1);
  const { data: categoryData } = useGetVideoCategoriesQuery(1);
  const { data: videosList } = useGetInstructorVideosQuery(1);
  const { data: categoryList } = useGetCoursesCategoriesQuery(1);
  const { data: levelList } = useGetCoursesLevelsQuery(1);
  const { data: quizLevelList } = useGetQuizeLevelQuery(1);
  const { data: typeList } = useGetCoursesTypesQuery(1);
  const { data: questionList } = useGetQuestionQuery(1);
  const { data: instructorQuiz } = useGetInstructorQuizesQuery(1);
  const [form] = Form.useForm();
  const [form2] = Form.useForm();
  const [form3] = Form.useForm();
  const [form4] = Form.useForm();
  const [video, { isLoading }] = useCreateInstructorVideoMutation();
  const [courses, { isLoading: coursesLoading }] =
    useCreateInstructorCoursesMutation();
  const [questions, { isLoading: questionsLoading }] =
    useCreateQuestionMutation();
  const [quiz, { isLoading: quizLoading }] = useCreateQuizMutation();
  const playerRef = React.useRef<any>(null);
  const datass = videosList;
  const [videoUrl, setVideoUrl] = useState<any>("");
  const [videoTitle, setVideoTitle] = useState<any>("");
  const [videoFileExtension, setVideoFileExtension] = useState<any>("");

  console.log(instructorQuiz);

  const instructorQuizes: SelectProps["options"] = [];

  for (let i = 0; i < instructorQuiz?.length; i++) {
    instructorQuizes.push({
      value: instructorQuiz[i]?.id,
      label: instructorQuiz[i]?.title,
    });
  }

  const question: SelectProps["options"] = [];

  for (let i = 0; i < questionList?.length; i++) {
    question.push({
      value: questionList[i]?.id,
      label: questionList[i]?.question_text,
    });
  }

  const options: SelectProps["options"] = [];

  for (let i = 0; i < categoryList?.length; i++) {
    options.push({
      value: categoryList[i]?.id,
      label: categoryList[i]?.name,
    });
  }

  const videos: SelectProps["options"] = [];

  for (let i = 0; i < videosList?.length; i++) {
    videos.push({
      value: videosList[i]?.id,
      label: videosList[i]?.title,
    });
  }

  console.log(levelList);

  const levels: SelectProps["options"] = [];

  for (let i = 0; i < levelList?.length; i++) {
    levels.push({
      value: levelList[i]?.id,
      label: levelList[i]?.name,
    });
  }

  console.log(quizLevelList);

  const quizlevels: SelectProps["options"] = [];

  for (let i = 0; i < quizLevelList?.length; i++) {
    quizlevels.push({
      value: quizLevelList[i]?.id,
      label: quizLevelList[i]?.name,
    });
  }

  const types: SelectProps["options"] = [];

  for (let i = 0; i < typeList?.length; i++) {
    types.push({
      value: typeList[i]?.id,
      label: typeList[i]?.name,
    });
  }

  console.log(videosList);

  let noficationMsg: String;

  console.log(instructorData);

  const changeHandler = (event: any) => {
    setSelectedFile(event.target.files[0]);
    console.log(event.target.files[0]);
  };

  const openNotificationSuccess = () => {
    notification.success({
      message: "Good News!",
      description: `${noficationMsg}`,
      onClick: () => {
        console.log("Notification Clicked!");
      },
      duration: 6.5,
    });
  };

  const openNotification = () => {
    notification.error({
      message: "Ooops, something went wrong!",
      onClick: () => {
        console.log("Notification Clicked!");
      },
    });
  };

  const videoJsOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: `https://d2de5vvhbdytdl.cloudfront.net/videos/${videoUrl}.${videoFileExtension}`,
        type: "video/mp4",
      },
    ],
  };

  const handlePlayerReady = (player: any) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on("waiting", () => {
      videojs.log("player is waiting");
    });

    player.on("dispose", () => {
      videojs.log("player will dispose");
    });
  };

  const onFinish2 = async (values: any) => {
    console.log("Received values of form: ", values);

    const data = {
      title: values.title,
      description: values.description,
      course_category: values.category,
      course_level: values.level,
      course_type: values.types,
      instructor: instructorData[0]?.id,
      videos: values.video,
    };
    //data.append("video_file_name", "thename");
    //data.append("video_file_path", "video/mp4");

    try {
      const res = await courses(data).unwrap();
      console.log(res);
      noficationMsg =
        "Your course has been uploaded successfully, we will approve it shortly";
      openNotificationSuccess();
      form2.resetFields();
    } catch (error: any) {
      console.log(error);
      openNotification();
    }
  };

  const onFinish = async (values: any) => {
    console.log("Received values of form: ", values);

    const data = new FormData();
    data.append("title", values.title);
    data.append("description", values.description);
    data.append("video", selectedFile);
    data.append("quiz", values.quiz);
    data.append("instructor", instructorData[0]?.id);

    try {
      const res = await video(data).unwrap();
      console.log(res);
      noficationMsg =
        "Your video has been uploaded successfully, we will approve it shortly";
      openNotificationSuccess();
      form.resetFields();
    } catch (error: any) {
      console.log(error);
      openNotification();
    }
  };

  const onFinish3 = async (values: any) => {
    console.log("Received values of form: ", values);

    const data = {
      question_text: values.question_text,
      possible_answers: [
        `${values.first_choice}`,
        `${values.second_choice}`,
        `${values.third_choice}`,
        `${values.fourth_choice}`,
      ],
      correct_answer: values.correct_answer,
      instructor: instructorData[0]?.id,
    };

    console.log(data);

    try {
      const res = await questions(data).unwrap();
      console.log(res);
      noficationMsg = "Your question has been uploaded successfully";
      openNotificationSuccess();
      form3.resetFields();
    } catch (error: any) {
      console.log(error);
      openNotification();
    }
  };

  const onFinish4 = async (values: any) => {
    console.log("Received values of form: ", values);

    const data = {
      title: values.title,
      description: values.description,
      quiz_level: values.level,
      instructor: instructorData[0]?.id,
      questions: values.questionlist,
    };

    console.log(data);

    try {
      const res = await quiz(data).unwrap();
      console.log(res);
      noficationMsg = "Your quiz has been uploaded successfully";
      openNotificationSuccess();
      form4.resetFields();
    } catch (error: any) {
      console.log(error);
      openNotification();
    }
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: `Post Video`,
      children: (
        <>
          <Row justify="center" style={{ height: "100vh" }}>
            <Col xs={24} sm={24} md={16} lg={16}>
              <Title level={4} style={{ color: "#2b243f" }}>
                <PushpinOutlined />
                &nbsp; Get Your Content Out There!
              </Title>
              <Card bordered={false}>
                <Form
                  form={form}
                  name="normal_login"
                  className="login-form"
                  onFinish={onFinish}
                  validateMessages={validateMessages}
                >
                  <Form.Item
                    name="title"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input placeholder="Video Title" />
                  </Form.Item>

                  <Form.Item
                    name="description"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <TextArea
                      rows={4}
                      placeholder="Video description goes here..."
                    />
                  </Form.Item>

                  <Form.Item name="video">
                    Your Video File:
                    <small style={{ color: "red" }}>Upload limit is 20MB</small>
                    <input type="file" onChange={changeHandler} />
                    {/* <Upload action="/upload.do" listType="picture-card">
                  <div>
                    <PlusOutlined />
                    <div style={{ marginTop: 8 }}>Upload</div>
                  </div>
                </Upload> */}
                  </Form.Item>
                  <Form.Item name="quiz">
                    <Select
                      placeholder="Choose Quiz"
                      options={instructorQuizes}
                    />
                  </Form.Item>
                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      block
                      style={{ backgroundColor: "#0a0050" }}
                      loading={isLoading}
                    >
                      Post Video
                    </Button>
                  </Form.Item>
                </Form>
              </Card>
            </Col>
          </Row>
        </>
      ),
    },
    {
      key: "2",
      label: `Publish Course`,
      children: (
        <>
          <Row justify="center" style={{ height: "100vh" }}>
            <Col xs={24} sm={24} md={16} lg={16}>
              <Title level={4} style={{ color: "#2b243f" }}>
                <PushpinOutlined />
                &nbsp; Get Your Content Out There!
              </Title>
              <Card bordered={false}>
                <Form
                  form={form2}
                  name="normal_login"
                  className="login-form"
                  onFinish={onFinish2}
                  validateMessages={validateMessages}
                >
                  <Form.Item
                    name="title"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input placeholder="Course Title" />
                  </Form.Item>
                  {/* <Form.Item
                name="category"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Select
                  placeholder="Topic Category"
                  options={[
                    { value: "MATHEMATICS", label: "MATHEMATICS" },
                    { value: "ENGLISH", label: "ENGLISH" },
                    { value: "CHEMISTRY", label: "CHEMISTRY" },
                  ]}
                />
              </Form.Item> */}
                  {/* <Form.Item
                name="category"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Select
                  placeholder="Choose Form"
                  options={[
                    { value: "FORM 1", label: "FORM 1" },
                    { value: "FORM 2", label: "FORM 2" },
                    { value: "FORM 3", label: "FORM 3" },
                    { value: "FORM 4", label: "FORM 4" },
                  ]}
                />
              </Form.Item> */}
                  <Form.Item
                    name="description"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <TextArea
                      rows={4}
                      placeholder="Course description goes here..."
                    />
                  </Form.Item>
                  <Form.Item
                    name="level"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Select
                      placeholder="Choose Course Level"
                      options={levels}
                    />
                  </Form.Item>
                  <Form.Item
                    name="types"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Select placeholder="Choose Course Type" options={types} />
                  </Form.Item>
                  <Form.Item
                    name="category"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Select
                      placeholder="Choose Video Category"
                      options={options}
                    />
                  </Form.Item>
                  <Form.Item
                    name="video"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Select
                      placeholder="Choose Video"
                      mode="multiple"
                      options={videos}
                    />
                  </Form.Item>
                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      block
                      style={{ backgroundColor: "#0a0050" }}
                      loading={coursesLoading}
                    >
                      Publish Course
                    </Button>
                  </Form.Item>
                </Form>
              </Card>
            </Col>
          </Row>
        </>
      ),
    },
    // {
    //   key: "3",
    //   label: `Your Content`,
    //   children: (
    //     <Row
    //       justify="center"
    //       style={{ minHeight: "100vh" }}
    //       className="gap_container"
    //     >
    //       {videosList?.map((video: any) => (
    //         <Col xs={24} sm={24} md={7} lg={7} key={video?.id}>
    //           <Link to={`/panel/video-detail/${video?.id}`}>
    //             <Card
    //               hoverable
    //               cover={
    //                 <img
    //                   alt="example"
    //                   style={{ padding: "25px" }}
    //                   src={videoImg}
    //                 />
    //               }
    //               actions={[
    //                 <SettingOutlined key="setting" />,
    //                 <EditOutlined key="edit" />,
    //                 <EllipsisOutlined key="ellipsis" />,
    //               ]}
    //             >
    //               <Meta
    //                 avatar={<Avatar icon={<UserOutlined />} />}
    //                 title={video?.title}
    //                 description={
    //                   <>
    //                     <Text type="secondary">Jim Gordon</Text>
    //                     <Text type="secondary" style={{ float: "right" }}>
    //                       Free
    //                     </Text>
    //                   </>
    //                 }
    //               />
    //             </Card>
    //           </Link>
    //         </Col>
    //       ))}
    //     </Row>
    //   ),
    // },
    {
      key: "3",
      label: `Your Video Content`,
      children: (
        <>
          <Row
            justify="center"
            style={{ padding: "10px", gap: "1rem", minHeight: "91vh" }}
          >
            {videoTitle == "" && videoUrl == "" && videoFileExtension === "" ? (
              <Col xs={24} sm={24} md={15} lg={15}>
                <div
                  style={{
                    background: "black",
                    height: "350px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "10px"
                  }}
                >
                  <div>
                    <PlayCircleOutlined
                      style={{
                        color: "#fd530c",
                        fontSize: "200px",
                        textAlign: "center",
                      }}
                    />
                    <h3 style={{ color: "white", textAlign: "center" }}>
                      Select Video To Play From List
                    </h3>
                  </div>
                </div>
              </Col>
            ) : (
              <Col xs={24} sm={24} md={15} lg={15}>
                <VideojsPlayer
                  options={videoJsOptions}
                  onReady={handlePlayerReady}
                />

                <div style={{ padding: "20px" }}>
                  <Text>{videoTitle}</Text>
                </div>
              </Col>
            )}

            <Col xs={24} sm={24} md={8} lg={8}>
              <div
                id="scrollableDiv"
                style={{
                  overflow: "auto",
                  padding: "0 16px",
                  border: "1px solid rgba(140, 140, 140, 0.35)",
                  borderRadius: "10px",
                  height: "71vh",
                }}
              >
                <List
                  header={
                    <div>
                      {" "}
                      <Title level={3} style={{ margin: 0, padding: 0 }}>
                        Your Videos
                      </Title>
                    </div>
                  }
                  itemLayout="horizontal"
                  dataSource={datass}
                  renderItem={(item: any, index) => (
                    <List.Item
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        setVideoUrl(item?.slug);
                        setVideoTitle(item?.title);
                        setVideoFileExtension(item?.video_file_extension);
                      }}
                    >
                      <List.Item.Meta
                        title={item.title}
                        description={item.description}
                      />
                    </List.Item>
                  )}
                />
              </div>
            </Col>
          </Row>
        </>
      ),
    },
    {
      key: "4",
      label: `Add Question`,
      children: (
        <>
          <Row justify="center" style={{ height: "100vh" }}>
            <Col xs={24} sm={24} md={16} lg={16}>
              <Title level={4} style={{ color: "#2b243f" }}>
                <PushpinOutlined />
                &nbsp; Add questions to your question bank here!
              </Title>
              <Card bordered={false}>
                <Form
                  form={form3}
                  name="normal_login"
                  className="login-form"
                  onFinish={onFinish3}
                  validateMessages={validateMessages}
                >
                  <Form.Item
                    label="Whats Your Question?"
                    name="question_text"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input placeholder="Whats Your Question?" />
                  </Form.Item>
                  <Form.Item
                    name="first_choice"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input placeholder="Choice A" />
                  </Form.Item>
                  <Form.Item
                    name="second_choice"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input placeholder="Choice B" />
                  </Form.Item>
                  <Form.Item
                    name="third_choice"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input placeholder="Choice C" />
                  </Form.Item>
                  <Form.Item
                    name="fourth_choice"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input placeholder="Choice D" />
                  </Form.Item>
                  <Form.Item
                    label="What is the correct answer from the choices given?"
                    name="correct_answer"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input placeholder="What is the correct answer from the choices given?" />
                  </Form.Item>
                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      block
                      style={{ backgroundColor: "#0a0050" }}
                      loading={questionsLoading}
                    >
                      Add Question
                    </Button>
                  </Form.Item>
                </Form>
              </Card>
            </Col>
          </Row>
        </>
      ),
    },
    {
      key: "5",
      label: `Publish Quiz`,
      children: (
        <>
          <Row justify="center" style={{ height: "100vh" }}>
            <Col xs={24} sm={24} md={16} lg={16}>
              <Title level={4} style={{ color: "#2b243f" }}>
                <PushpinOutlined />
                &nbsp; Set Up Your Quiz!
              </Title>
              <Card bordered={false}>
                <Form
                  form={form4}
                  name="normal_login"
                  className="login-form"
                  onFinish={onFinish4}
                  validateMessages={validateMessages}
                >
                  <Form.Item
                    name="title"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input placeholder="Quiz Title" />
                  </Form.Item>
                  <Form.Item
                    name="description"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <TextArea
                      rows={4}
                      placeholder="Quiz description goes here..."
                    />
                  </Form.Item>
                  <Form.Item
                    name="level"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Select
                      placeholder="Choose Quiz Level"
                      options={quizlevels}
                    />
                  </Form.Item>
                  <Form.Item
                    name="questionlist"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Select
                      placeholder="Choose Questions"
                      mode="multiple"
                      options={question}
                    />
                  </Form.Item>
                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      block
                      style={{ backgroundColor: "#0a0050" }}
                      loading={quizLoading}
                    >
                      Publish Quiz
                    </Button>
                  </Form.Item>
                </Form>
              </Card>
            </Col>
          </Row>
        </>
      ),
    },
  ];

  return (
    <Row justify="center" style={{ height: "100%" }}>
      <Col xs={20} sm={20} md={20} lg={20}>
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      </Col>
    </Row>
  );
};

ManageContent.propTypes = {};

export default ManageContent;
