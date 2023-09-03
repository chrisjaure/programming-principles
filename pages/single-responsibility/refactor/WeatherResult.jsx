export default function WeatherResult({ city, weather }) {
  if (weather) {
    return (
      <span>
        The weather is {weather} for {city}.
      </span>
    );
  }
  return null;
}
