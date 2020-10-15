import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Instructions from "./CooseResumes/Instructions"
import Paper from '@material-ui/core/Paper';
import SelectResume from "./CooseResumes/SelectResume";
import Button from '@material-ui/core/Button';
import RankingList from "./FindBestCandidate/RankingList";
import Backdrop from "./AiWorking/Backdrop"

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "auto",
    backgroundColor: theme.palette.background.paper,
  },
  Tabs: {
      fontColor: "#002171"
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  }
}));

export default function Main() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar style={{backgroundColor: "#80d6ff"}} position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab style={{color: "#000a12"}} label="Choose Resumes" {...a11yProps(0)} />
          <Tab style={{color: "#000a12"}} label="AI Working" {...a11yProps(1)} disabled={true} />
          <Tab style={{color: "#000a12"}} label="Find best candidate" {...a11yProps(2)} disabled={true}/>
        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0}>
        <Paper style={{marginBottom:"5%"}} elevation={3}>
          <h1 style={{paddingTop:"2%", textAlign:"left", paddingLeft:"3%"}}>Instructions</h1>
            <Instructions/>
        </Paper>
        
        <Paper style={{ padding:"2%", marginLeft: "8%", marginRight: "8%", marginTop: "2%", width:"auto"}} elevation={3}>
          <h1 style={{ textAlign:"left"}}>Select Resumes</h1>
          <SelectResume/>
          <Button onClick={() => setValue(1)} style={{padding:"1%", margin: "1%"}} variant="contained" color="primary">
            Done
          </Button>
        </Paper>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <Backdrop/>
        <Button style={{ padding:"2%"}} onClick={() => setValue(2)} variant="contained" color="primary" disableElevation>
          Done! See Your Results
        </Button>
      </TabPanel>

      <TabPanel value={value} index={2} >
      <Paper style={{ padding:"2%", marginLeft: "5%", marginRight: "5%", marginTop: "2%", width:"auto"}} elevation={3}>
        <RankingList />
      </Paper>
      </TabPanel>
    </div>
  );
}
