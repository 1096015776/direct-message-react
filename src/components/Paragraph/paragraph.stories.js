import React from "react";
import Paragraph from '.';
export default {
  title: "排版/Paragraph",
  componet: Paragraph
};
export const Default = () => (
  <>
    <Paragraph>默认</ Paragraph>
    <Paragraph>默认1234</ Paragraph>
    <Paragraph>这是一段很长的文本这是一段很长的文本这是一段很长的文本这是一段很长的文本这是一段很长的文本这是一段很长的文本这是一段很长的文本这是一段很长的文本这是一段很长的文本这是一段很长的文本这是一段很长的文本这是一段很长的文本这是一段很长的文本这是一段很长的文本这是一段很长的文本这是一段很长的文本这是一段很长的文本</ Paragraph>
    <Paragraph ellipsis>这是一段很长的文本这是一段很长的文本这是一段很长的文本这是一段很长的文本这是一段很长的文本这是一段很长的文本这是一段很长的文本这是一段很长的文本这是一段很长的文本这是一段很长的文本这是一段很长的文本这是一段很长的文本这是一段很长的文本这是一段很长的文本这是一段很长的文本这是一段很长的文本这是一段很长的文本</ Paragraph>
  </>
);
export const Bold = () => <Paragraph bold >默认</ Paragraph>;
export const Danger = () => <Paragraph type="danger">默认</ Paragraph>;
export const DangerBold = () => <Paragraph type="danger" bold >默认</ Paragraph>;
export const Large = () => <Paragraph size="xxlarge" >默认</ Paragraph>;
export const Secondary = () => <Paragraph type="secondary" >默认</ Paragraph>;
