import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

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
          <Typography>
            <Button href="https://project-themis.netlify.app/" style={{ backgroundColor: "Transparent",  overflow: "hidden", fontSize:"25px", fontFamily: 'Cormorant Garamond', padding:20 }}  color="inherit" variant="text">
              Project Themis
            </Button>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
