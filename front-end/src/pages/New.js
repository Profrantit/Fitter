import React from "react";
import { Grid, Card, CardActionArea } from "@material-ui/core";
import News from "../images/new.jpg";
import New2 from "../images/new2.jpg";

export default function New() {
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
            "A year from now you may wish you had started today." – Karen Lamb
          </h2>
        </Grid>
        <Grid item lg={7}>
          {" "}
          <img src={News} style={{ height: "auto", width: "100%" }} />
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
            "Exercise is labor without weariness." – Samuel Johnson
          </h2>
        </Grid>
        <Grid item lg={7}>
          <img src={New2} style={{ height: "auto", width: "100%" }} />
        </Grid>
      </Grid>
      <div>
        <h1 style={{ textAlign: "center", color: "#e33b54" }}>
          Why go to the gym?
        </h1>
        <p style={{ textAlign: "center" }}>
          People are less active nowadays, partly because technology has made
          our lives easier. We drive cars or take public transport. Machines
          wash our clothes. We entertain ourselves in front of a TV or computer
          screen. Fewer people are doing manual work, and most of us have jobs
          that involve little physical effort. Work, household chores, shopping
          and other necessary activities are far less demanding than for
          previous generations.
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
            <a href="https://www.self.com/story/steps-to-take-start-working-out-for-first-time">
              <h2 className="links">Self.com</h2>
            </a>
          </Card>
        </Grid>
        <Grid item lg={5} sm={12} xs={12}>
          <Card>
            <a href="https://www.injurymap.com/">
              <h2 className="links">Injurymap.com</h2>
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
            <a href="https://www.puregym.com/blog/top-tips-for-starting-a-gym-routine/">
              <h2 className="links">Puregym</h2>
            </a>
          </Card>
        </Grid>
        <Grid item lg={5} sm={12} xs={12}>
          <Card>
            <a href="https://www.muscleandfitness.com/workout-plan/workouts/workout-routines/complete-mf-beginners-training-guide-plan/">
              <h2 className="links">Muscleandfitness.com</h2>
            </a>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
