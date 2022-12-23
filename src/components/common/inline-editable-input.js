import { useState } from "react";
import styled from "styled-components";

const InlineEditInput = ({ value, setValue, ...rest }) => {
  const [editingValue, setEditingValue] = useState(value);

  const onChange = (event) => setEditingValue(event.target.value);

  const onKeyDown = (event) => {
    if (event.key === "Enter" || event.key === "Escape") {
      event.target.blur();
    }
  };

  const onBlur = (event) => {
    if (event.target.value.trim() === "") {
      setEditingValue(value);
    } else {
      setValue(event.target.value);
    }
  };

  return (
    <Input
      {...rest}
      type="text"
      aria-label="Field name"
      value={editingValue}
      onChange={onChange}
      onKeyDown={onKeyDown}
      onBlur={onBlur}
    />
  );
};

const Input = styled.input`
  width: ${(props) => props.width || "300px"};
  display: inline-block;
  background-color: transparent;
  border: 0;
  padding: 8px;
  color: #fff;
  outline: none;
  font-size: ${(props) => props.fontSize || ".85rem"};
  :hover {
    background: #1a2027;
    border-radius: 5px;
  }
`;

export default InlineEditInput;
