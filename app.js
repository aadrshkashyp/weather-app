async function getdata() {
  var inputVal = document.getElementById("searchTxt").value;

  const res = await fetch(
    "https://weatherapi-com.p.rapidapi.com/current.json?q=q=" + inputVal,
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "85fa7bd130msh45834ce170ad8f1p1a238cjsn09b08053874f",
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
      },
    }
  );

  function getWeekDay() {
    const weekday = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const d = new Date();
    let day = weekday[d.getDay()];
    document.getElementById("weekDay").innerText = day;
  }

  getWeekDay();

  const data = await res.json();
  document.getElementById("location").innerText = data.location.name;
  document.getElementById("locationParts").innerHTML =
    "<i class='bi bi-geo-alt'></i> " +
    data.location.region +
    " , " +
    data.location.country;
  document.getElementById("dateTime").innerHTML =
    "<i class='bi bi-calendar'></i> " + data.location.localtime.substr(0, 10);
  document.getElementById("txtWord").innerText = data.current.condition.text;
  document.getElementById("humidity").innerText =
    " " + data.current.humidity + "%";
  document.getElementById("wind").innerText =
    " " + data.current.wind_kph + "km/h";
  document.getElementById("temperatureC").innerText =
    data.current.temp_c + " °C";
  document.getElementById("temperatureF").innerText =
    data.current.temp_f + " °F";
}
