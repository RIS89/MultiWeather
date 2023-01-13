import consts from "../consts.json";

export function getWeatherDay(cityId) {
  return fetch(
    `${consts.url_w}/forecasts/v1/daily/1day/${cityId}?apikey=${consts.key}&language=ru-ru&details=true&metric=true`
  );
}

export function getWeather12Hours(cityId) {
  return fetch(
    `${consts.url_w}/forecasts/v1/hourly/12hour/${cityId}?apikey=${consts.key}&language=ru-ru&details=true&metric=true`
  );
}
