import BridgeComponent from "./Components/BridgeComponent";
import HeaderComponent from "./Components/HeaderComponent";
import HomeComponent from "./Components/HomeComponent";
import ImageGalleryComponent from "./Components/ImageGalleryComponent";
import InfoComponent from "./Components/InfoComponent";
import StepsComponent from "./Components/StepsComponent";

import './App.css'
import FeedBackComponent from "./Components/FeedBackComponent";
import WorldComponent from "./Components/WorldComponent";
import FooterComponent from "./Components/FooterComponent";
import { useEffect } from "react";

export default function App() {



  return (
    <>
      <HeaderComponent />
      <HomeComponent />
      <StepsComponent />
      <InfoComponent />
      <BridgeComponent />
      <ImageGalleryComponent />
      <FeedBackComponent />
      <WorldComponent />
      <FooterComponent />
    </>
  )
}