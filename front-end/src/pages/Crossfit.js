import React from "react";
import { Grid, Card, CardActionArea } from "@material-ui/core";
import CrossOne from "../images/CrossfitOne.jpg";
import CrossTwo from "../images/CrossTwo.jpg";

export default function CrossfitPage() {
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
            "I am going to do today what other people aren't willing to so I can
            do today what other people can't... Trusting the hard work that I am
            putting in will pay off." —Matthew Fraser
          </h2>
        </Grid>
        <Grid item lg={7}>
          {" "}
          <img src={CrossOne} style={{ height: "auto", width: "100%" }} />
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
            “The human body is an incredible machine, but most people only get
            out of that machine what their mind allows them to.”- Rich Froning
          </h2>
        </Grid>
        <Grid item lg={7}>
          <img src={CrossTwo} style={{ height: "auto", width: "100%" }} />
        </Grid>
      </Grid>
      <div>
        <h1 style={{ textAlign: "center", color: "#e33b54" }}>
          The history of Crossfit:
        </h1>
        <p style={{ textAlign: "center" }}>
          The original CrossFit gym was in Santa Cruz, California, and the first
          affiliated gym was CrossFit North in Seattle, Washington; there were
          13 by 2005, and in 2016 there were more than 13,000. By 2020, there
          were approximately 15,000 CrossFit affiliates around the world.
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
            <a href="https://shruggedcollective.com/">
              <h2 className="links">Shruggedcollective.com</h2>
            </a>
          </Card>
        </Grid>
        <Grid item lg={5} sm={12} xs={12}>
          <Card>
            <a href="https://www.crossfit.com/">
              <h2 className="links"> Crossfit.com</h2>
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
            <a href="https://www.crossfitnordic.se">
              <h2 className="links">Crossfit Nordic.com</h2>
            </a>
          </Card>
        </Grid>
        <Grid item lg={5} sm={12} xs={12}>
          <Card>
            <a href="https://www.mayhemnation.com/">
              <h2 className="links">Crossfit Mayhem Freedom.com</h2>
            </a>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
