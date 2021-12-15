import React from "react";
import "./SectionTitle.css";

const SectionTitle = ({ subtitle, children, color }) => {
  return (
    <div className={`section-title ${color}`}>
      <h5>{subtitle}</h5>
      <h1>{children}</h1>
    </div>
  );
};

export default SectionTitle;
