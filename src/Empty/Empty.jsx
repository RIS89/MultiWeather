import react, { useContext, useEffect } from "react";
import styles from "./Empty.module.css";
import { Context } from "../App.Reducer";


const Empty = () => {
  const { dispatch } = useContext(Context);

  useEffect(() => {
    const getCityColl = JSON.parse(localStorage.getItem("cityColl")) ?? [];
    if (getCityColl.length > 0) {
      dispatch({
        type: "addCityStorage",
        payload: getCityColl,
      });
    }
  }, []);
  return (
    <div className={styles.empty}>
        <h1>Список городов пуст</h1>
    </div>
  );
};

export default Empty;
