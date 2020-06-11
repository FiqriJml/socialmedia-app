import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';

import {connect} from 'react-redux';

import {signIn} from '../../store/actions/authActions';

const useStyles = (() => ({
  paper: {
    padding: '20px 20px',
    width: 320
  },
  formInput: {
      padding: 10,
      textAlign: 'center',
  },
  textField: {
    width: '100%'
  },
  title: {
      textAlign: 'center',
      marginBottom: 12
  },
}));
class SignIn extends Component {
    state = {
      email: '',
      password: ''
    }
    handleChange = e => {
      this.setState({
        [e.target.id]: e.target.value,
      })
    }
    handleSubmit = e => {
      e.preventDefault()
      this.props.signIn(this.state);
    }
    render() {
      const { classes, authError } = this.props;
        return (
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: '80vh' }}
            >

            <Grid item xs={12}>       
              <Paper elevation={3} className={classes.paper}>
                <Typography variant="h4" className={classes.title}>Sign In</Typography> 
                <form onSubmit={this.handleSubmit}>
                  <div className={classes.formInput}>
                      <TextField id="email" autoFocus required type="email" onChange={this.handleChange} className={classes.textField} label="Email" variant="outlined" />
                  </div>
                  <div className={classes.formInput}>
                      <TextField id="password" required type="password" onChange={this.handleChange} className={classes.textField} label="Password" variant="outlined" />
                  </div>
                  <div className={classes.formInput}>
                      <Button type="submit" fullWidth variant="contained" color="primary">Login</Button>
                  </div>
                  <div className={classes.title}>
                    {authError ? <p> {authError} </p> : null}
                  </div>
                </form>
              </Paper>
            </Grid>   

          </Grid> 
        )
    }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(SignIn));
