import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Filter1Icon from '@material-ui/icons/Filter1';
import Filter2Icon from '@material-ui/icons/Filter2';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import {items} from "../../store.js"

const useStyles = makeStyles({
  root: {
    maxWidth: "90%",
    minWidth: "90%",
    marginTop: "10px"
  },
  media: {
    height: 70,
    width: "100%",
  },
  list: {
    width: '100%',
  },
  inline: {
    display: 'inline',
  }
});

export default function RankingList(props) {
  const [userResumes, setResumes] = React.useState("");
  const [userResumesTrue, setResumesTrue] = React.useState([]);
  const classes = useStyles();
  
  const resumes = [
    {
      id: "one",
      number: 1,
      name: "Ramanpreet Kaur",
      link: "https://docs.google.com/document/d/144VFARrTOFjBkTCGzJ2oj0-BVT4akh-gJAh4Wp0fLkI/edit?usp=sharing",
    },
    {
      id: "two",
      number: 2,
      name: "Siddu Patil",
      link: "https://docs.google.com/document/d/1CxEl3RrIEZRUMq-qa_8En4YCHml_tRyKW-vWAWi3brk/edit?usp=sharing"
    },
    {
      id: "three",
      number: 3,
      name: "Yakeen Y. Gazi",
      link: "https://docs.google.com/document/d/17jHXruJ6gyxRoPxtfoTjg5RdSuJj6vHQljyQbxIr3g0/edit?usp=sharing"
    },
    {
      id: "four",
      number: 4,
      name: "Mitchell Artz",
      link: "https://docs.google.com/document/d/1bdqhuPqzaLD3tfOfCLF20co4sPo2_CQdcou9OYDk-dw/edit?usp=sharing"
    }
  ];
  let newArray = [] 
  let setResumesTrueArray = []
  useEffect(() => {
    
    setResumes(props.resumes);
    console.log(userResumes.length)
    // let newArray = [] 
    for (var i = 0; i < userResumes.length-1; i++) {
      let userResumesArray = userResumes[i]
      if (userResumesArray[1] === true) {
        console.log("userResumes", userResumesArray[0])
        newArray.push(userResumesArray[0])
        console.log("userResumesTrue", newArray)
      } 
  }


  for (var i = 0; i < resumes.length-1; i++) {
    if (newArray[i] === resumes[i].id) {
      console.log("yes", resumes[i])
      setResumesTrueArray.push(resumes[i])
      console.log("setResumesTrueArray[0]", setResumesTrueArray[0].name)
    } 
}

  });



  return (
    <List className={classes.root}>   
    <p>{props.resumes}</p> 
    <ListItem alignItems="flex-start">
    <ListItemAvatar>
          <Filter1Icon/>
    </ListItemAvatar>
    <Card className={classes.root}>
      <CardActionArea href="https://docs.google.com/document/d/144VFARrTOFjBkTCGzJ2oj0-BVT4akh-gJAh4Wp0fLkI/edit?usp=sharing" target="_blank">
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Ramanpreet Kaur
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Ranked as the most qualified. 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button href="https://docs.google.com/document/d/144VFARrTOFjBkTCGzJ2oj0-BVT4akh-gJAh4Wp0fLkI/edit?usp=sharing" target="_blank" size="small" color="primary">
          Resume
        </Button>
      </CardActions>
    </Card>
    </ListItem>

    <ListItem alignItems="flex-start">
    <ListItemAvatar>
          <Filter2Icon/>
    </ListItemAvatar>
    <Card className={classes.root}>
      <CardActionArea href="https://docs.google.com/document/d/17jHXruJ6gyxRoPxtfoTjg5RdSuJj6vHQljyQbxIr3g0/edit?usp=sharing" target="_blank">
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Yakeen Y. Gazi  
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Ranked as the second the most qualified. 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button href="https://docs.google.com/document/d/17jHXruJ6gyxRoPxtfoTjg5RdSuJj6vHQljyQbxIr3g0/edit?usp=sharing" target="_blank" size="small" color="primary">
          Resume
        </Button>
      </CardActions>
    </Card>
    </ListItem>
    </List>
  );
}