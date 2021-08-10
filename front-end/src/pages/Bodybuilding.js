import React from "react";
import { Grid, Card, CardActionArea } from "@material-ui/core";
import BodyOne from "../images/BodybuilderFe.jpg";
import BodyTwo from "../images/BodybuilderFe2.jpg";
import Logo1 from "../images/buildLogo.jpg";

export default function BodybuildingPage() {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item lg={6}>
          <h2 style={{ textAlign: "center" }}>
            {" "}
            "If you want something you’ve never had before, you have to be
            willing to do something you’ve never done before." – Phil Heath,
            4-time Mr Olympia.
          </h2>
        </Grid>
        <Grid item lg={6}>
          {" "}
          <img src={BodyTwo} style={{ height: "auto", width: "100%" }} />
        </Grid>
      </Grid>
      <br />
      <Grid
        container
        direction="row-reverse"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item lg={6}>
          <h2 style={{ textAlign: "center" }}>
            "If you have discipline, drive, determination, nothing is
            impossible." – Dana Linn Bailey, First Ever Women’s Physique Olympia
            Champion.
          </h2>
        </Grid>
        <Grid item lg={6}>
          <img src={BodyOne} style={{ height: "auto", width: "100%" }} />
        </Grid>
      </Grid>
      <div>
        <h1 style={{ textAlign: "center", color: "#e33b54" }}>
          The history of bodybuilding:
        </h1>
        <p style={{ textAlign: "center" }}>
          Bodybuilding developed in the late 19th century, promoted in England
          by German Eugen Sandow, now considered as the "Father of Modern
          Bodybuilding". ... The Oscar-winning 1936 musical film The Great
          Ziegfeld depicts the beginning of modern bodybuilding, when Sandow
          began to display his body for carnivals.
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
            <a href="https://www.muscleandfitness.com/">
              <h2 className="links">Muscle and Fitness.com</h2>
            </a>
          </Card>
        </Grid>
        <Grid item lg={5} sm={12} xs={12}>
          <Card>
            <a href="https://femalemuscle.com/">
              <h2 className="links">The Female Muscle.com</h2>
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
            <a href="https://www.bodybuilding.com/en-IN/index">
              <h2 className="links">Body Building.com</h2>
            </a>
          </Card>
        </Grid>
        <Grid item lg={5} sm={12} xs={12}>
          <Card>
            <a href="https://drjohnrusin.com/category/strength-training/">
              <h2 className="links">Dr. John Rusin.com</h2>
            </a>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
