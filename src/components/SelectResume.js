import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
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
        <FormLabel component="legend">Pick two</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={gilad} onChange={handleChange} name="gilad" />}
            label="Candidate 1"
          />
          <FormControlLabel
            control={<Checkbox checked={jason} onChange={handleChange} name="jason" />}
            label="Candidate 2"
          />
          <FormControlLabel
            control={<Checkbox checked={antoine} onChange={handleChange} name="antoine" />}
            label="Candidate 3"
          />
          <FormControlLabel
            control={<Checkbox checked={kristina} onChange={handleChange} name="kristina" />}
            label="Candidate 4"
          />
        </FormGroup>
        <FormHelperText>You can display an error</FormHelperText>
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
