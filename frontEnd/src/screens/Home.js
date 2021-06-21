import React from "react";
import { Row, Col } from "react-bootstrap";
import GroupsRT from "./GroupsRT";
import GroupsRTC from "./GroupsRTC";
import MembersRT from "./MembersRT";
import MembersRTC from "./MembersRTC";

const Home = () => {
  return (
    <>
      <div className="py-3">
        <Row>
          <Col md={6}>
            <GroupsRT />
          </Col>
          <Col md={6}>
            <MembersRT />
          </Col>
        </Row>
      </div>
      {/* <div className="py-3">
        <Row>
          <Col md={6}>
            <GroupsRTC />
          </Col>
          <Col md={6}>
            <MembersRTC />
          </Col>
        </Row>
      </div> */}
    </>
  );
};

export default Home;
