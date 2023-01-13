import react, { useContext } from "react";
import { Context } from "../App.Reducer";
import City from "../City/City";
import styles from "./Main.module.css";

const Main = () => {
const { state } = useContext(Context);
  return (
    <div className={styles.main}>
      {state.cityColl.map((city) => {
        return <City city={city} key={city.cityId} />;
      })}
    </div>
  );
};

export default Main;
