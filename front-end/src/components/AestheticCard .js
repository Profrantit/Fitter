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
    marginTop: 20,
    height: 300
  },
  media: {
    height: 140
  }
});

export default function Aesthetic() {
  const classes = useStyles();

  return (
    <div className="animateBtn">
      <Card className={classes.root}>
        <CardActionArea>
          <a href="/Aeshetics">
            <CardMedia
              className={classes.media}
              image={ImgTest}
              title="Contemplative Reptile"
            />
          </a>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Aesthetic
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Wanna stand around in the outdoor gyms looking real cool? Well
              click here
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            variant="contained"
            color="secondary"
            href="https://github.com/strapi/foodadvisor/blob/master/client/src/components/FiltersGroup/index.js"
          >
            to other site here
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
