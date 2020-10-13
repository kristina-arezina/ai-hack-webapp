import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import Radio from '@material-ui/core/Radio';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width:"100%"
  },
  formControl: {
    margin: theme.spacing(3),
  },
  formLabel: {
    textAlign: "left",
  }
}));

export default function CheckboxesGroup() {
  const classes = useStyles();
  const [value, setValue] = React.useState('female');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
      <FormLabel component="legend">Gender</FormLabel>
      <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
            <FormControlLabel
            value="female"
              control={<Radio style={{color: "#003c8f"}} name="gilad" />}
              label={
                <Button style={{textTransform: "capitalize"}} edge="end" aria-label="comments">
                <p>Candidate 1</p>
                 <OpenInNewIcon/>
               </Button>
              }
            >
            </FormControlLabel>
            <FormControlLabel
            value="male"
              control={<Radio style={{color: "#003c8f"}}  name="jason" />}
              label={
                <Button href="https://www.w3schools.com/html/html_links.asp" target="_blank" style={{textTransform: "capitalize"}}  edge="end" aria-label="comments">
                <p>Candidate 2</p>
                 <OpenInNewIcon/>
               </Button>
              }
            >
            </FormControlLabel>
          </RadioGroup>
        <FormHelperText>Please pick two resumes</FormHelperText>
      </FormControl>
    </div>
  );
}

