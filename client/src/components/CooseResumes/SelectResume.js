import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';

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
  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: false,
    kristina: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    
  };

    const { gilad, jason, antoine, kristina } = state;
    const error = [gilad, jason, antoine, kristina].filter((v) => v).length !== 2;

  return (
    <div className={classes.root}>
      <FormControl required error={error} component="fieldset" className={classes.formControl}>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox style={{color: "#003c8f"}} checked={gilad} onChange={handleChange} name="gilad" />}
              label={
                <Button href="https://docs.google.com/document/d/1nLMbVYZuuquVU7w4qaxQILdWZaDp1oXy5M2IRyDK9pw/edit?usp=sharing" target="_blank" style={{textTransform: "capitalize"}} edge="end" aria-label="comments">
                <p>Candidate 1</p>
                 <OpenInNewIcon/>
               </Button>
              }
            >
            </FormControlLabel>
            <FormControlLabel
              control={<Checkbox style={{color: "#003c8f"}} checked={jason} onChange={handleChange} name="jason" />}
              label={
                <Button href="https://docs.google.com/document/d/1nLMbVYZuuquVU7w4qaxQILdWZaDp1oXy5M2IRyDK9pw/edit?usp=sharing" target="_blank" style={{textTransform: "capitalize"}}  edge="end" aria-label="comments">
                <p>Candidate 2</p>
                 <OpenInNewIcon/>
               </Button>
              }
            >
            </FormControlLabel>
            <FormControlLabel
              control={<Checkbox style={{color: "#003c8f"}} checked={antoine} onChange={handleChange} name="antoine" />}
              label={
                <Button href="https://docs.google.com/document/d/1FKh_dszQCZ440FDRIWeUopptFIaZt3_sdQCB8OPVykU/edit?usp=sharing" target="_blank" style={{textTransform: "capitalize"}}  edge="end" aria-label="comments">
                <p>Candidate 3</p>
                 <OpenInNewIcon/>
               </Button>
              }
            >
            </FormControlLabel>
            <FormControlLabel
              control={<Checkbox style={{color: "#003c8f"}} checked={kristina} onChange={handleChange} name="kristina" />}
              label={
                <Button href="https://docs.google.com/document/d/1OEz_X9IyLDXr7ANOiZANCKx47WLloX0hsDYTopMfJaU/edit?usp=sharing" target="_blank" style={{textTransform: "capitalize"}}  edge="end" aria-label="comments">
                <p>Candidate 4</p>
                 <OpenInNewIcon/>
               </Button>
              }
            >
            </FormControlLabel>
          </FormGroup>
        <FormHelperText>Please pick two resumes</FormHelperText>
      </FormControl>
    </div>
  );
}

