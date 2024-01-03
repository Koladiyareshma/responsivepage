import { Box, Button, Container, Grid, styled } from "@material-ui/core";
import React, { Component } from "react";
import herouser from "../assets/img/herouser.jpg";
export default class Sectionposition extends Component {
  render() {
    return (
      <SectionpositionStyle>
        <Box className="backgroundbg">
          <Container>
            <Grid container lg={12} spacing={2}>
              <Grid item lg={6}>
                <img src={herouser} width={"100%"} />
              </Grid>
              <Grid item lg={3} xs={12}>
                <h1 className="headingalign">
                  <span className="colorbg">
                    Our misssion is to bring you amazing client
                  </span>
                </h1>
                <p className="description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                  obcaecati nostrum distinctio voluptatum eligendi unde ut quod,
                  tempora molestias et facere dolore vero nesciunt, sapiente,
                  ipsa officia quisquam ab est vitae officiis?sit amet
                  consectetur adipisicing elit. Natus obcaecati nostrum
                  distinctio voluptatum eligendi unde ut quod, tempora molestias
                  et facere dolore vero nesciunt, sapiente, ipsa officia
                  quisquam ab est vitae officiis?
                </p>
                <Button className="btnsyle">Schedule a CALL</Button>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </SectionpositionStyle>
    );
  }
}
const SectionpositionStyle = styled("div")({
  "& .backgroundbg": {
    background: "green",
    padding: "66px 24px",
  },
  "& .description": {
    lineHeight: "20px",
  },
  "& .btnsyle": {
    marginTop: "12px",
    background: "orange",
    color: "White",
    padding: "12px 16px",
    borderRadius: "22px",
  },
  "& .headingalign": {
    marginLeft: "-36px",
    marginBottom: "24px",
    "@media(max-width: 780px)": {
      marginLeft: "0",
    },
  },
  "& .colorbg": {
    background: "lightyellow",
  },
});
