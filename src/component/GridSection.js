import {
  AppBar,
  Box,
  Card,
  Container,
  Grid,
  Toolbar,
  Typography,
  styled,
  GridContainer,
} from "@material-ui/core";
import React from "react";

class GridSection extends React.Component {
  render() {
    return (
      <GridSectionStyle>
        <Grid
          container
          justifyContent="space-around"
          className="gridcomponent"
          spacing={3}
        >
          <Grid item xs={12} md={2}>
            <Card className="cards">
              <p>Stop Wasting Effort and Money</p>
            </Card>
          </Grid>
          <Grid item xs={12} md={2}>
            <Card className="cards">
              <p>Stop Wasting Effort and Money</p>
            </Card>
          </Grid>
          <Grid item xs={12} md={2}>
            <Card className="cards">
              <p>Stop Wasting Effort and Money</p>
            </Card>
          </Grid>
        </Grid>
      </GridSectionStyle>
    );
  }
}
export default GridSection;
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
  },
});
