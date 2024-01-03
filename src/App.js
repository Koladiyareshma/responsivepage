import "./App.css";
import {
  AppBar,
  Button,
  Grid,
  Toolbar,
  Typography,
  styled,
} from "@material-ui/core";
import Navbar from "./component/Navbar";
import HeaderSection from "./component/HeaderSection";
import GridSection from "./component/GridSection";
import HeroSection from "./component/HeroSection";
import ReviewBanner from "./component/ReviewBanner";
import CentreSection from "./component/CentreSection";
import InputSection from "./component/InputSection";
import BottomBody from "./component/BottomBody";
import FooterSection from "./component/FooterSection";
import Sectionposition from "./component/Sectionposition";
import ResultSection from "./component/ResultSection";
import MymapComponent from "./component/MymapComponent";

function App() {
  return (
    <div className="App">
      <HeaderSection />
      <GridSection />
      <BackDrop>
        <div className="HeroSectionBckground">
          <HeroSection direction={"row-reverse"} />
        </div>
      </BackDrop>
      <BackDrop>
        <div className="backgroundReview">
          <ReviewBanner />
        </div>
      </BackDrop>
      <MymapComponent />
      <ResultSection />
      <CentreSection />
      <Sectionposition />
      <InputSection />
      <BottomBody />
      <FooterSection />
    </div>
  );
}

export default App;

export const BackDrop = styled("div")({
  "& .HeroSectionBckground": {
    background: "lightgreen",
    padding: "32px 16px",
    overflowX: "hidden",
  },
  "& .backgroundReview": {
    background: "lightblue",
    padding: "56px 0px",
  },
  "& .backgroundCentrSection": {
    background: "lightpink",
    padding: "56px 0px",
  },
  "& .flexContent": {
    display: "flex",
  },
});
