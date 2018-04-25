import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Button from 'material-ui/Button';
import blue from 'material-ui/colors/blue';
import Icon from 'material-ui/Icon';
import { withStyles } from 'material-ui/styles';

import Home from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SettingsIcon from '@material-ui/icons/Settings';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flex: 1,
    marginLeft: theme.spacing.unit * 2,
    textDecoration: "none",
  },
  iconHover: {
    '&:hover': {
      color: blue[200],
      cursor: "pointer",
    },
  },
  button: {
    marginLeft: 20,
  },
  toolbar: {
    minHeight: theme.spacing.unit,
  }
});

class Header extends Component {
  constructor(props) {
    super(props);

    this._onHandleDrawer = this._onHandleDrawer.bind(this)
  }

  _onHandleDrawer(e) {
    const { isDrawerOpen } = this.props.drawer;
    const {
      showDrawer,
      hideDrawer,
    } = this.props;

    if (isDrawerOpen) {
      hideDrawer();
    } else {
      showDrawer();
    }
  }

  render() {
    const { classes } = this.props;
    const { isDrawerOpen } = this.props.drawer;

    return (
      <div className={classes.root}>
        <AppBar
          position="fixed"
          color="default"
        >
          <Toolbar
            className={classes.toolbar}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={this._onHandleDrawer}
            >
              {isDrawerOpen ? <ArrowBackIcon /> : <MenuIcon /> }
            </IconButton>
            <Typography
              className={classes.title}
              color="inherit"
              variant="title"
            >
              Skadoosh
            </Typography>
            <IconButton
              color="primary"
              component={Link}
              to="/profile"
            >
              <AccountCircleIcon />
            </IconButton>
            <IconButton
              color="primary"
              component={Link}
              to="/settings"
            >
              <SettingsIcon />
            </IconButton>
            <Button
              color="inherit"
              component={Link}
              to="/logout"
            >
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      </ div >
    );
  }
}

export default withStyles(styles)(Header);