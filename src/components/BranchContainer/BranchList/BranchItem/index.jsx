import React from "react";

const BranchItem = ({ cityName, address, phoneNumber }) => (
  <div className="branchContainer__branches__location">
    <span className="branchContainer__branches__location__header">
      {cityName}
    </span>
    <span className="branchContainer__branches__location__address">
      {address}
    </span>
    <span className="branchContainer__branches__location__phone">
      {phoneNumber}
    </span>
  </div>
);

export default BranchItem;
