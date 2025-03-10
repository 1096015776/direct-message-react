import React from "react";
import ContactCard from '.';
import contactData from "@/data/contact.js"
export default {
  title: "UI 组件/ContactCard",
  componet: ContactCard
};
export const Default = () => <ContactCard contact={contactData[0]}></ ContactCard>;
