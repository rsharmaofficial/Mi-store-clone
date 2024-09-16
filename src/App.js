import "./App.css";
import PreNavbar from "./Components/PreNavbar";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Slider from "./Components/Slider";
import Data from "./Data/data.json";
import Offers from "./Components/Offers.js";
import Heading from "./Components/Heading.js";
import StarProduct from "./Components/StarProduct.js";
import HotAccessoriesMenu from "./Components/HotAccessoriesMenu.js";
import HotAccessories from "./Components/HotAccessories.js";
import ProductReviews from "./Components/ProductReviews.js";
import Videos from "./Components/Videos.js";
import Banner from "./Components/Banner.js";
import Footer from "./Components/Footer.js";

function App() {
  console.log("Data:", Data); // Log the data to ensure it's loaded

  return (
    <Router>
      <PreNavbar />
      <Navbar />
      <Slider start={Data.banner.start} />
      <Offers offer={Data.offer} />
      <Heading Text="Star Products" />
      <StarProduct starProduct={Data.starProduct} />
      <Heading Text="Hot Accessories" />
      <HotAccessoriesMenu />
      <Routes>
        <Route
          path="/music"
          element={
            <HotAccessories
              music={Data.hotAccessories.music}
              musicCover={Data.hotAccessoriesCover.music}
            />
          }
        />
        <Route
          path="/smartDevice"
          element={
            <HotAccessories
              smartDevice={Data.hotAccessories.smartDevice}
              smartDeviceCover={Data.hotAccessoriesCover.smartDevice}
            />
          }
        />
        <Route
          path="/home"
          element={
            <HotAccessories
              home={Data.hotAccessories.home}
              homeCover={Data.hotAccessoriesCover.home}
            />
          }
        />
        <Route
          path="/lifestyle"
          element={
            <HotAccessories
              lifeStyle={Data.hotAccessories.lifeStyle}
              lifeStyleCover={Data.hotAccessoriesCover.lifeStyle}
            />
          }
        />
        <Route
          path="/mobileAccessories"
          element={
            <HotAccessories
              mobileAccessories={Data.hotAccessories.mobileAccessories}
              mobileAccessoriesCover={
                Data.hotAccessoriesCover.mobileAccessories
              }
            />
          }
        />
      </Routes>
      <Heading Text="Product reviews" />

      <ProductReviews ProductReviews={Data.productReviews} />
      <Heading Text="VIDEOS" />

      <Videos Videos={Data.videos} />

      <Heading Text="IN THE PRESS" />

      <Banner banner={Data.banner} />
      <Footer footer={Data.footer} />
    </Router>
  );
}

export default App;
