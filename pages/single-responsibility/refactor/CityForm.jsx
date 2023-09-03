import { useState } from "react";

export default function CityForm({ onSubmit }) {
  const [city, setCity] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit(city);
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
  );
}
