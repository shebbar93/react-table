import React, { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import MembersRT from "./MembersRT";

const ControlledTabs = () => {
  const [key, setKey] = useState("members");
  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="members" title="Members">
        <MembersRT />
      </Tab>
      <Tab eventKey="group_info" title="Group Info">
        
      </Tab>
    </Tabs>
  );
};

export default ControlledTabs;
