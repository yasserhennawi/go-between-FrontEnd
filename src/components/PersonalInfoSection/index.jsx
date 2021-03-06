import React from "react";

import ImageCard from "../ImageCard";
import ProfileLabel from "../ProfileLabel";

const PersonalInfoCard = ({ email, userName, discription, imageUrl }) => {
  return (
    <React.Fragment>
      <ProfileLabel className="profileLabel" content="Personal Information" />
      <div className="infoContainer">
        <div className="infoContainer__content">
          <div className="infoContainer__content__left">
            <ImageCard
              className="infoContainer__content__left__image"
              imageUrl={imageUrl}
            ></ImageCard>

            <div className="infoContainer__content__left__data">
              <div>Email</div>
              <div>{email}</div>
            </div>
          </div>
          <div className="infoContainer__content__right">
            <div className="infoContainer__content__right__header">
              <div className="infoContainer__content__right__header__name">
                {userName}
              </div>
              <a
                className="infoContainer__content__right__header__edit icon"
                id="editIcon"
              >
                <i className="fas fa-pencil-alt"></i>
              </a>
            </div>
            <div className="infoContainer__content__right__discribtion">
              {discription}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PersonalInfoCard;
