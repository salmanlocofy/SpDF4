import { FunctionComponent } from "react";
import Header from "../components/Header";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import PopDestinationsMain from "../components/PopDestinationsMain";
import RecommendedHolidaysContainer from "../components/RecommendedHolidaysContainer";
import PopularStays from "../components/PopularStays";
import SubscribeSection from "../components/SubscribeSection";
import Footer from "../components/Footer";
import styles from "./Homepage.module.css";

const Homepage: FunctionComponentHomepageType = () => {
  return (
    <div className={styles.homepage}>
      <Header />
      <FrameComponent1 />
      <section className={styles.homeContentsWrapper}>
        <div className={styles.homeContents}>
          <FrameComponent />
          <PopDestinationsMain />
          <RecommendedHolidaysContainer />
          <PopularStays />
        </div>
      </section>
      <section className={styles.subscribesectionParent}>
        <SubscribeSection />
        <Footer />
      </section>
    </div>
  );
};

export default Homepage;
