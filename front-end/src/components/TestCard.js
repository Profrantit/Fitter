import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ImgTest from "../images/imgOne.jpg";
import { Link } from "@material-ui/core";
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginTop: 20
  },
  media: {
    height: 140
  }
});

export default function TestCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={ImgTest}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            bodybuilding
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          <Link>
            <a href="https://github.com/strapi/foodadvisor/blob/master/client/src/components/FiltersGroup/index.js">
              test
            </a>
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
}
