import { FunctionComponent } from "react";
import HotelCard from "./HotelCard";
import styles from "./PopularStays.module.css";

export type PopularStaysType = {
  className?: string;
};

const PopularStays: FunctionComponent<PopularStaysType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.popularStays, className].join(" ")}>
      <div className={styles.popularStaysParent}>
        <h2 className={styles.popularStays1}>Popular Stays</h2>
        <div className={styles.viewAllStaysButtonWrapper}>
          <div className={styles.viewAllStaysButton}>
            <a className={styles.viewAllStays}>View all stays</a>
            <img
              className={styles.arrowrighticon}
              alt=""
              src="/arrowrighticon-1@2x.png"
            />
          </div>
        </div>
      </div>
      <div className={styles.hotelCards}>
        <div className={styles.hotelcard}>
          <img className={styles.imageIcon} alt="" src="/image-4@2x.png" />
          <div className={styles.stayDetails}>
            <div className={styles.stayDetailsRows}>
              <div className={styles.hoteltype}>Entire bungalow</div>
              <b className={styles.hotelname}>Matterhorn Suites</b>
              <div className={styles.price}>$575/night</div>
            </div>
            <img
              className={styles.videoIcon}
              loading="lazy"
              alt=""
              src="/video.svg"
            />
          </div>
          <div className={styles.rating}>
            <div className={styles.vectorParent}>
              <img
                className={styles.vectorIcon}
                loading="lazy"
                alt=""
                src="/vector.svg"
              />
              <div className={styles.rating1}>4.9</div>
            </div>
            <a className={styles.reviews}>(60 reviews)</a>
          </div>
          <div className={styles.moreDetailsButton}>
            <div className={styles.button}>More details</div>
          </div>
        </div>
        <HotelCard
          image="/image-5@2x.png"
          hotelType="2-Story beachfront suite"
          hotelName="Discovery Shores"
          price="$360/night"
          rating="4.8"
          reviews="(116 reviews)"
        />
        <HotelCard
          image="/image-6@2x.png"
          hotelType="Single deluxe hut"
          hotelName="Arctic Hut "
          price="$420/night"
          rating="4.7"
          reviews="(78 reviews)"
          propMinWidth="74"
        />
        <HotelCard
          image="/image-7@2x.png"
          hotelType="Lake Louise Inn"
          hotelName="Arctic Hut "
          price="$224/night"
          rating="4.6"
          reviews="(63 reviews)"
          propMinWidth="74"
        />
      </div>
    </div>
  );
};

export default PopularStays;
