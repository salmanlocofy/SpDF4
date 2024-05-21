import { FunctionComponent } from "react";
import Button from "./Button";
import styles from "./FrameComponent1.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.searchSectionWrapper, className].join(" ")}>
      <div className={styles.searchSection}>
        <div className={styles.titleParent}>
          <div className={styles.title}>
            <h1
              className={styles.letsExplore}
            >{`Let’s explore & travel the world`}</h1>
            <h3 className={styles.findTheBest}>
              Find the best destinations and the most popular stays!
            </h3>
          </div>
          <div className={styles.searchForm}>
            <div className={styles.formTitleGroup}>
              <div className={styles.searchFlightsWrapper}>
                <b className={styles.searchFlights}>Search flights</b>
              </div>
              <div className={styles.flightOptions}>
                <div className={styles.flightType}>
                  <div className={styles.radio}>
                    <div className={styles.padding}>
                      <input
                        className={styles.radiobuttonunchecked}
                        type="radio"
                        name="radioGroup-1"
                      />
                    </div>
                    <div className={styles.label}>Return</div>
                  </div>
                  <div className={styles.radio}>
                    <div className={styles.padding}>
                      <input
                        className={styles.radiobuttonunchecked}
                        type="radio"
                        name="radioGroup-1"
                      />
                    </div>
                    <div className={styles.label1}>One-way</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.formInputsRow}>
              <div className={styles.inputsRow}>
                <div className={styles.departureField}>
                  <div className={styles.input}>
                    <div className={styles.labelContainer}>
                      <div className={styles.departure}>Departure</div>
                    </div>
                    <input
                      className={styles.active}
                      placeholder="Singapore (SIN)"
                      type="text"
                    />
                  </div>
                </div>
                <div className={styles.departureField}>
                  <div className={styles.input}>
                    <div className={styles.labelContainer1}>
                      <div className={styles.arrival}>Arrival</div>
                    </div>
                    <input
                      className={styles.active}
                      placeholder="Los Angeles (LA)"
                      type="text"
                    />
                  </div>
                </div>
                <div className={styles.selectoutlined}>
                  <div className={styles.div}>01/05/2022</div>
                  <div className={styles.labelContainer2}>
                    <div className={styles.date}>Date</div>
                  </div>
                </div>
              </div>
              <Button />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
