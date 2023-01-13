import React, { useContext, useEffect, useState } from "react";
import styles from "./Weather12.module.css";
import consts from "../consts.json";

const Weather12 = ({ data12 }) => {
  return (
    <div className={styles.small}>
      <div className={styles.wrapper12}>
        {data12
          .filter((fdata, index) => index % 2 !== 0)
          .map((odd) => (
            <div className={styles.cart12} key={odd.EpochDateTime}>
              <div className={styles.icon12}>
                <img
                  src={`${consts.url_image}/${odd.WeatherIcon}.svg`}
                  alt="icon12"
                  width="30"
                  height="30"
                />
              </div>
              <div className={styles.temp12}>
                {odd.Temperature.Value}&nbsp;&#176;C
              </div>
              <div className={styles.time12}>
                {`${String(
                  new Date(odd.EpochDateTime * 1000).getHours()
                ).padStart(2, "0")}:${String(
                  new Date(odd.EpochDateTime * 1000).getMinutes()
                ).padStart(2, "0")}`}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Weather12;
