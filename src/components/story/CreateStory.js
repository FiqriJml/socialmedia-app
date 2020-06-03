import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/AddCircle';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import TextArea from 'react-textarea-autosize';
import { makeStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';
import { Divider } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    width: 800
  },
  textarea: {
    padding: 0,
    fontSize: 20,
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    width: '100%',
    outline: '0px solid transparent',
    border: 0,
    resize: 'none !important',
    backgroundColor: 'transparent',
  },
  panelTextarea: {
    padding: '8px 16px 6px 16px',
    backgroundColor: grey[50],
  }
}))

export default function CreateStory() {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Fragment>
      <Button onClick={handleClickOpen} disableElevation variant="contained" color="primary" startIcon={<AddIcon />} >
        Buat Cerita
      </Button>
      <Dialog fullWidth open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Buat Cerita</DialogTitle>
        <Divider/>
        <DialogContent>
          <br/>
          <div className={classes.panelTextarea}>
            <TextArea 
              className={classes.textarea}
              placeholder="Tulis cerita anda disini...">

            </TextArea>
          </div>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleClose} color="primary">
            Kirim
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}
