import { FunctionComponent } from "react";
import styles from "./PopDestinationsMain.module.css";

export type PopDestinationsMainType = {
  className?: string;
};

const PopDestinationsMain: FunctionComponent<PopDestinationsMainType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.popDestinationsMain, className].join(" ")}>
      <div className={styles.destinationsTitles}>
        <div className={styles.titleContainer}>
          <b className={styles.planYourNext}>Plan your next trip</b>
          <h2 className={styles.mostPopularDestinations}>
            Most Popular Destinations
          </h2>
        </div>
        <div className={styles.viewAllTop}>
          <a className={styles.viewAllDestinations}>View all destinations</a>
          <img
            className={styles.arrowrighticon}
            alt=""
            src="/arrowrighticon@2x.png"
          />
        </div>
      </div>
      <div className={styles.cardsContainer}>
        <div className={styles.destinationcard}>
          <b className={styles.city}>Paris</b>
          <div className={styles.details}>
            <div className={styles.from}>from</div>
            <div className={styles.price}>$699</div>
          </div>
        </div>
        <div className={styles.destinationcard1}>
          <b className={styles.city1}>Greece</b>
          <div className={styles.details}>
            <div className={styles.from}>from</div>
            <div className={styles.price1}>$1079</div>
          </div>
        </div>
        <div className={styles.destinationcard2}>
          <b className={styles.city2}>Norway</b>
          <div className={styles.details}>
            <div className={styles.from}>from</div>
            <div className={styles.price2}>$895</div>
          </div>
        </div>
        <div className={styles.destinationcard3}>
          <b className={styles.city3}>Tuscany</b>
          <div className={styles.details}>
            <div className={styles.from}>from</div>
            <div className={styles.price1}>$1245</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopDestinationsMain;
