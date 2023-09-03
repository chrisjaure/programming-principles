import fetch from "./fake-fetch";
import { useState } from "react";

export function App() {
  const [city, setCity] = useState("");
  const [result, setResult] = useState(null);

  return (
    <div>
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          const result = await fetch(`getweather?city=${city}`);
          setResult({ weather: await result.json(), city });
        }}
      >
        <label>
          City:
          <input
            onChange={(event) => {
              setCity(event.target.value);
            }}
            value={city}
          />
        </label>

        <button type="submit">Submit</button>
      </form>

      {result ? (
        <span>
          The weather is {result.weather} for {result.city}.
        </span>
      ) : null}
    </div>
  );
}
