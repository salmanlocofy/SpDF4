import { FunctionComponent } from "react";
import styles from "./SubscribeSection.module.css";

export type SubscribeSectionType = {
  className?: string;
};

const SubscribeSection: FunctionComponent<SubscribeSectionType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.subscribesection, className].join(" ")}>
      <div className={styles.formContainer}>
        <div className={styles.formHeader}>
          <b className={styles.formTitleSubtext}>subscribe to our newsletter</b>
          <h2 className={styles.formTitle}>Get weekly updates</h2>
        </div>
        <form className={styles.form}>
          <p className={styles.fillInYour}>
            Fill in your details to join the party!
          </p>
          <div className={styles.formFields}>
            <div className={styles.nameInput}>
              <input
                className={styles.yourName}
                placeholder="Your name"
                type="text"
              />
            </div>
            <div className={styles.nameInput}>
              <input
                className={styles.yourName}
                placeholder="Email address"
                type="text"
              />
            </div>
          </div>
          <button className={styles.button}>
            <div className={styles.text}>Search</div>
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubscribeSection;
