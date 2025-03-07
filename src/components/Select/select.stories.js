import React from "react";
import Select from '.';
import Option from "../Option";
export default {
  title: "UI 组件/Input/Select",
  componet: Select
};

export const Default = () => (<Select>
  <Option>1</Option>
</ Select>);


export const SelectWithLabel = () => (<Select label={'城市'} type={'form'}>
  <Option>成都</Option>
  <Option>重庆</Option>
</ Select>);
