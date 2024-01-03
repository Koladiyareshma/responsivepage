import { Button, Card, Container, Grid, styled } from "@material-ui/core";
import React, { Component } from "react";

class ResultSection extends Component {
  render() {
    return (
      <GridSectionStyle>
        <Grid
          container
          justifyContent="space-around"
          className="gridcomponent"
          spacing={2}
        >
          <Grid item xs={12} md={3}>
            <Card className="cards">
              <div>
                <p>Package Name</p>
                <p>$1200</p>
              </div>
              <div>
                <p className="small-text">
                  orem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae, non.
                </p>
              </div>
              <Button className="btnstyle">Sign Up</Button>
            </Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card className="cards">
              <div>
                <p>Package Name</p>
                <p>$1200</p>
              </div>
              <div>
                <p className="small-text">
                  orem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae, non.
                </p>
              </div>
              <Button className="btnstyle">Sign Up</Button>
            </Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card className="cards">
              <div>
                <p>Package Name</p>
                <p>$1200</p>
              </div>
              <div>
                <p className="small-text">
                  orem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae, non.
                </p>
              </div>
              <Button className="btnstyle">Sign Up</Button>
            </Card>
          </Grid>
        </Grid>
      </GridSectionStyle>
    );
  }
}
export default ResultSection;
const GridSectionStyle = styled(Container)({
  "& .gridcomponent": {
    padding: "64px 24px",
  },
  "& .cards": {
    padding: "22px 10px",
    background: "orange",
    color: "white",
    fontSize: "22px",
    textAlign: "center",
    display: "grid",
    gap: "16px",
    justifyItems: "center",
    alignItems: "center",
  },
  "& .small-text": {
    fontSize: "16px",
  },
  "& .btnstyle": {
    padding: "4px",
    background: "yellow",
  },
});
