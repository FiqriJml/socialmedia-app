import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import TextArea from 'react-textarea-autosize';
import { makeStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';
import { Divider } from '@material-ui/core';

import { connect } from "react-redux";
import { updateStory } from "../../store/actions/storyActions";

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

function UpdateStory(props) {
  const [open, setOpen] = React.useState(false);
    const {story} = props;
  const [state, setState] = React.useState({content: story.content});

  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const saveStory = () => {
    props.updateStory(state, story.id);
    setOpen(false);
  };
  const handleChange = (e) => {
    const newState = { [e.target.id]: e.target.value };
    setState(newState); // Now it works
  }
  return (
    <Fragment>
      <span onClick={handleClickOpen}>
        Update
      </span>
      <Dialog fullWidth open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Sunting Cerita</DialogTitle>
        <Divider/>
        <DialogContent>
          <br/>
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
          <Button variant="contained" onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button variant="contained" onClick={saveStory} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}

const mapDispatchToProps = (dispatch) =>{
  return {
    updateStory: (story, storyId) => dispatch(updateStory(story, storyId))
  }
}

export default connect(null, mapDispatchToProps)(UpdateStory);