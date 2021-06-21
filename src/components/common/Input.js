import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";

/**
 * @param {string} inputType - The type of the input eg text, password etc.
 * @param {string} helperText - A breif description of what the input is for.
 * @param {string} labelName - The label for the input eg Name, Username etc.
 * @param {object} classes - A style object for the input and the label.
 * @param {function} [onChange] - Function that handles the onChange event of the input.
 * @returns {JSX Element} - Returns a jsx element.
 */

const Input = ({
  inputType, helperText, labelName, classes, onChange, name, value,
}) => (
  <>
    <InputLabel className={classes.label} htmlFor="outlined-adornment-text">
      {labelName}
    </InputLabel>
    <TextField
      fullWidth
      name={name}
      value={value}
      autoComplete="off"
      onChange={onChange}
      type={inputType}
      className={classes.input}
      helperText={helperText}
      variant="outlined"
    />
  </>
);

// FormInput.propTypes = {
//   name: PropTypes.string.name,
//   helperText: PropTypes.string,
//   onChange: PropTypes.func.isRequired,
//   required: PropTypes.bool.isRequired,
//   classes: PropTypes.object.isRequired,
//   inputType: PropTypes.string.isRequired,
//   labelName: PropTypes.string.isRequired,
// };

export default Input;
