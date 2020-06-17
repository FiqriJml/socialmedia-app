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
        <Typography variant="body1">Notifications</Typography>
        <Typography variant="body2"><b>Some one</b> add a new <b>story</b> <i>today at 10:56</i> </Typography>
      </Paper>
    </div>
  );
}