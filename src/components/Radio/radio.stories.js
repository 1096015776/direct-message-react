import React from "react";
import Radio from '.';
export default {
  title: "UI 组件/Input/Radio",
  componet: Radio
};
export const Default = () => <Radio>选项1</ Radio>;
export const Label = () => (
  <Radio.Group label="请选择">
    <Radio name="option">选项1</Radio>
    <Radio name="option">选项2</Radio>
    <Radio name="option">选项3</Radio>
  </Radio.Group>);
