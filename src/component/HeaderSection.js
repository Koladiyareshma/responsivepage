import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import { Box, Button, Container, makeStyles, styled } from "@material-ui/core";

class HeaderSection extends React.Component {
  render() {
    return (
      <>
        <HeaderStyle>
          <Box className="backgroundImage">
            <Container className="asdf">
              <Navbar />
              <HeroSection />
            </Container>
          </Box>
        </HeaderStyle>
      </>
    );
  }
}
export default HeaderSection;

const HeaderStyle = styled(Box)({
  "& .backgroundImage": {
    backgroundImage:
      'url("https://images.pexels.com/photos/1883386/pexels-photo-1883386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
  "& .asdf": {
    padding: "32px 0px",
  },
});
