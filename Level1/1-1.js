fetch("https://www.error.www")
  .then((response) => response.text())
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log("Hello");
    throw new Error("test");
  });
