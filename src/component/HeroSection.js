import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  styled,
} from "@material-ui/core";
import React from "react";
import herouser from "../assets/img/herouser.jpg";
class HeroSection extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <HeroStyle>
          <Grid
            container
            item
            className="mt-xl"
            direction={this.props.direction}
            spacing={4}
          >
            <Grid item lg={6} xs={12} justifyContent="center">
              <Grid item spacing={4}>
                {this.props.direction && (
                  <Typography variant="h5">Time to Make Change</Typography>
                )}
                <Typography variant="h2" className="mb ">
                  Get the Client Always Wanted
                </Typography>
                <Typography variant="h5" className="mb ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                  totam earum cupiditate debitis voluptas in fugiat voluptate
                  illo officia nostrum?
                </Typography>
                <Button className="btnstyle">Schedule a call</Button>
              </Grid>
            </Grid>
            <Grid
              justifyContent="center"
              container
              lg={6}
              xs={12}
              alignItems="center"
            >
              <img src={herouser} width="100%" className="heroimage" />
            </Grid>
          </Grid>
        </HeroStyle>
      </>
    );
  }
}
export default HeroSection;

const HeroStyle = styled(Container)({
  "& .mt-xl": {
    padding: "72px 16px",
  },
  "& .btnstyle": {
    backgroundColor: "white",
    color: "green",
    padding: "16px 12px",
    borderRadius: "32px",
    fontWeight: "800",
  },
  "& .heroimage": {
    borderRadius: "50%",
    height: "100%",
    maxWidth: "400px",
  },
  "& .mb": {
    marginBottom: "32px",
  },
});
