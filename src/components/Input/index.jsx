import React from "react";

const Input = ({
  name,
  label,
  className,
  type,
  value,
  onChange,
  placeholder,
  id
}) => {
  return (
    <React.Fragment>
      <label htmlFor={name}>{label}</label>
      <input
        value={value}
        onChange={onChange}
        className={className}
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
      />
    </React.Fragment>
  );
};

export default Input;
