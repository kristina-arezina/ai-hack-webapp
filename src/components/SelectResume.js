import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
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
    textAlign: "left"
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
              control={<Checkbox checked={gilad} onChange={handleChange} name="gilad" />}
              label={
                <Button style={{textTransform: "capitalize"}} edge="end" aria-label="comments">
                <p>Candidate 1</p>
                 <OpenInNewIcon/>
               </Button>
              }
            >
            </FormControlLabel>
            <FormControlLabel
              control={<Checkbox checked={jason} onChange={handleChange} name="jason" />}
              label={
                <Button href="https://www.w3schools.com/html/html_links.asp" target="_blank" style={{textTransform: "capitalize"}}  edge="end" aria-label="comments">
                <p>Candidate 2</p>
                 <OpenInNewIcon/>
               </Button>
              }
            >
            </FormControlLabel>
            <FormControlLabel
              control={<Checkbox checked={antoine} onChange={handleChange} name="antoine" />}
              label={
                <Button style={{textTransform: "capitalize"}}  edge="end" aria-label="comments">
                <p>Candidate 3</p>
                 <OpenInNewIcon/>
               </Button>
              }
            >
            </FormControlLabel>
            <FormControlLabel
              control={<Checkbox checked={kristina} onChange={handleChange} name="kristina" />}
              label={
                <Button style={{textTransform: "capitalize"}}  edge="end" aria-label="comments">
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


// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
// import ListItemText from '@material-ui/core/ListItemText';
// import Checkbox from '@material-ui/core/Checkbox';
// import IconButton from '@material-ui/core/IconButton';
// import OpenInNewIcon from '@material-ui/icons/OpenInNew';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: '100%',
//     backgroundColor: theme.palette.background.paper,
//   }
// }));

// export default function SelectResume() {
//   const classes = useStyles();
//   const [checked, setChecked] = React.useState([0]);

//   const handleToggle = (value) => () => {
//     const currentIndex = checked.indexOf(value);
//     const newChecked = [...checked];

//     if (currentIndex === -1) {
//       newChecked.push(value);
//     } else {
//       newChecked.splice(currentIndex, 1);
//     }

//     setChecked(newChecked);
//   };

//   return (
//     <List className={classes.root}>
//       {[0, 1, 2, 3].map((value) => {
//         const labelId = `checkbox-list-label-${value}`;
//         return (
//           <ListItem key={value} role={undefined} dense button onClick={handleToggle(value)}>
//             <ListItemIcon>
//               <Checkbox
//                 style={{color: "#29b6f6"}}
//                 edge="start"
//                 checked={checked.indexOf(value) !== -1}
//                 tabIndex={-1}
//                 disableRipple
//                 inputProps={{ 'aria-labelledby': labelId }}
//               />
//             </ListItemIcon>
//             <ListItemText id={labelId} primary={`Candidate ${value + 1}`} />
//             <ListItemSecondaryAction>
//               <IconButton edge="end" aria-label="comments">
//                 <OpenInNewIcon/>
//               </IconButton>
//             </ListItemSecondaryAction>
//           </ListItem>
//         );
//       })}
//     </List>
//   );
// }
