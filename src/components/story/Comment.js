import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid'
import {makeStyles} from '@material-ui/core/styles'
import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    komen: {
        borderColor: grey[200],
        border: 'solid 1px',
        borderRadius: 6,
        backgroundColor: grey[100],
        padding: 8,
        paddingTop: 3,
    },
    name: {
        fontSize: 12,
        fontWeight: 'bold',
    },
    content: {
        fontSize: 14,
    },
    small: {
      width: theme.spacing(4),
      height: theme.spacing(4),
    },
}));
function Comment(props) {
    const {comment} = props;
    const classes = useStyles();
    return (
        <Grid wrap='nowrap' container direction="row" alignItems="flex-start" spacing={1}>
            <Grid item>
                <Avatar className={classes.small}/>
            </Grid>
            <Grid item>
                <div className={classes.komen}>
                    <span className={classes.name}>{comment.username}</span>
                    <div className={classes.content}>{comment.content}</div>
                </div>
            </Grid>
        </Grid>
    )
}

export default Comment;
