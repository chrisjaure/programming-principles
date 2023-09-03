import { useState } from "react";
import CityForm from "./CityForm";
import WeatherResult from "./WeatherResult";
import { fetchWeather } from "./api";

export default function App() {
  const [result, setResult] = useState(null);

  return (
    <div>
      <CityForm
        onSubmit={async (city) => {
          setResult(await fetchWeather(city));
        }}
      />

      <WeatherResult weather={result?.weather} city={result?.city} />
    </div>
  );
}
