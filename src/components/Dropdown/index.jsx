import React from "react";

const Dropdown = ({
  dropdownHeader,
  dropdownListItems,
  isOpened,
  dropdownIsOpenHandle,
  selectCityHandle,
  additionalStyle
}) => (
  <div className="drop-container">
    <div
      onClick={dropdownIsOpenHandle}
      className="input input--m dropdown-head"
      type="text"
    >
      <span className="dropdown-head__text">{dropdownHeader}</span>
      <i className="fas fa-chevron-circle-down dropdown-head__arrow"></i>
    </div>
    <div className={`dropdown ${isOpened && `dropdown-open`} ${additionalStyle}`}>
      <ul className="dropdown__list">
        {dropdownListItems.map((item, index) => (
          <li
            onClick={selectCityHandle}
            key={index}
            className="dropdown__list__item"
          >
            <a className="dropdown__list__item__link">{item}</a>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default Dropdown;

Dropdown.defaultProps = {
  additionalStyle: ""
};
