import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Input from "components/common/Input";
import useStyles from "./signInStyles";
import { useHistory } from "react-router-dom";
// import axios from "axios";
import { connect } from "react-redux";
import login from "redux-store/actions/auth/login";

const SignIn = ({ login }) => {
  const [state, setState] = React.useState({
    email: "",
    password: "",
  })

  const handleChange = (_event) => {
    setState({ ...state, [_event.target.name]: _event.target.value })
  };

  const history = useHistory();
  
  const handleLogin = async () => {
    const userData = {
      email: state.email,
      password: state.password
    };
    login(userData, history);
  };


  const classes = useStyles();

  return (
    <div className={classes.root}>
    <Grid container>
      <Grid item xs={4} />
      <Grid item xs={4} className={classes.container} >
        <div className={classes.body}>
        <h1 className={classes.title}>Dailytasks</h1>
        <p className={classes.subTitle}>Welcome back</p>
          <Input
            required
            name="email"
            onChange={(_event) => handleChange(_event)}
            inputType="text"
            labeClassName={classes.label}
            inputClassName={classes.input}
            labelName="Username"
            helperText="Enter your username or eamil addree"
          />
          <Input
            required
            name="password"
            onChange={(_event) => handleChange(_event)}
            inputType="password"
            labeClassName={classes.label}
            inputClassName={classes.input}
            labelName="Password"
            helperText="Enter your password"
          />
        <div className={classes.actions}>
          <Button 
            disableRipple
            className={classes.createButton} 
            onClick={handleLogin} 
            variant="contained"
          >
            Sign In
          </Button>
        </div>
        </div>
      </Grid>
      <Grid item xs={4} />
    </Grid>
  </div>
  )
};

const mapDispatchToProps = {
  login,
}

export default connect(null, mapDispatchToProps)(SignIn);
// export default SignIn;
