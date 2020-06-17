import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/AddCircle';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import TextArea from 'react-textarea-autosize';
import { makeStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';
import { Divider } from '@material-ui/core';

import { connect } from "react-redux";
import { createStory } from "../../store/actions/storyActions";

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
    overflow: 'hidden',
  },
  panelTextarea: {
    border: '1px solid',
    borderRadius: 4,
    borderColor: grey[200],
    padding: '9px 16px 6px 16px',
    backgroundColor: grey[50],
  }
}))

function CreateStory(props) {
  const [open, setOpen] = React.useState(false);

  const [state, setState] = React.useState({content: ''});
  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const saveStory = () => {
    props.createStory(state);
    setOpen(false);
  };
  const handleChange = (e) => {
    const newState = { [e.target.id]: e.target.value };
    setState(newState); // Now it works
  }
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
            autoFocus
            id="content"
              onChange={handleChange}
              className={classes.textarea}
              placeholder="Tulis cerita anda disini..."
              >

            </TextArea>
          </div>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={saveStory} color="primary">
            Kirim
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}

const mapDispatchToProps = (dispatch) =>{
  return {
    createStory: (story) => dispatch(createStory(story))
  }
}

export default connect(null, mapDispatchToProps)(CreateStory);