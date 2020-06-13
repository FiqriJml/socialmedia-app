import React, {Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { signOut } from '../../store/actions/authActions';
import {connect} from 'react-redux';

import {Link} from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    color: 'inherit', textDecoration: 'inherit'
  }
}));

function Navigation(props) {
  const classes = useStyles();

  const {auth } = props;
  const nav_links = auth.uid ? 
    <Button color="inherit" onClick={props.signOut}>
      <Link to='/signin' className={classes.link}>Logout</Link>
    </Button>: 
    <Fragment>
      <Link to='/signup' className={classes.link}>
        <Button color="inherit">Signup</Button>
      </Link>
      <Link to='/signin' className={classes.link}>
        <Button color="inherit">Login</Button>
      </Link>
    </Fragment>;

  return (
    <div className={classes.root}>
      <AppBar position="static" elevation={0}>
        <Toolbar >
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <Link to='/' className={classes.link}>Physikol</Link>
          </Typography>
          {nav_links} 
        </Toolbar>
      </AppBar>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
