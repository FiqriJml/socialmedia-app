import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      width: 300,
      height: theme.spacing(16),
      paddingTop: 14,
      padding: 16
    },
  },
}));

export default function Notifications(props) {
  const {notifications} = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={1} >    
        <Typography variant="body1">Notifications</Typography>
        <div>
          { notifications && notifications.map(item => {
            return (
            <Typography key={item.id} variant="body2">
              <b>{item.user} </b> 
              {item.content} <br/> 
              <small>{moment(item.time.toDate()).fromNow()}</small>
            </Typography>
            )
          })}
        </div>
      </Paper>
    </div>
  );
}