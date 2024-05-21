import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./HotelCard.module.css";

export type HotelCardType = {
  className?: string;
  image: string;
  hotelType?: string;
  hotelName: string;
  price: string;
  rating: string;
  reviews?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
};

const HotelCard: FunctionComponent<HotelCardType> = ({
  className = "",
  image,
  hotelType,
  hotelName,
  price,
  rating,
  reviews,
  propMinWidth,
}) => {
  const reviewsStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={[styles.hotelcard, className].join(" ")}>
      <img className={styles.imageIcon} alt="" src={image} />
      <div className={styles.stayDetails}>
        <div className={styles.stayDetailsRows}>
          <div className={styles.hoteltype}>{hotelType}</div>
          <b className={styles.hotelname}>{hotelName}</b>
          <div className={styles.price}>{price}</div>
        </div>
      </div>
      <div className={styles.rating}>
        <div className={styles.vectorParent}>
          <img className={styles.vectorIcon} alt="" src="/vector.svg" />
          <div className={styles.rating1}>{rating}</div>
        </div>
        <a className={styles.reviews} style={reviewsStyle}>
          {reviews}
        </a>
      </div>
      <div className={styles.moreDetailsButton}>
        <div className={styles.button}>More details</div>
      </div>
    </div>
  );
};

export default HotelCard;
