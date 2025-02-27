import React from "react";
import Emoji from '.';
export default {
  title: "UI 组件/Emoji",
  componet: Emoji
};
export const Default = () => (<div>
  <Emoji label="smile">😄</Emoji>
  <Emoji label="todo">✅</Emoji>
  <Emoji label="clock">🕔</Emoji>
</div>);
