import React, {useEffect} from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

// NOTE: I am keeping the backdrop button trigger as a commen so we can use the functions it has that riger it

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

export default function SimpleBackdrop() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleClose = () => {
    setOpen(false);
  };
  // const handleToggle = () => {
  //   setOpen(!open);
  // };

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    // <Button variant="outlined" color="primary" onClick={handleToggle}>
    //     Show backdrop
    //   </Button>
    <div>
      <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
