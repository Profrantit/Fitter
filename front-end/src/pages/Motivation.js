import React from "react";
import { Grid, Card, CardActionArea } from "@material-ui/core";
import Motiv2 from "../images/motiv2.jpg";
import Motiv from "../images/motiv.jpg";

export default function MotivationPage() {
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
            “You’ve gotta dance like there’s nobody watching, love like you’ll
            never be hurt, sing like there’s nobody listening, and live like
            it’s heaven on earth.” ― William W. Purkey
          </h2>
        </Grid>
        <Grid item lg={7}>
          {" "}
          <img src={Motiv} style={{ height: "auto", width: "100%" }} />
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
            “All our dreams can come true, if we have the courage to pursue
            them.” – Walt Disney"Exercise is labor without weariness." – Samuel
            Johnson
          </h2>
        </Grid>
        <Grid item lg={7}>
          <img src={Motiv2} style={{ height: "auto", width: "100%" }} />
        </Grid>
      </Grid>
      <div>
        <h1 style={{ textAlign: "center", color: "#e33b54" }}>
          What is Motivation even?
        </h1>
        <p style={{ textAlign: "center" }}>
          Why is it important to understand motivation? Why do we care about
          what people want and why they want it? How about because it can
          improve our lives. Understanding motivation gives us many valuable
          insights into human nature. It explains why we set goals, strive for
          achievement and power, why we have desires for psychological intimacy
          and biological sex, why we experience emotions like fear, anger, and
          compassion. Learning about motivation is valuable because it helps us
          understand where motivation comes from, why it changes, what increases
          and decreases it, what aspects of it can and cannot be changed, and
          helps us answer the question of why some types of motivation are more
          beneficial than others.
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
            <a href="https://motivationgrid.com/">
              <h2 className="links">Motivationgrid</h2>
            </a>
          </Card>
        </Grid>
        <Grid item lg={5} sm={12} xs={12}>
          <Card>
            <a href="https://www.marcandangel.com/">
              <h2 className="links">Marcandangel.com</h2>
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
            <a href="https://www.ted.com/talks">
              <h2 className="links">Ted.com</h2>
            </a>
          </Card>
        </Grid>
        <Grid item lg={5} sm={12} xs={12}>
          <Card>
            <a href="https://www.youtube.com/watch?v=tbnzAVRZ9Xc">
              <h2 className="links">Youtube Motivation</h2>
            </a>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
