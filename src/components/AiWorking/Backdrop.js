import React, {useEffect} from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

export default function SimpleBackdrop() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(false);
    }, 1000);
    return () => {
      clearTimeout(timer);
    }
  }, []);

  return (
    <div>
      <Backdrop className={classes.backdrop} open={open}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
