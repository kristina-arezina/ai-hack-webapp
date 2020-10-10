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
    maxWidth: "80%",
    minWidth: "70%",
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

export default function RankingListItem() {
  const classes = useStyles();

  return (
    <List className={classes.root}>    
    <ListItem alignItems="flex-start">
    <ListItemAvatar>
          <Filter1Icon/>
    </ListItemAvatar>
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Teo Mackenzie
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Ranked as the most qualified. 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
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
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Greg Davis 
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Ranked as the second the most qualified. 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Resume
        </Button>
      </CardActions>
    </Card>
    </ListItem>
    </List>
  );
}