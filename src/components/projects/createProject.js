import React from "react";
import { CompactPicker } from "react-color";
import { colors } from "components/constants/project-background-colors";

const CreateProject = () => {
  const [color, setColor] = React.useState("");

  const handleOnChange = (color) => {
    setColor({color: color.hex });
  };

  console.log(color)

  return (
    <div>
      Create Project
      <CompactPicker colors={colors} onChangeComplete={handleOnChange}  />
    </div>
  )
}

export default CreateProject;
