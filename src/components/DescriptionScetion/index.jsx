import React from "react";

{
  /* 
        <DescriptionSection
          titleClassName="about-us__about-us-container__right-contant-container__right-header"
          title="our companies"
          textClassName="about-us__about-us-container__right-contant-container__right-body"
          text=" It is easy to find it on the street."
        /> */
}
const DescriptionSection = ({ titleClassName, textClassName, title, text }) => {
  return (
    <React.Fragment>
      <h2 className={titleClassName}>{title}</h2>
      <div className={textClassName}>{text}</div>
    </React.Fragment>
  );
};
export default DescriptionSection;
