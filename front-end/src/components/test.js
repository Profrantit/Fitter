import React from "react";

import Grid from "@material-ui/core/Grid";

import AvatarImg from "../images/profileOne.jpg";
import AvatarImgTwo from "../images/profileTwo.jpg";
export default function FixedContainer() {
  return (
    <>
      <h1 className="past">Past users</h1>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item lg={6} style={{ textAlign: "center" }}>
          {" "}
          <h4 className="animeTitle">Monica 23 - from Stockholm</h4>
          Lorem is very simple to use. Easy interface, simple interactions with
          experts and quick matching process to qualified individuals. Like the
          product, have already recommended it to others and will certainly be
          using it again given its affordable cost comparative to other options.
        </Grid>
        <Grid item item lg={6} style={{ textAlign: "center" }}>
          <div className="animateBtn">
            <img
              src={AvatarImg}
              style={{ borderRadius: "50%", height: "300px" }}
            />
          </div>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row-reverse"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item lg={6} style={{ textAlign: "center" }}>
          {" "}
          <h4 className="animeTitle">Edvin 29 - from Luleå</h4>
          Lorem is very simple to use. Easy interface, simple interactions with
          experts and quick matching process to qualified individuals. Like the
          product, have already recommended it to others and will certainly be
          using it again given its affordable cost comparative to other options.
        </Grid>
        <Grid item item lg={6} style={{ textAlign: "center" }}>
          <div className="animateBtn">
            <img
              src={AvatarImgTwo}
              style={{ borderRadius: "50%", height: "300px" }}
            />
          </div>
        </Grid>
      </Grid>
    </>
  );
}
