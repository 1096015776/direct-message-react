import React from "react";
import Popover from '.';
import Button from "../Button";
export default {
  title: "UI 组件/Popover",
  componet: Popover
};
export const Default = () => (
  <div style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "50vh",

  }}>
    <Popover content="hello" >
      <Button shape="rect">点我</Button>
    </Popover>
  </div >
);
export const Offset = () => (
  <div style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "50vh",

  }}>
    <Popover content="hello" offset={{ x: "-25%" }}>
      <Button shape="rect">点我</Button>
    </Popover>
  </div >
);
