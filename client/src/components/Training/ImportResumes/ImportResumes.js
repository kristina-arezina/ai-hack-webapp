import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import Radio from '@material-ui/core/Radio';
import FormLabel from '@material-ui/core/FormLabel';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'relative',
    width:"100%",
    height: "100%"
  }, accordion: {
    width:"100%",
    height: "100%"
  },
  formControl: {
    margin: theme.spacing(3),
  },
  formLabel: {
    textAlign: "left",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function CheckboxesGroup(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState('female');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <span>
    <div className={classes.root}>
    <FormControl component="fieldset" className={classes.formControl}>
      <FormLabel component="legend">Choose the better candidate on paper</FormLabel>
      <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
            <FormControlLabel
            value="female"
              control={<Radio style={{color: "#003c8f"}} name="gilad" />}
              label={
                <Button disabled style={{textTransform: "capitalize"}} edge="end" aria-label="comments">
                <p style={{color: "#003c8f"}}>Candidate 1</p>
               </Button>
              }
            >
            </FormControlLabel>
            <FormControlLabel
            value="male"
              control={<Radio style={{color: "#003c8f"}}  name="jason" />}
              label={
                <Button disabled target="_blank" style={{textTransform: "capitalize"}}  edge="end" aria-label="comments">
                <p style={{color: "#003c8f"}}>Candidate 2</p>
               </Button>
              }
            >
            </FormControlLabel>
          </RadioGroup>
      </FormControl> 
    <Accordion className={classes.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Candidate 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {props.id1}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Candidate 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {props.id2}
          </Typography>
        </AccordionDetails>
      </Accordion>

      
    </div> 
    </span>
  );
}

