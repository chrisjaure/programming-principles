export default function fakeFetch() {
  return {
    json: () =>
      new Promise((resolve) => {
        setTimeout(() => resolve("Sunny", 1000));
      }),
  };
}
