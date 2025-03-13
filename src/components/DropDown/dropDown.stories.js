import React from "react";
import DropDown from '.';
import { ReactComponent as optionsIcon } from "@/assets/icons/options.svg";
import Icon from "../Icon";
import { DropDownItem } from "./style";
import Paragraph from "../Paragraph";
import Seperator from "../Seperator";
export default {
  title: "UI 组件/DropDown",
  componet: DropDown
};

const content = (
  <>
    <DropDownItem><Paragraph>个人资料</Paragraph></DropDownItem>
    <DropDownItem><Paragraph>关闭会话</Paragraph></DropDownItem>
    <Seperator></Seperator>
    <DropDownItem><Paragraph type='danger'>屏蔽此人</Paragraph></DropDownItem>
  </>
);

export const Default = () => (
  <div style={{ display: "flex", justifyContent: "space-between", width: "50%" }}>
    <Paragraph>点击右侧按钮</Paragraph>
    <DropDown conent={content} align="right">
      <Icon icon={optionsIcon} width={24} height={24} opacity={0.3}></Icon>
    </ DropDown>
  </div>
);
