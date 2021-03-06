import React, { Component } from "react";
import RegisterPersonalInfoSection from "../../components/RegisterPersonalInfoSection";
class RegisterPersonalInfoPage extends Component {
  state = {
    newUserPersonalInfo: {
      accountType: "Brand/Cafe and Resturant",
      username: "",
      userImage: ""
    },
    usernameType: "text",
    usernamePlaceholder: "Name",
    dropdownIsOpen: false
  };

  onChange = event => {
    let newUserPersonalInfo = { ...this.state.newUserPersonalInfo };
    newUserPersonalInfo[event.target.name] = event.target.value;
    this.setState({ newUserPersonalInfo });
  };

  nextButtonHandle = event => console.log(this.state.newUserPersonalInfo);
  backButtonHandle = event => console.log("back");

  dropdownIsOpenHandle = event => {
    let dropdownIsOpen = this.state.dropdownIsOpen;
    dropdownIsOpen = !dropdownIsOpen;
    this.setState({ dropdownIsOpen });
  };

  selectAccountTypeHandle = event => {
    let newUserPersonalInfo = { ...this.state.newUserPersonalInfo };
    let { dropdownIsOpen, usernamePlaceholder } = this.state;
    newUserPersonalInfo.accountType = event.target.textContent;
    newUserPersonalInfo.accountType === "Brand"
      ? (usernamePlaceholder = "Brand Name")
      : (usernamePlaceholder = "Cafe and Resturant Name");
    dropdownIsOpen = !dropdownIsOpen;
    this.setState({ newUserPersonalInfo, dropdownIsOpen, usernamePlaceholder });
  };

  render() {
    const {
      state: {
        newUserPersonalInfo: { accountType, username, userImage },
        usernameType,
        usernamePlaceholder,
        dropdownIsOpen
      },
      onChange,
      backButtonHandle,
      nextButtonHandle,
      dropdownIsOpenHandle,
      selectAccountTypeHandle
    } = this;
    return (
      <RegisterPersonalInfoSection
        accountType={accountType}
        username={username}
        userImage={userImage}
        usernameType={usernameType}
        usernamePlaceholder={usernamePlaceholder}
        dropdownIsOpen={dropdownIsOpen}
        onChange={onChange}
        backButtonHandle={backButtonHandle}
        nextButtonHandle={nextButtonHandle}
        dropdownIsOpenHandle={dropdownIsOpenHandle}
        selectAccountTypeHandle={selectAccountTypeHandle}
      />
    );
  }
}

export default RegisterPersonalInfoPage;
