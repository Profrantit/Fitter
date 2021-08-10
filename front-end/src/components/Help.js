import { Grid, Paper, Typography, Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TestCard from "./TestCard";
import Bodybuilding from "./BodyBuildingCard";
import Crossfit from "./CrossfitCard";
import Aesthetic from "./AestheticCard ";
import Rehab from "./RehabCard";
import GettingStarted from "./GettingStartedCard";
import Motivation from "./Motivation";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

const Help = () => {
  const classes = useStyles();
  return (
    <>
      <h1 style={{ textAlign: "center", color: "#e33b54" }}>
        Some helpful sites
      </h1>
      <h4 style={{ textAlign: "center", color: "#e33b54" }}>
        There are may ways to get fit or healty, here below you can find some
        options. but remember the only one who knows your body best is YOURSELF
      </h4>
      <hr />
      <h1 style={{ textAlign: "center", color: "#e33b54" }}>
        Click Image to get started
      </h1>
      <br />

      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item lg={4} sm={12} xs={12}>
          <Bodybuilding />
        </Grid>
        <Grid item lg={4} sm={12} xs={12}>
          <Crossfit />
        </Grid>
        <Grid item lg={4} sm={12} xs={12}>
          <Aesthetic />
        </Grid>
        <Grid item lg={4} sm={12} xs={12}>
          <Rehab />
        </Grid>
        <Grid item lg={4} sm={12} xs={12}>
          <GettingStarted />
        </Grid>
        <Grid item lg={4} sm={12} xs={12}>
          <Motivation />
        </Grid>
      </Grid>
    </>
  );
};

export default Help;
