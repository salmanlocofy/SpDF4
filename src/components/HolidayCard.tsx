import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./HolidayCard.module.css";

export type HolidayCardType = {
  className?: string;
  image: string;
  id?: string;
  price: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
  propMinWidth1?: CSSProperties["minWidth"];
};

const HolidayCard: FunctionComponent<HolidayCardType> = ({
  className = "",
  image,
  id,
  price,
  propMinWidth,
  propMinWidth1,
}) => {
  const containerStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const priceStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div className={[styles.holidaycard, className].join(" ")}>
      <img className={styles.imageIcon} loading="lazy" alt="" src={image} />
      <div className={styles.holidayDetails}>
        <div className={styles.container} style={containerStyle}>
          <div className={styles.city}>Bali</div>
          <div className={styles.id}>{id}</div>
        </div>
        <div className={styles.price} style={priceStyle}>
          {price}
        </div>
      </div>
    </div>
  );
};

export default HolidayCard;
