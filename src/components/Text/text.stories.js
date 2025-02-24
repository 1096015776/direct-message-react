import React from "react";
import Text from '.';
export default {
  title: "Text",
  componet: Text
};
export const Default = () => (
  <>
    <Text>默认</Text>
    <Text>默认</Text>
    <Text>默认</Text>
  </>
);
export const Bold = () => <Text bold >默认</ Text>;
export const Danger = () => <Text type="danger">默认</ Text>;
export const DangerBold = () => <Text type="danger" bold >默认</ Text>;
export const Large = () => <Text size="xxlarge" >默认</ Text>;
export const Secondary = () => <Text type="secondary" >默认</ Text>;
