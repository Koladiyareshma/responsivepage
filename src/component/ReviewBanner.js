import { Button, Grid, Typography, styled, Container } from "@material-ui/core";
import React from "react";
import herouser from "../assets/img/herouser.jpg";
class ReviewBanner extends React.Component {
  render() {
    return (
      <>
        <ReviewBannerStyle>
          <Grid container item justifyContent="space-between">
            <Grid md={3} justifyContent="center">
              <Typography variant="h4" className="mt">
                We get you dont have time for mareketing
              </Typography>
              <Typography variant="h6" className="mt">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Inventore rerum quo ea saepe? Nihil laboriosam, ex eligendi in
                suscipit dicta.
              </Typography>
              <Button className="btnstyle mt">Schedule a Call</Button>
            </Grid>
            <Grid container md={6} justifyContent="space-between">
              <Grid md={5} container justifyContent="center">
                <img
                  src={herouser}
                  width={120}
                  height={120}
                  className="rounded"
                />
                <Typography>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Inventore rerum quo ea saepe? Nihil laboriosam, ex eligendi in
                  suscipit dicta.
                </Typography>
              </Grid>
              <Grid md={5} container justifyContent="center">
                <img
                  src={herouser}
                  width={120}
                  height={120}
                  className="rounded"
                />
                <Typography>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Inventore rerum quo ea saepe? Nihil laboriosam, ex eligendi in
                  suscipit dicta.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </ReviewBannerStyle>
      </>
    );
  }
}
export default ReviewBanner;
const ReviewBannerStyle = styled(Container)({
  "& .btnstyle": {
    backgroundColor: "white",
    color: "green",
  },
  "& .rounded": {
    borderRadius: "50%",
  },
  "& .mt": {
    margin: "16px 0px",
    "@media(max-width: 780px)": {
      display: "grid",
      margin: "16px auto",
    },
  },
});
