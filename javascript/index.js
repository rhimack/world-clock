function updateTime() {
  let londonElement = document.querySelector("#london");
  if (londonElement) {
    let londonElementDateElement = londonElement.querySelector(".date");
    let londonElementTimeElement = londonElement.querySelector(".time");
    let londonTime = moment().tz("Europe/London");

    londonElementDateElement.innerHTML = londonTime.format("MMMM Do YYYY");

    londonElementTimeElement.innerHTML = londonTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let lisbonElement = document.querySelector("#lisbon");
  if (lisbonElement) {
    let lisbonElementDateElement = lisbonElement.querySelector(".date");
    let lisbonElementTimeElement = lisbonElement.querySelector(".time");
    let lisbonTime = moment().tz("Europe/Lisbon");

    lisbonElementDateElement.innerHTML = lisbonTime.format("MMMM Do YYYY");

    lisbonElementTimeElement.innerHTML = lisbonTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `<div class="city">
          <div>
            <h2>${cityTimeZone}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss "
          )}<small>${cityTime.format("A")} </small></div>
        </div>`;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
