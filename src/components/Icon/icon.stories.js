import React from "react";
import { ReactComponent as SmileIcon } from "../../assets/icons/smile.svg"
import Icon from '.';
export default {
  title: "UI组件/Icon",
  componet: Icon
};
export const Default = () => <Icon icon={SmileIcon} width={24} height={24} color={'red'}></ Icon>;
