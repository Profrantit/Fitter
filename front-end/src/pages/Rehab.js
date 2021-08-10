import React from "react";
import { Grid, Card, CardActionArea } from "@material-ui/core";
import rehab2 from "../images/rehab2.jpg";
import rehab from "../images/rehabone.jpg";

export default function RehabPage() {
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
            “Write your injuries in dust, your benefits in marble” - Benjamin
            Franklin
          </h2>
        </Grid>
        <Grid item lg={7}>
          {" "}
          <img src={rehab} style={{ height: "auto", width: "100%" }} />
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
            “Turn your setbacks into comebacks” - Anonymous
          </h2>
        </Grid>
        <Grid item lg={7}>
          <img src={rehab2} style={{ height: "auto", width: "100%" }} />
        </Grid>
      </Grid>
      <div>
        <h1 style={{ textAlign: "center", color: "#e33b54" }}>
          The history of muscle rehabilitation:
        </h1>
        <p style={{ textAlign: "center" }}>
          In 1921, Franklin Delano Roosevelt (FDR) developed a high fever and
          lower extremity paralysis from a polio virus infection. His bout with
          polio necessitated his rehabilitation at Warm Springs, Georgia, where
          therapeutic swimming and sun exposure were believed to help him regain
          leg strength and physical endurance. An avid proponent of
          rehabilitation, FDR bought the property at Warm Springs and turned it
          into a comprehensive rehabilitative center to help others affected
          with polio regain independence in activities of daily living. The
          services offered there included heliotherapy, swimming, exercise,
          training in orthotic use, muscle re-education, massage, and
          occupational and recreational therapy. Warm Springs, Georgia, is
          believed by many historians to be the first facility to provide
          comprehensive rehabilitative care
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
            <a href="https://www.physio-pedia.com/Muscle_Injuries">
              <h2 className="links">Physio-pedia.com</h2>
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
            <a href="https://www.henryford.com/blog/2018/08/hot-cold-therapy-whats-best-for-muscle-recovery">
              <h2 className="links">Henryford.com</h2>
            </a>
          </Card>
        </Grid>
        <Grid item lg={5} sm={12} xs={12}>
          <Card>
            <a href="https://www.painscience.com/articles/strength-training.php">
              <h2 className="links">Painscience.com</h2>
            </a>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
