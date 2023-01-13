import { createContext } from "react";

export const Context = createContext({});

export const initialState = {
  cityCurrent: "",
  cityColl: [],
  fetchError: null,
  isShowDrop: false,
};
export const action = {
  type: "addCity",
};

export function reducer(state, action) {
  switch (action.type) {
    case "addCity":
      const newStateAdd = {
        ...state,
        cityColl: [...state.cityColl, action.payload],
      };
      localStorage.setItem("cityColl", JSON.stringify(newStateAdd.cityColl));
      return newStateAdd;
    case "addCityStorage":
      return { ...state, cityColl: action.payload };
    case "removeCity":
      const newStateDel = {
        ...state,
        cityColl: state.cityColl.filter(
          (city) => city.cityId !== action.payload
        ),
      };
      localStorage.setItem("cityColl", JSON.stringify(newStateDel.cityColl));
      return newStateDel;
    case "changeIsShowDrop":
      return { ...state, isShowDrop: action.payload };

    default:
      return state;
  }
}

export function AddCity(city, cityId) {}
