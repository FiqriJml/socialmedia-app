import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Divider } from '@material-ui/core';
import TextArea from 'react-textarea-autosize'
import { makeStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';

import CommentIcon from '@material-ui/icons/Comment';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles(() => ({
    textarea: {
      padding: 0,
      fontSize: 20,
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      width: '100%',
      outline: '0px solid transparent',
      border: 0,
      resize: 'none !important',
      backgroundColor: 'transparent',
      overflow: 'hidden',
    },
    panelTextarea: {
      border: '1px solid',
      borderRadius: 4,
      borderColor: grey[200],
      padding: '9px 16px 6px 16px',
      backgroundColor: grey[50],
    },
    button: {
      fontSize: 18,
    },
  }))

function Comment() {
    const [open, setOpen] = React.useState(false);
    const [state, setState] = React.useState({content: ''});
    const classes = useStyles();

    const handleClick = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }
    const handleChange = (e) => {
        const newState = {[e.target.id]: e.target.value};
        setState(newState);
    }
    const handleSave = () => {
        console.log('simpan komentar');
        handleClose();
    }
    return(
        <Fragment>
            <IconButton aria-label="comment" onClick={handleClick}>
                <CommentIcon className={classes.button}/>
            </IconButton>
            <Dialog fullWidth open={open} onClose={handleClose}>
                <DialogTitle>Tulis Komentar</DialogTitle>
                <Divider/>
                <DialogContent>
                    <div className={classes.panelTextarea}>
                        <TextArea 
                        value={state.content}
                        autoFocus
                        onFocus={(e) => {
                            // untuk mengubah posisi pointer ke akhir kalimat pada textarea
                            const pointer = e.target.value.length;
                            e.target.selectionStart = pointer
                            e.target.selectionEnd = pointer
                        }}
                        id="content"
                        onChange={handleChange}
                        className={classes.textarea}
                        placeholder="Tulis cerita anda disini..."
                        >

                        </TextArea>
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" onClick={handleSave} color="primary">
                        Kirim
                    </Button>
                </DialogActions>
            </Dialog>
        </Fragment>
    )
}

export default Comment;