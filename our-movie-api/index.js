// In order to speak to an Api
// /We need to define an endpoint (URL)
// We need to define some HTTP Options (mainly the method)

function search(title) {
  let url = `http://www.omdbapi.com/`;
  let queryString = `?apikey=98ccdfd2&t=${title}`;

  let httpOptions = {
    method: "GET",
  };

  function waitForData(response) {
    return response.json();
  }

  function processData(data) {
    let title = data.Title;
    let plot = data.Plot;
    let poster = data.Poster;
    let year = data.Year;
    let div = document.querySelector("div");
    div.innerHTML = `
              <img src="${poster}">
              <h2>${title}</h2>
              <h3>${year}</h3>
              <p>${plot}</p>
        `;
    console.log(title, plot);
  }

  fetch(url + queryString, httpOptions)
    .then(waitForData)
    .then(processData);
}

// event stuff
let form = document.querySelector("form");

function handleSubmit(event) {
  event.preventDefault();
  let input = document.querySelector("input");
  let title = input.value;
  let div = document.querySelector("div");
  div.innerHTML = "Loading..";
  console.log(title);
  search(title);
}

form.addEventListener("submit", handleSubmit);
