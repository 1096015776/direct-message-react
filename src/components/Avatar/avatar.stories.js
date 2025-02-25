import React from "react";
import face from "../../assets/images/face-female-1.jpg"
import Avatar from '.';
export default {
  title: "UI组件/Avatar",
  componet: Avatar
};
export const Default = () => {
  return (
    <div className="row-elements">
      <Avatar src={face} size="48px" />
      <Avatar src={face} size="56px" />
      <Avatar src={face} size="64px" />
      <Avatar src={face} size="72px" />
    </div>
  )
};
