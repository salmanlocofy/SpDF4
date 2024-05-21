import { FunctionComponent } from "react";
import styles from "./Footer.module.css";

export type FooterType = {
  className?: string;
};

const Footer: FunctionComponent<FooterType> = ({ className = "" }) => {
  return (
    <footer className={[styles.footer, className].join(" ")}>
      <div className={styles.fickleflightBioParent}>
        <div className={styles.fickleflightBio}>
          <img
            className={styles.logowhiteIcon}
            loading="lazy"
            alt=""
            src="/logowhite@2x.png"
          />
          <p className={styles.fickleFlightIs}>
            Fickle Flight is your one-stop travel portal. We offer hassle free
            flight and hotel bookings. We also have all your flight needs in you
            online shop.
          </p>
          <div className={styles.socialMediaLinksContainer}>
            <div className={styles.socialMediaLink}>
              <img
                className={styles.facebookIcon}
                loading="lazy"
                alt=""
                src="/facebook@2x.png"
              />
            </div>
            <div className={styles.socialMediaLink}>
              <img
                className={styles.facebookIcon}
                loading="lazy"
                alt=""
                src="/instagram@2x.png"
              />
            </div>
            <div className={styles.socialMediaLink}>
              <img
                className={styles.facebookIcon}
                loading="lazy"
                alt=""
                src="/twitter@2x.png"
              />
            </div>
          </div>
        </div>
        <div className={styles.containers}>
          <div className={styles.company}>Company</div>
          <div className={styles.linkContainer}>
            <div className={styles.aboutUs}>About Us</div>
            <a className={styles.news}>News</a>
            <div className={styles.aboutUs}>Careers</div>
            <div className={styles.aboutUs}>How we work</div>
          </div>
        </div>
        <div className={styles.containers}>
          <div className={styles.support}>Support</div>
          <div className={styles.linkContainer1}>
            <div className={styles.aboutUs}>Account</div>
            <div className={styles.aboutUs}>Support Center</div>
            <a className={styles.news}>FAQ</a>
            <div className={styles.aboutUs}>Accessibility</div>
          </div>
        </div>
        <div className={styles.containers2}>
          <div className={styles.more}>More</div>
          <div className={styles.linkContainer1}>
            <a className={styles.news}>Covid Advisory</a>
            <div className={styles.aboutUs}>Airline Fees</div>
            <div className={styles.aboutUs}>Tips</div>
            <div className={styles.aboutUs}>Quarantine Rules</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
