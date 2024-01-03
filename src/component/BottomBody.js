import { Box, Button, Container, Grid, styled } from "@material-ui/core";
import React, { Component } from "react";

export default class extends Component {
  render() {
    return (
      <BottomBodyStyle>
        <Box className="gridgap">
          <Grid container justifyContent="center">
            <h1 className="align-center">Well , What are You Waiting For</h1>
          </Grid>
          <Grid container justifyContent="center">
            <Button className="btnstyle">Schedule A Call</Button>
          </Grid>
        </Box>
      </BottomBodyStyle>
    );
  }
}
const BottomBodyStyle = styled(Container)({
  "& .gridgap": {
    padding: "72px 0px",
    display: "grid",
    gap: "24px",
  },
  "& .btnstyle": {
    backgroundColor: "GREEN",
    padding: "16px 12px",
    color: "White",
    borderRadius: "30px",
    fontWeight: "800",
  },
  "& .align-center": {
    textAlign: "center",
  },
});
