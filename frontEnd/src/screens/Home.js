import React from "react";
import { Row, Col } from "react-bootstrap";
import GroupsRT from "./GroupsRT";
import MembersRT from "./MembersRT";

const Home = () => {
  return (
    <div className='py-3'>
      <Row>
        <Col md={6}>
          {/* <GroupsRT /> */}
        </Col>
        <Col md={6}>
          {/* <MembersRT /> */}
        </Col>
      </Row>
    </div>
  );
};

export default Home;
