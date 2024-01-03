import { Box, Container, Grid, styled } from "@material-ui/core";
import React, { Component } from "react";

export default class FooterSection extends Component {
  render() {
    return (
      <FooterSectionStyle>
        <Box className="backgroundbg">
          <Container className="gridsection">
            <Grid className="gridsection2" container lg={12}>
              <Grid className="gap-12" item lg={3} xs={12}>
                <h1>Logo</h1>
                <Grid>
                  <span className="icon">F</span>
                  <span className="icon">T</span>
                  <span className="icon">W</span>
                </Grid>
              </Grid>
              <Grid className="gap-12" lg={3} xs={12}>
                <h1>About</h1>
                <div>
                  <p>About</p>
                  <p>Contact</p>
                </div>
              </Grid>
              <Grid className="gap-12" lg={3} xs={12}>
                <h1>About</h1>
                <div>
                  <p>About</p>
                  <p>Contact</p>
                </div>
              </Grid>
            </Grid>
            <Grid lg={12} className="gridsection2" justifyContent="center">
              &copy; Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quisquam, nam.
            </Grid>
          </Container>
        </Box>
      </FooterSectionStyle>
    );
  }
}
const FooterSectionStyle = styled("div")({
  "& .backgroundbg": {
    background: "palegreen",
    padding: "64px 0px",
  },
  " & .gridsection": {
    display: "grid",
    gap: "24px",
  },
  " & .gridsection2": {
    display: "grid",
    gridAutoFlow: "column",
    justifyItems: "center",
  },
  " & .gap-12": {
    display: "grid",
    gap: "24px",
  },
  "& .icon": {
    padding: "10px 12px",
    borderRadius: "50%",
    background: "black",
    color: "white",
    margin: "0 2px",
  },
});
