import { FC } from "react";
import styles from "./StatusMessage.module.scss";

interface Props {
  principal: number;
  rate: number;
  years: number;
}

const StatusMessage:FC<Props> = ({ principal, rate, years }) => {
  if (principal <= 0 || rate <= 0 || years <= 0) return null;

  const finalAmount = principal * Math.pow(1 + rate / 100, years);
  const earned = finalAmount - principal;

  console.log("Final Amount:", finalAmount);
  console.log("Earned:", earned);

  const isRich = earned > 1000;

  return (
    <div className={`${styles.status} ${isRich ? styles.high : styles.low}`}>
      {isRich ? <p>You are rich!</p> : <p>You gained some income</p>}
    </div>
  );
};

export default StatusMessage;
