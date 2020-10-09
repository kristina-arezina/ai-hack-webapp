import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Instructions from "./Instructions"
import Paper from '@material-ui/core/Paper';
import SelectResume from "./SelectResume"

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
    backgroundColor: theme.palette.background.paper,
  },
  Tabs: {
      fontColor: "#002171"
  },
}));

export default function StepOne() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar style={{backgroundColor: "#80d6ff"}} position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab style={{color: "#000a12"}} label="Choose Resumes" {...a11yProps(0)} />
        //   Change disabled when do the stuff we want it to do
          <Tab style={{color: "#000a12"}} label="Item Two" {...a11yProps(1)} disabled={false} />
          <Tab style={{color: "#000a12"}} label="Item Three" {...a11yProps(2)} disabled={true}/>
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Paper elevation={3}>
        <h1 style={{paddingTop:"2%", textAlign:"left", paddingLeft:"3%"}}>Instructions</h1>
            <Instructions/>
        </Paper>
        
        <Paper style={{paddingLeft:"3%"}} elevation={3}>
          <h1 style={{paddingTop:"2%", textAlign:"left"}}>Select Resumes</h1>
          <SelectResume/>
        </Paper>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </div>
  );
}
