import React from "react";
import VoiceMessage from '.';
export default {
  title: "UI 组件/VoiceMessage",
  componet: VoiceMessage
};
export const Default = () => <VoiceMessage time={"1:13"}></ VoiceMessage>;
export const Mine = () => <VoiceMessage time={"1:13"} type={'mine'}></ VoiceMessage>;
