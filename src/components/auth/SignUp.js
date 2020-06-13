import React, { Component, Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';

import Navigation from '../layout/Navigation';

const useStyles = ((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: '94.5%',
  },
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
class SignUp extends Component {
    state = {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      jenisKelamin: '',
      tanggalLahir: ''
    }
    handleChange = e => {
      this.setState({
        [e.target.id]: e.target.value,
      })
    }
    handleGender = e => {
      this.setState({
        jenisKelamin: e.target.value,
      })
    }
    handleSubmit = e => {
      e.preventDefault()
      console.log(this.state);
    }
    render() {
      const { classes } = this.props;
        return (
          <Fragment>
            <Navigation/>
            <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: '95vh' }}
            >

            <Grid item xs={12}>       
              <Paper elevation={3} className={classes.paper}>
                <Typography variant="h4" className={classes.title}>Sign Up</Typography> 
                <form onSubmit={this.handleSubmit}>
                  <div className={classes.formInput}>
                      <TextField autoFocus label="Nama Depan" id="firstName" required type="text" onChange={this.handleChange} className={classes.textField} variant="outlined" />
                  </div>
                  <div className={classes.formInput}>
                      <TextField label="Nama Belakang" id="lastName" required type="text" onChange={this.handleChange} className={classes.textField} variant="outlined" />
                  </div>
                  <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="select-jenisKelamin">Jenis Kelamin</InputLabel>
                    <Select
                      labelId="select-jenisKelamin"
                      id="jenisKelamin"
                      label="jenisKelamin"
                      value={this.state.jenisKelamin} 
                      onChange={this.handleGender}
                      className={classes.textField}
                    >
                      <MenuItem value={"Laki-laki"}>Laki-laki</MenuItem>
                      <MenuItem value={"Perempuan"}>Perempuan</MenuItem>
                    </Select>
                  </FormControl>
                  <div className={classes.formInput}>
                      <TextField InputLabelProps={{ shrink: true }} label="Tanggal Lahir" id="tanggalLahir" type="date" onChange={this.handleChange} className={classes.textField} variant="outlined" />
                  </div>
                  <div className={classes.formInput}>
                      <TextField id="email" required type="email" onChange={this.handleChange} className={classes.textField} label="Email" variant="outlined" />
                  </div>
                  <div className={classes.formInput}>
                      <TextField id="password" required type="password" onChange={this.handleChange} className={classes.textField} label="Password" variant="outlined" />
                  </div>
                  <div className={classes.formInput}>
                      <Button type="submit" fullWidth variant="contained" color="primary">sign up</Button>
                  </div>
                </form>
              </Paper>
            </Grid>   

          </Grid> 
        </Fragment>
        )
    }
}

export default withStyles(useStyles)(SignUp);
