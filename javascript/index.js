function updateTime() {
  let londonElement = document.querySelector("#london");
  let londonElementDateElement = londonElement.querySelector(".date");
  let londonElementTimeElement = londonElement.querySelector(".time");
  let londonTime = moment().tz("Europe/London");

  londonElementDateElement.innerHTML = londonTime.format("MMMM Do YYYY");

  londonElementTimeElement.innerHTML = londonTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
  let lisbonElement = document.querySelector("#lisbon");
  let lisbonElementDateElement = lisbonElement.querySelector(".date");
  let lisbonElementTimeElement = lisbonElement.querySelector(".time");
  let lisbonTime = moment().tz("Europe/Lisbon");

  lisbonElementDateElement.innerHTML = lisbonTime.format("MMMM Do YYYY");

  lisbonElementTimeElement.innerHTML = lisbonTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

updateTime();
setInterval(updateTime, 1000);
