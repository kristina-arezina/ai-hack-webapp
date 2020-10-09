import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  header: {
    padding:"10px",
    backgroundColor: "#003c8f",
    zIndex:100,
    position: "relative"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.header} position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          </IconButton>
          <Typography variant="h6" color="inherit">
          Project Themis
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
