import { useContext, useState, useEffect } from "react";
import AsyncSelect from "react-select/async";
import { Context } from "../App.Reducer";
import styles from "./Head.module.css";


const Head = () => {
  const [value, setValue] = useState("");
  const [options, setOptions] = useState([]);

  const [cityId, setCityId] = useState("");
  const [cityName, setCityName] = useState("");
  
  const { dispatch } = useContext(Context);

  useEffect(() => {
    if (!!value) {
      fetch(
        `https://www.accuweather.com/web-api/autocomplete?query=${value}&language=ru`
      )
        .then((res) => res.json())
        .then((res) => setOptions(res))
        .catch(() => {
          setOptions([]);
        });
    }
  }, [value]);

  useEffect(() => {
    if (!!cityName && !!cityId) {
      dispatch({
        type: "addCity",
        payload: {
          cityName: cityName,
          cityId: cityId,
        },
      });
      clear();
    }
  }, [cityId, cityName]);

  // const handleChange = (event) => {
  //   if (!event.nativeEvent.inputType) {
  //     event.target.blur();
  //   }
  // };

  const clear = () => {
    setCityId("");
    setCityName("");
  };
  
  // +++++++++++++++++++++++++++++++++
  const loadOptions = (inputValue) => {
    return fetch(
      `https://www.accuweather.com/web-api/autocomplete?query=${inputValue}&language=ru`
    ).then((res) => res.json());
  };

  const handleChange = (value) => {
    setCityId(value.key);
    setCityName(value.localizedName);
  };

  const stylesSelect = {
    container: (base) => ({
      ...base,
      width: 350,
    }),
  };

  return (
    <div className={styles.head}>
      <AsyncSelect
        styles={stylesSelect}
        value={cityName}
        cacheOptions
        getOptionLabel={(e) => `${e.localizedName}, ${e.country.localizedName}`}
        getOptionValue={(e) => e.key}
        loadOptions={loadOptions}
        defaultOptions
        placeholder={"Поиск"}
        onChange={handleChange}
        onFocus={clear}
      />
    </div>
  );
};

export default Head;
