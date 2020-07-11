import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
// Redux Stuff
import { connect } from 'react-redux';
import { editUserDetails } from '../redux/actions/userActions';
// MUI Stuff
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton ';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
// Icons
import EditIcon from '@material-ui/icons/Edit';

const styles = (theme) => ({
  ...theme,
});

class EditDetails extends Component {
  state = {
    bio: '',
    website: '',
    location: '',
    open: false,
  };

  componentDidMount() {
    const { credentials } = this.props;
    mapUserDetailsToState(credentials);
  }
  render() {
    const { classes } = this.props;
    handleOpen = () => {
      this.setState({ open: true });
      mapUserDetailsToState(this.props.credentials);
    };
    handleClose = () => {
      this.setState({ open: false });
    };
    mapUserDetailsToState = (credentials) => {
      this.setState({
        bio: credentials.bio ? credentials.bio : '',
        wdbsite: credentials.wdbsite ? credentials.wdbsite : '',
        location: credentials.location ? credentials.location : '',
      });
    };
    return (
      <Fragment>
        <Tooltip title='Edit details' placement='top'>
          <IconButton onClick={this.handleOpen} className={classes.button}>
            <EditIcon color='primary' />
          </IconButton>
        </Tooltip>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          fullWidth
          maxWidth='sm'
        >
          <DialogTitle>Edit your details</DialogTitle>
          <DialogContent>
            <form>
              <TextField
                name='bio'
                type='text'
                label='Bio'
                multiline
                rows='3'
                placeholder='A short bio about yourself'
                className={classes.textField}
                value={this.state.bio}
                onChange={this.onChange}
                fullWidth
              />
              <TextField
                name='website'
                type='text'
                label='Website'
                placeholder='Your personal/professional website'
                className={classes.textField}
                value={this.state.website}
                onChange={this.onChange}
                fullWidth
              />
              <TextField
                name='location'
                type='text'
                label='Location'
                placeholder='Where you live'
                className={classes.textField}
                value={this.state.location}
                onChange={this.onChange}
                fullWidth
              />
            </form>
          </DialogContent>
        </Dialog>
      </Fragment>
    );
  }
}

EditDetails.PropTypes = {
  editUserDetails: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  credentials: state.user.credentials,
});

export default connect(mapStateToProps, { editUserDetails })(
  withStyles(styles)(EditDetails)
);