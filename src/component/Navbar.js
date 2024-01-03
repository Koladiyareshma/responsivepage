import { AppBar, Toolbar, Typography, styled } from "@material-ui/core";
import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <NavbarStyle>
        <div className="gridview">
          <div>
            <Typography>Logo</Typography>
          </div>
          <div className="gap">
            <Typography>Home</Typography>
            <Typography>Home</Typography>
            <Typography>Home</Typography>
            <Typography>Home</Typography>
          </div>
        </div>
      </NavbarStyle>
    );
  }
}
export default Navbar;
const NavbarStyle = styled("div")({
  "& .gridview": {
    display: "grid",
    gridAutoFlow: "column",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: "24px",
  },
  "& .gap": {
    display: "grid",
    gridAutoFlow: "column",
    gap: "32px",
  },
});
