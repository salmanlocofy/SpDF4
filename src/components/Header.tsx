import { FunctionComponent } from "react";
import styles from "./Header.module.css";

export type HeaderType = {
  className?: string;
};

const Header: FunctionComponent<HeaderType> = ({ className = "" }) => {
  return (
    <header className={[styles.header, className].join(" ")}>
      <div className={styles.headerContainer}>
        <img
          className={styles.logoblueIcon}
          loading="lazy"
          alt=""
          src="/logoblue@2x.png"
        />
        <div className={styles.navigationRight}>
          <nav className={styles.navigationMenu}>
            <div className={styles.navigationlink}>
              <a className={styles.text}>Explore</a>
            </div>
            <div className={styles.navigationlink1}>
              <a className={styles.text1}>Search</a>
            </div>
            <div className={styles.navigationlink1}>
              <a className={styles.text2}>Hotels</a>
            </div>
            <div className={styles.navigationlink1}>
              <a className={styles.text3}>Offers</a>
            </div>
          </nav>
          <div className={styles.accountSection}>
            <img
              className={styles.icon}
              loading="lazy"
              alt=""
              src="/icon@2x.png"
            />
            <img
              className={styles.avatarIcon}
              loading="lazy"
              alt=""
              src="/avatar@2x.png"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
