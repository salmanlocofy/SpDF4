import { FunctionComponent } from "react";
import HolidayCard from "./HolidayCard";
import styles from "./RecommendedHolidaysContainer.module.css";

export type RecommendedHolidaysContainerType = {
  className?: string;
};

const RecommendedHolidaysContainer: FunctionComponent<
  RecommendedHolidaysContainerType
> = ({ className = "" }) => {
  return (
    <div className={[styles.recommendedHolidaysContainer, className].join(" ")}>
      <div className={styles.recTitle}>
        <h2 className={styles.recommendedHolidays}>Recommended Holidays</h2>
        <div className={styles.viewAllHolidaysParent}>
          <a className={styles.viewAllHolidays}>View all holidays</a>
          <img
            className={styles.arrowrighticon}
            alt=""
            src="/arrowrighticon-1@2x.png"
          />
        </div>
      </div>
      <div className={styles.recCardsContainer}>
        <HolidayCard image="/image@2x.png" id="4D3N" price="$899" />
        <HolidayCard
          image="/image-1@2x.png"
          id="6D5N"
          price="$900"
          propMinWidth="118"
          propMinWidth1="75"
        />
        <HolidayCard
          image="/image-2@2x.png"
          id="5D4N"
          price="$699"
          propMinWidth="120"
          propMinWidth1="72"
        />
        <HolidayCard
          image="/image-3@2x.png"
          id="4D3N"
          price="$789"
          propMinWidth="121"
          propMinWidth1="70"
        />
      </div>
      <div className={styles.viewAllHolidaysParent}>
        <div className={styles.viewAllHolidays1}>View all holidays</div>
        <img
          className={styles.arrowRightIcon}
          loading="lazy"
          alt=""
          src="/arrowright.svg"
        />
      </div>
    </div>
  );
};

export default RecommendedHolidaysContainer;
