import { Button, Container, Grid, Typography, styled } from "@material-ui/core";
import React from "react";
import { BackDrop } from "../App";
class CentreSection extends React.Component {
  render() {
    return (
      <CentreSectinStyle>
        <Grid
          container
          justifyContent="center"
          direction="column"
          alignItems="center"
          className="gappadding"
        >
          <Typography variant="h3">How it Works</Typography>
          <Typography className="mb" variant="h6">
            our these step process
          </Typography>
          <Grid container justifyContent="center">
            <Container>
              <Grid className="flexElement">
                <span className="font-24">1</span>
                <span className="font-20">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                  distinctio illum excepturi sunt esse aspernatur iusto aut
                </span>
              </Grid>
              <Grid className="flexElement">
                <span className="font-24">2</span>
                <span className="font-20">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                  distinctio illum excepturi sunt esse aspernatur iusto aut
                </span>
              </Grid>
              <Grid className="flexElement">
                <span className="font-24">3</span>
                <span className="font-20">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                  distinctio illum excepturi sunt esse aspernatur iusto aut
                </span>
              </Grid>
              <Grid container justifyContent="center">
                <Button className="btnstyle">Schedule a call</Button>
              </Grid>
            </Container>
          </Grid>
        </Grid>
      </CentreSectinStyle>
    );
  }
}
export default CentreSection;
const CentreSectinStyle = styled("div")({
  "& .flexElement": {
    marginBottom: "30px",
    display: "flex",
    gap: "36px",
    alignItems: "start",
  },
  "& .mb": {
    marginBottom: "26px",
  },
  "& .font-24": {
    fontSize: "36px",
    fontWeight: "800",
    color: "rgb(14, 129, 85)",
  },
  "& .font-20": {
    fontSize: "20px",
    fontWeight: "500",
    letterSpacing: "2px",
  },
  "& .btnstyle": {
    backgroundColor: "rgb(121, 196, 167)",
    padding: "12px 24px",
    color: "green",
  },
  "& .gappadding": {
    padding: "32px 0px",
    background: "lightyellow",
  },
});
