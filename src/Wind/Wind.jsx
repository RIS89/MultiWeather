import arrow from "../icons/arrow.svg";
import styles from "./Wind.module.css";

const Wind = ({ direction }) => {
  const setCorner = () => {
    switch (direction) {
      case "В":
        return "180deg";
      case "З":
        return "0deg";
      case "Ю":
        return "-90deg";
      case "C":
        return "90deg";
      case "ВСВ":
        return '157.5deg';
      case "CВ":
        return "135deg";
      case "ЮЗ":
        return "-45deg";
      case "ЮЮЗ":
        return "-67.5deg";
      case "ЮВ":
        return "-135deg";
      case "ССВ":
        return "112.5deg";
      case "ССЗ":
        return "67.5deg";
      case "СЗ":
        return "45deg";
      case "ЮЮВ":
        return "-112.5deg";
      case "ЗСЗ":
        return "22.5deg";
      case "ВЮВ":
        return "-157.5deg";
      case "ЗЮЗ":
        return "-22.5deg";
      default:
        return "0";
    }
  };
  const rotate = `rotate(${(setCorner())}`
  return (
    <div className={styles.wrapperWind}>
      <div className={styles.iconWind}>
        <img
          style={{filter: "invert(73%) sepia(0%) saturate(1%) hue-rotate(19deg) brightness(100%) contrast(98%)", margin: "5px 5px", transform: `rotate(${setCorner()})` }}
          src={arrow}
          alt="iconWindDirection"
          width="20"
          height="20"
        />
      </div>
      <div className={styles.textWind}>{direction}</div>
    </div>
  );
};

export default Wind;
