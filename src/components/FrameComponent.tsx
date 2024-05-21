import { FunctionComponent } from "react";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.recentSearchesParent}>
        <b className={styles.recentSearches}>Recent Searches</b>
        <div className={styles.flightmaincontainerParent}>
          <div className={styles.flightmaincontainer}>
            <div className={styles.toAndFrom}>
              <div className={styles.details}>
                <b className={styles.departurecitycode}>SIN</b>
                <b className={styles.departurecity}>Singapore</b>
              </div>
              <div className={styles.flightIconsWrapper}>
                <div className={styles.flightIcons}>
                  <div className={styles.pointWrapper}>
                    <div className={styles.point} />
                  </div>
                  <div className={styles.flightIconsInner}>
                    <div className={styles.frameChild} />
                  </div>
                  <img
                    className={styles.ionairplaneIcon}
                    loading="lazy"
                    alt=""
                    src="/ionairplane.svg"
                  />
                  <div className={styles.flightIconsInner}>
                    <div className={styles.frameChild} />
                  </div>
                  <div className={styles.pointWrapper}>
                    <div className={styles.point} />
                  </div>
                </div>
              </div>
              <div className={styles.detailsWrapper}>
                <div className={styles.details1}>
                  <div className={styles.destinationcitycodeWrapper}>
                    <b className={styles.destinationcitycode}>LAX</b>
                  </div>
                  <b className={styles.destinationcity}>Los Angeles</b>
                </div>
              </div>
            </div>
            <div className={styles.flightmaincontainerInner}>
              <div className={styles.departOnParent}>
                <b className={styles.departOn}>Depart on:</b>
                <b className={styles.date}>7 Sep 2021</b>
              </div>
            </div>
          </div>
          <div className={styles.flightmaincontainer}>
            <div className={styles.toAndFrom}>
              <div className={styles.details}>
                <b className={styles.departurecitycode1}>LHR</b>
                <b className={styles.departurecity1}>London</b>
              </div>
              <div className={styles.flightIconsWrapper}>
                <table className={styles.flightIcons1} />
              </div>
              <div className={styles.detailsWrapper}>
                <div className={styles.details3}>
                  <b className={styles.destinationcitycode1}>DUB</b>
                  <div className={styles.destinationcityWrapper}>
                    <b className={styles.destinationcity1}>Dubai</b>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.flightmaincontainerInner}>
              <div className={styles.departOnParent}>
                <b className={styles.departOn}>Depart on:</b>
                <b className={styles.date}>9 Sep 2021</b>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.prepareMenu}>
        <div className={styles.prepareForYour}>Prepare for your trip</div>
        <div className={styles.tripMenus}>
          <div className={styles.tripitem}>
            <img className={styles.icon} alt="" src="/icon-1@2x.png" />
            <div className={styles.text}>Hotel</div>
          </div>
          <div className={styles.tripitem}>
            <img className={styles.icon} alt="" src="/icon-2@2x.png" />
            <div className={styles.text1}>Attractions</div>
          </div>
          <div className={styles.tripitem}>
            <img className={styles.icon} alt="" src="/icon-3@2x.png" />
            <div className={styles.text}>Eats</div>
          </div>
          <div className={styles.tripitem}>
            <img className={styles.icon} alt="" src="/icon-4@2x.png" />
            <div className={styles.text}>Commute</div>
          </div>
          <div className={styles.tripitem}>
            <img className={styles.icon} alt="" src="/icon-5@2x.png" />
            <div className={styles.text}>Taxi</div>
          </div>
          <div className={styles.tripitem}>
            <img className={styles.icon} alt="" src="/icon-6@2x.png" />
            <div className={styles.text}>Movies</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
