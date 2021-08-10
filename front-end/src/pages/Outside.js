import React from "react";
import { Grid, Card, CardActionArea } from "@material-ui/core";
import Aesth2 from "../images/aesth2.jpg";
import Aesth from "../images/easth.jpg";

export default function Outside() {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item lg={5}>
          <h2 style={{ textAlign: "center" }}>
            {" "}
            “Today begins, tomorrow continues, and it never ends until you reach
            your goal.” – Greg Plitt
          </h2>
        </Grid>
        <Grid item lg={7}>
          {" "}
          <img src={Aesth} style={{ height: "auto", width: "100%" }} />
        </Grid>
      </Grid>
      <br />
      <Grid
        container
        direction="row-reverse"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item lg={5}>
          <h2 style={{ textAlign: "center" }}>
            “You must believe in yourself enough to be the person now that you
            want others to remember you for later.” - Greg Plitt
          </h2>
        </Grid>
        <Grid item lg={7}>
          <img src={Aesth2} style={{ height: "auto", width: "100%" }} />
        </Grid>
      </Grid>
      <div>
        <h1 style={{ textAlign: "center", color: "#e33b54" }}>
          The history of Aesthetic/Calisthenics:
        </h1>
        <p style={{ textAlign: "center" }}>
          The word calisthenics comes from the ancient Greek words kállos
          (κάλλος), which means "beauty" (to emphasize the aesthetic pleasure
          that derives from the perfection of the human body), and sthenos
          (σθένος), meaning "strength" (great mental strength, courage,
          strength, and determination). It is the art of using one's body weight
          as resistance in order to develop physique. The practice was recorded
          in use in Ancient Greece, including the armies of Alexander the Great
          and the Spartans at the Battle of Thermopylae. Calisthenics was also
          recorded to have been in use in Ancient China. Besides dieting, Han
          Dynasty physicians also prescribed calisthenics as one of the methods
          of maintaining one's health.
        </p>
      </div>
      <h1 className="links">Useful sites:</h1>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item lg={5} sm={12} xs={12}>
          <Card>
            <a href="https://schoolofcalisthenics.com/">
              <h2 className="links">School of Calisthenics</h2>
            </a>
          </Card>
        </Grid>
        <Grid item lg={5} sm={12} xs={12}>
          <Card>
            <a href="https://fitbodybuzz.com/calisthenics-teachers/">
              <h2 className="links">Fitbuzz.com</h2>
            </a>
          </Card>
        </Grid>
      </Grid>
      <br />
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item lg={5} sm={12} xs={12}>
          <Card>
            <a href="https://oldschoolcalisthenics.com/">
              <h2 className="links">Oldschoolcalisthenics.com</h2>
            </a>
          </Card>
        </Grid>
        <Grid item lg={5} sm={12} xs={12}>
          <Card>
            <a href="https://www.muscleandstrength.com/">
              <h2 className="links">MaS.com</h2>
            </a>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
