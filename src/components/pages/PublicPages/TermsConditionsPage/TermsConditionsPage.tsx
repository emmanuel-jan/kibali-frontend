import React from "react";
import PropTypes from "prop-types";
import { Col, Radio, Row, Space, Tabs, Typography, Anchor, Layout } from "antd";
import type { TabsProps } from "antd";
import { DingtalkOutlined } from "@ant-design/icons";

const { Header, Content } = Layout;
const { Title, Text, Paragraph } = Typography;

const TermsConditionsPage = (props: any) => {
  const items: TabsProps["items"] = [
    {
      label: `Student`,
      key: "student",
      children: (
        <>
          <Row justify="center">
            <Col xs={24} sm={24} md={20} lg={20}>
              <Title type="secondary" level={2}>
                Students Terms & Conditions
              </Title>
              <Title level={3}>Definations</Title>
              <ul>
                <li>
                  <Paragraph>
                    &quot;Platform&quot; refers to the global online learning
                    platform, including any associated websites, mobile
                    applications, and other services offered by the owners and
                    operators of the Platform. All online learning platform,
                    including any associated websites, mobile applications, and
                    other services offered by the owners and operators of the
                    Platform.
                  </Paragraph>
                </li>
                <li>
                  <Paragraph>
                    &quot;Content&quot; refers to any materials, information,
                    data, text, graphics, images, videos, or other content made
                    available on the Platform.
                  </Paragraph>
                </li>
                <li>
                  <Paragraph>
                    &quot;User&quot; refers to any individual who accesses or
                    uses the Platform, including instructors, students, and any
                    other users.
                  </Paragraph>
                </li>
                <li>
                  <Paragraph>
                    &quot;Instructor&quot; refers to any User who creates and
                    publishes Content on the Platform.
                  </Paragraph>
                </li>
                <li>
                  <Paragraph>
                    &quot;Student&quot; refers to any User who accesses and
                    consumes Content on the Platform.
                  </Paragraph>
                </li>
                <li>
                  <Paragraph>
                    &quot;Third-party&quot; refers to any individual or entity
                    that is not affiliated with the Platform&#39;s owners and
                    operators.
                  </Paragraph>
                </li>
              </ul>
              <Paragraph>
                Acceptance of Terms By accessing or using the Platform, you
                agree to be bound by these Terms, and any additional terms and
                conditions that may apply to specific Content or services
                provided on the Platform. If you do not agree to these Terms,
                you may not access or use the Platform.
              </Paragraph>
              <Paragraph>
                Use of the Platform The Platform is intended for personal,
                non-commercial use only. You may use the Platform solely for
                your own educational purposes, subject to these Terms and any
                additional terms and conditions that may apply to specific
                Content or services provided on the Platform. You may not use
                the Platform for any illegal or unauthorized purpose, including
                but not limited to:
                <ul>
                  <li>Violating any applicable laws or regulations</li>
                  <li>
                    Interfering with or disrupting the operation of the Platform
                    or any servers or networks connected to the Platform
                  </li>
                  <li>
                    Impersonating another person or entity, or falsely stating
                    or misrepresenting your affiliation with any person or
                    entity
                  </li>
                  <li>
                    Collecting or harvesting any personally identifiable
                    information, including account names or email addresses,
                    from other Users
                  </li>
                  <li>
                    Uploading, posting, transmitting, or otherwise making
                    available any Content that is unlawful, harmful,
                    threatening, abusive, harassing, defamatory, vulgar,
                    obscene, invasive of another&#39;s privacy, hateful, or
                    racially, ethnically or otherwise objectionable
                  </li>
                  <li>
                    Infringing any intellectual property or other proprietary
                    rights of any party
                  </li>
                  <li>
                    Uploading, posting, transmitting, or otherwise making
                    available any unsolicited or unauthorized advertising,
                    promotional materials, &quot;junk mail,&quot;
                    &quot;spam,&quot; &quot;chain letters,&quot; &quot;pyramid
                    schemes,&quot; or any other form of solicitation
                  </li>
                </ul>
              </Paragraph>
              <Paragraph>
                User Accounts To access certain features of the Platform, you
                required to create a user account. You agree to provide accurate
                and complete information when creating your account, and to keep
                your account information up-to-date at all times. You are solely
                responsible for maintaining the confidentiality of your account
                password, and for all activities that occur under your account.
                You agree to immediately notify the Platform&#39;s owners and
                operators of any unauthorized use of your account or any other
                breach of security.
              </Paragraph>
              <Paragraph>
                Content Ownership and Use Instructors retain all ownership
                rights to the Content they create and publish on the Platform.
                By publishing Content on the Platform, Instructors grant the
                Platform&#39;s owners and operators a non-exclusive,
                transferable, sublicensable, royalty-free, worldwide license to
                use, copy, modify, create derivative works based on, distribute,
                publicly display, publicly perform, and otherwise exploit in any
                manner such Content in all formats and distribution channels now
                known or hereafter devised (including in connection with the
                Platform and the Platform&#39;s business and on third-party
                sites and services), without further notice to or consent from
                the Instructor, and without the requirement of payment to the
                Instructor or any other person or entity.
              </Paragraph>
              <Paragraph>
                Content Ownership and Use (continued) Students may only access
                and consume Content on the Platform for their own personal,
                non-commercial use. Students may not copy, reproduce,
                distribute, transmit, or otherwise exploit any Content for any
                commercial purpose without the express written consent of the
                Instructor who created the Content. The Platform&#39;s owners
                and operators reserve the right to remove any Content from the
                Platform at any time, for any reason or no reason, without
                notice to the Instructor who created the Content or the Student
                who consumed the Content.
              </Paragraph>
              <Paragraph>
                Payment and Refunds Instructors may set fees for their Content
                on the Platform. Students must pay any applicable fees before
                accessing the Content. The Platform&#39;s owners and operators
                will process payments through a third-party payment processor.
                The Platform&#39;s owners and operators are not responsible for
                any fees charged by the payment processor.|? If a Student is not
                satisfied with the Content they have purchased, they may request
                a refund within a reasonable time frame(5 working days from date
                of payment). Refund policies may vary by Instructor and may be
                subject to additional terms and conditions.
              </Paragraph>
              <Paragraph>
                Intellectual Property The Platform and all Content made
                available on the Platform are the property of the Platform&#39;s
                owners and operators or their respective licensors, and are
                protected by copyright, trademark, patent, trade secret, and
                other intellectual property laws. You may not reproduce,
                distribute, modify, create derivative works of, publicly
                display, publicly perform, republish, download, store, or
                transmit any Content or portion of the Platform, except as
                expressly permitted by these Terms or by the Instructor who
                created the Content.
              </Paragraph>
              <Paragraph>
                Third-party Links and Services The Platform may contain links to
                third-party websites or services. The Platform&#39;s owners and
                operators are not responsible for the content, accuracy, or
                opinions expressed on any third-party website or service. The
                inclusion of any link does not imply endorsement by the
                Platform&#39;s owners and operators. You acknowledge and agree
                that the Platform&#39;s owners and operators shall not be
                responsible or liable, directly or indirectly, for any damage or
                loss caused or alleged to be caused by or in connection with the
                use of or reliance on any such content, goods, or services
                available on or through any such third-party website or service.
              </Paragraph>
              <Paragraph>
                Disclaimer of Warranties The Platform and all Content made
                available on the Platform are provided on an &quot;as is&quot;
                and &quot;as available&quot; basis without warranty of any kind,
                either express or implied, including without limitation any
                warranty for information, services, uninterrupted access, or
                products provided through or in connection with the Platform,
                including without limitation the software licensed to the
                Platform&#39;s owners and operators and the results obtained
                through the Platform. The Platform&#39;s owners and operators do
                not warrant that the Platform or any Content, service, or
                feature of the Platform will be uninterrupted or error-free,
                that defects will be corrected, or that the Platform or the
                server(s) that make(s) the Platform available are free of
                viruses or other harmful components. You assume all
                responsibility and risk for your use of the Platform and your
                reliance on any Content made available on the Platform.
              </Paragraph>
              <Paragraph>
                Limitation of Liability In no event shall the Platform&#39;s
                owners and operators be liable for any direct, indirect,
                punitive, incidental, special, or consequential damages arising
                out of or in any way connected with the use of or inability to
                use the Platform or any Content made available on the Platform,
                whether based on contract, tort, strict liability, or any other
                legal theory, even if the Platform&#39;s owners and operators
                have been advised of the possibility of such damages. Some
                jurisdictions do not allow the exclusion or limitation of
                incidental or consequential damages, so the above limitation or
                exclusion may not apply to you.
              </Paragraph>
              <Paragraph>
                Indemnification You agree to indemnify, defend, and hold
                harmless the Platform&#39;s owners and operators and their
                affiliates, officers, directors, employees
              </Paragraph>
            </Col>
          </Row>
        </>
      ),
    },
    {
      label: `Teacher`,
      key: "teacher",
      children: (
        <>
          <Row justify="center">
            <Col xs={24} sm={24} md={20} lg={20}>
              <Title type="secondary" level={2}>
                Teachers Terms & Conditions
              </Title>
              <Title level={3}>Introduction</Title>
              <Paragraph>
                Welcome to Kibali , a platform designed for Teachers to access
                pre-recorded and live classes. By using the platform, you agree
                to be bound by the following terms and conditions
                (&quot;T&amp;Cs&quot;).
              </Paragraph>
              <Title level={3}>Use of the Platform</Title>
              <Paragraph>
                <ul>
                  <li>
                    Eligibility: To use the platform, you must be a registered
                    user and a Teacher.
                  </li>
                  <li>
                    Your Account: You are responsible for maintaining the
                    confidentiality of your account information, including your
                    username and password. You are also responsible for all
                    activities that occur under your account. You agree to
                    notify us immediately of any unauthorized use of your
                    account or any other breach of security.
                  </li>
                  <li>
                    Prohibited Activities: You may not use the platform for any
                    illegal or unauthorized purpose, nor may you, in the use of
                    the platform, violate any laws in your jurisdiction
                    (including but not limited to copyright laws).
                  </li>
                  <li>
                    Suspension or Termination: We reserve the right to suspend
                    or terminate your account at any time, without notice, for
                    any reason, including but not limited to a breach of these
                    T&amp;Cs.
                  </li>
                </ul>
              </Paragraph>
              <Title level={3}>Content</Title>
              <Paragraph>
                <ul>
                  <li>
                    User Content: You are solely responsible for all content you
                    upload, post, or otherwise transmit through the platform.
                    You warrant that you own or have the necessary rights to use
                    and authorize the use of such content.
                  </li>
                  <li>
                    Ownership: You acknowledge that we own all right, title, and
                    interest in and to the platform and its content, including
                    all intellectual property rights.
                  </li>
                  <li>
                    License: By submitting any content to the platform, you
                    grant us a non-exclusive, royalty-free, perpetual,
                    irrevocable, and fully sublicensable right to use,
                    reproduce, modify, adapt, publish, translate, create
                    derivative works from, distribute, and display such content
                    throughout the world in any media.
                  </li>
                  <li>
                    Prohibited Content: You may not upload, post, or otherwise
                    transmit any content that is obscene, defamatory, or
                    violates any third-party rights, including but not limited
                    to intellectual property rights.
                  </li>
                </ul>
              </Paragraph>
              <Title level={3}>Pre-Recorded and Live Classes</Title>
              <Paragraph>
                <ul>
                  <li>
                    Availability: We make no guarantee as to the availability of
                    pre-recorded or live classes on the platform. We reserve the
                    right to cancel or reschedule any pre-recorded or live class
                    at any time, without notice, for any reason.
                  </li>
                  <li>
                    Technical Requirements: You are responsible for ensuring
                    that you have the necessary technical requirements to access
                    pre-recorded and live classes on the platform.
                  </li>
                  <li>
                    Conduct: You agree to conduct yourself in a professional and
                    respectful manner during all pre- recorded and live classes
                    on the platform.
                  </li>
                </ul>
              </Paragraph>
              <Title level={3}>Fees and Payment</Title>
              <Paragraph>
                <ul>
                  <li>
                    Fees: We reserve the right to charge fees for certain
                    features of the platform, including but not limited to
                    pre-recorded and live classes.
                  </li>
                  <li>
                    Payment: All fees are payable in advance and are
                    non-refundable.
                  </li>
                  <li>
                    Taxes: You are responsible for all taxes associated with
                    your use of the platform.
                  </li>
                </ul>
              </Paragraph>
              <Title level={3}>Limitation of Liability</Title>
              <Paragraph>
                <ul>
                  <li>
                    Disclaimer of Warranties: The platform and its content are
                    provided on an &quot;as is&quot; and &quot;as
                    available&quot; basis, without warranty of any kind, either
                    express or implied, including but not limited to the implied
                    warranties of merchantability, fitness for a particular
                    purpose, and non- infringement.
                  </li>
                  <li>
                    Limitation of Liability: We shall not be liable for any
                    direct, indirect, incidental, special, or consequential
                    damages arising out of or in connection with the use or
                  </li>
                </ul>
              </Paragraph>
              <Title level={3}>Conduct and Rights</Title>
              <Paragraph>
                <ul>
                  <li>
                    Learner Conduct: We expect all learners to conduct
                    themselves in a professional and respectful manner while
                    using the platform, interacting with teachers and other
                    learners, and accessing pre-recorded and live classes. We
                    reserve the right to suspend or terminate the account of any
                    learner who violates this expectation or engages in any
                    behavior that is harmful to the platform&#39;s community. As
                    such we expect you to flag irregular learner
                    conduct/behavior
                  </li>
                  <li>
                    Learner Rights: We respect the rights of learners to access
                    quality education and expect teachers to provide educational
                    content that is accurate, relevant, and appropriate for the
                    intended audience.
                  </li>
                  <li>
                    Teacher Conduct: We expect all teachers to conduct
                    themselves in a professional and respectful manner while
                    using the platform, interacting with learners, and
                    delivering pre-recorded and live classes. Teachers are
                    responsible for creating a safe and inclusive learning
                    environment and should not engage in behavior that is
                    discriminatory, harassing, or harmful to learners or the
                    platform&#39;s community.
                  </li>
                  <li>
                    Teacher Rights: We respect the rights of teachers to own and
                    control the content they create and distribute on the
                    platform. Teachers retain all intellectual property rights
                    to their content and have the right to revoke access to
                    their content at any time.
                  </li>
                </ul>
              </Paragraph>
              <Title level={3}>Promotion and Recruitment</Title>
              <Paragraph>
                <ul>
                  <li>
                    Teacher Content: We reserve the right to use teacher
                    content, including pre-recorded and live classes, to promote
                    and recruit other teachers and learners to the platform. We
                    may use excerpts, screenshots, or other portions of teacher
                    content for this purpose, but will always attribute the
                    content to the original teacher.
                  </li>
                  <li>
                    Student Recruitment: We may also use teacher content and
                    learner testimonials to promote and recruit new learners to
                    the platform. We will always obtain consent from learners
                    before using their testimonials for this purpose.
                  </li>
                </ul>
              </Paragraph>
              <Title level={3}>General</Title>
              <Paragraph>
                <ul>
                  <li>
                    Modification: We reserve the right to modify these T&amp;Cs
                    at any time, without notice. It is your responsibility to
                    regularly review these T&amp;Cs to ensure that you are aware
                    of any changes.
                  </li>
                  <li>
                    Governing Law: These T&amp;Cs shall be governed by and
                    construed in accordance with the laws of [insert governing
                    jurisdiction]. Any dispute arising out of or in connection
                    with these T&amp;Cs shall be subject to the exclusive
                    jurisdiction of the courts of [insert governing
                    jurisdiction].
                  </li>
                  <li>
                    Severability: If any provision of these T&amp;Cs is found to
                    be invalid or unenforceable, the remaining provisions shall
                    remain in full force and effect.
                  </li>
                  <li>
                    Entire Agreement: These T&amp;Cs constitute the entire
                    agreement between you and us with respect to the use of the
                    platform and supersedes all prior or contemporaneous
                    agreements or understandings, whether oral or written
                  </li>
                </ul>
              </Paragraph>
            </Col>
          </Row>
        </>
      ),
    },
  ];
  return (
    <>
      <Layout style={{ minHeight: "100dvh" }}>
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
        <Tabs tabPosition="left" items={items} />
      </Layout>
    </>
  );
};

TermsConditionsPage.propTypes = {};

export default TermsConditionsPage;
