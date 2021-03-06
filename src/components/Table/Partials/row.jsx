import React from "react";
import Cells from "./cells";
const Row = ({ row }) => {
  return (
    <tr className="details-table__tableDetails__body__row">
      <Cells data={row} />
    </tr>
  );
};

export default Row;
