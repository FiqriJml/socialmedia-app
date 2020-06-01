import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { blue, grey } from '@material-ui/core/colors';

import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import CardActions from '@material-ui/core/CardActions';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import CommentIcon from '@material-ui/icons/Comment';

import Divider from '@material-ui/core/Divider';
const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth:500,
    },
    avatar: {
      backgroundColor: blue[500],
    },
    form: {
      margin: '8px 16px',
      padding: '8px 16px',
      backgroundColor: grey[200],
      borderRadius: 20,
    },
    comment: {
      fontSize: '0.85rem',
      width: '100%',
      outline: '0px solid transparent',
    },
    cardActions: {
      paddingBottom: 0,
      paddingTop: 0,
    },
    button: {
      fontSize: 18,
    },
    textArea: {
      width: '100%',
      height: '100%',
      overflow: 'hidden'
    },
  }));
export default function Story() {

    const classes = useStyles();
  
  return (
    <Card className={classes.root}>
        <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardContent>
        <Typography variant="body2" color="textPrimary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label="like" >
          <ThumbUpIcon className={classes.button}  />
        </IconButton>
        <IconButton aria-label="comment">
          <CommentIcon className={classes.button} />
        </IconButton>
      </CardActions>
      <Divider/>
      <form className={classes.form} noValidate autoComplete="off">
        {/* <InputBase
           inputProps={{style: {fontSize: '0.85rem'}}}
           className={classes.comment} placeholder="komentari..."  /> */}
           <div className={classes.comment} contentEditable placeholder="komentari..."></div>
      </form>
    </Card>
  );
}
