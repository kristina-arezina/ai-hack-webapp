import React from 'react';
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

export default function RankingList() {
  const classes = useStyles();

  return (
    <List className={classes.root}>    
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