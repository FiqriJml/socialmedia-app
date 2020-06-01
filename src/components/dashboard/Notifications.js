import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      width: 260,
      height: theme.spacing(16),
      paddingTop: 14,
      padding: 16
    },
  },
}));

export default function Notifications() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={1} >    
        <Typography>Notifications</Typography>
      </Paper>
    </div>
  );
}