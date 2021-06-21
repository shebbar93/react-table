import React from "react";
import { Row, Col } from "react-bootstrap";
import ControlledTabs from "./ControlledTabs";
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
            <GroupsRT title="Group Data"/>
          </Col>
          <Col md={6}>
            <ControlledTabs />
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
