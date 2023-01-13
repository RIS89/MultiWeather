import React, { useContext, useEffect, useState } from "react";
import styles from "./City.module.css";
import { Context } from "../App.Reducer";
import Wind from "../Wind/Wind";
import Weather12 from "../Weather12/Weather12";

import { getWeatherDay, getWeather12Hours } from "../utils/api";
import consts from "../consts.json";
import trash from "../icons/trash.svg";
import update from "../icons/update.svg";

const City = (props) => {
  const [data, setData] = useState(null);
  const [isShowWeather12, setIsShowWeather12] = useState(false);
  const [data12, setData12] = useState(null);
  const [time, setTime] = useState("");
  const { dispatch } = useContext(Context);
  const getCityWeather = () => {
    dispatch({
      type: "changeIsShowDrop",
      payload: true,
    });
    getWeatherDay(props.city.cityId)
      .then((res) => res.json())
      .then((res) => setData(res))
      .then(() => setFetchFalse())
      .catch(() => setFetchFalse());
  };

  const getCityWeather12Hours = () => {
    getWeather12Hours(props.city.cityId)
      .then((res) => res.json())
      .then((res) => setData12(res));
  };
  function setFetchFalse() {
    dispatch({
      type: "changeIsShowDrop",
      payload: false,
    });
  }
  const removeCity = () => {
    dispatch({
      type: "removeCity",
      payload: props.city.cityId,
    });
  };

  const now = new Date();
  const day = String(now.getDate()).padStart(2, "0");
  const month = now.getMonth() + 1;
  const hour = now.getHours();
  const minute = String(now.getMinutes()).padStart(2, "0");
  const date = `обн. ${day}/${month} ${hour}:${minute}`;
  useEffect(() => {
    if (!!props.city.cityId) {
      getCityWeather();
      getCityWeather12Hours();
    }
    setTime(date);
    // eslint-disable-next-line
  }, []);
  return (
    <>
      {data !== null && (
        <div
          className={styles.wrapper}
          onClick={() => setIsShowWeather12(!isShowWeather12)}
        >
          <div className={styles.info}>
            <div className={styles.infoCity}>
              <img
                onClick={removeCity}
                className={styles.remove}
                src={trash}
                alt="icon"
                width="20"
                height="20"
              />
              <div className={styles.wrapperText}>{props.city.cityName}</div>
            </div>
            <div className={styles.infoTime}>
              <div className={styles.wrapperText}>{time}</div>
              <img
                onClick={() => {
                  getCityWeather();
                  setTime(date);
                }}
                className={styles.update}
                src={update}
                alt="icon"
                width="14"
                height="14"
              />
            </div>
          </div>
          <div className={styles.big}>
            <div className={styles.day}>
              <div className={styles.iconWind}>
                <div className={styles.icon}>
                  <img
                    src={`${consts.url_image}/${data.DailyForecasts[0].Day.Icon}.svg`}
                    alt="icon"
                    width="85"
                    height="85"
                  />
                </div>
                <div className={styles.wind}>
                  <Wind
                    direction={
                      data.DailyForecasts[0].Day.Wind.Direction.Localized
                    }
                  />
                </div>
              </div>
              <div className={styles.phrase}>
                {data.DailyForecasts[0].Day.IconPhrase}
              </div>
              <div className={styles.temper}>
                {data.DailyForecasts[0].Temperature.Maximum.Value}&nbsp;&#176;C
              </div>
            </div>
            <div className={styles.night}>
              <div className={styles.iconWind}>
                <div className={styles.icon}>
                  <img
                    src={`${consts.url_image}/${data.DailyForecasts[0].Night.Icon}.svg`}
                    alt="icon"
                    width="85"
                    height="85"
                  />
                </div>
                <div className={styles.wind}>
                  <Wind
                    direction={
                      data.DailyForecasts[0].Night.Wind.Direction.Localized
                    }
                  />
                </div>
              </div>
              <div className={styles.phrase}>
                {data.DailyForecasts[0].Night.IconPhrase}
              </div>
              <div className={styles.temper}>
                {data.DailyForecasts[0].Temperature.Minimum.Value}&nbsp;&#176;C
              </div>
            </div>
          </div>
          {!!data12 && isShowWeather12 && <Weather12 data12={data12} />}
        </div>
      )}
    </>
  );
};

export default City;
