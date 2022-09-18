import fetchAPI from "./fetchAPI.js"

document.getElementById("runFetch").addEventListener("click", async (e) => {
  e.preventDefault();
  let casos = fetchAPI();

});


