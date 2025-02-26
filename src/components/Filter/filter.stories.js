import React from "react";
import Filter from '.';
import Button from "../Button";
import Option from "../Option";
import Icon from "../Icon";
import { ReactComponent as plusIcon } from "@/assets/icons/plus.svg";
import Select from "../Select";
export default {
  title: "UI 组件/Filter",
  componet: Filter
};
export const Default = () => (<>
  <Filter>
    <Filter.Filters label={"列表排序"}>
      <Select>
        <Option>最新消息优先</Option>
        <Option>在线好友优先</Option>
      </Select>
    </Filter.Filters>
    <Filter.Action label={"创建会话"}>
      <Button>
        <Icon icon={plusIcon} width={16} height={16}></Icon>
      </Button>
    </Filter.Action>
  </ Filter>
</>);
