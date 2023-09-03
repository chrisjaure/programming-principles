import fetch from "../fake-fetch";

export async function fetchWeather(city) {
  const result = await fetch(`getweather?city=${city}`);
  return { weather: await result.json(), city };
}
