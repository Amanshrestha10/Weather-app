const apikey = "adfeea94f249ee026ca174fa0fddaec6";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const weathericon = document.querySelector(".weather-icon");
async function checkWeather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else {
        var data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        if (data.weather[0].main == "Clouds") {
            weathericon.src = "image/clouds.png";
        }
        else if (data.weather[0].main == "Clear") {
            weathericon.src = "image/clear.png";
        }
        else if (data.weather[0].main == "Rain") {
            weathericon.src = "image/rain.png";
        }
        else if (data.weather[0].main == "Drizzle") {
            weathericon.src = "image/drizzle.png";
        }
        else if (data.weather[0].main == "Haze") {
            weathericon.src = "image/mist.png";
        }
        else if (data.weather[0].main == "Snow") {
            weathericon.src = "image/snow.png";
        }
        document.querySelector(".error").style.display = "none";
        document.querySelector(".weather").style.display = "block";

    }
}
searchBtn.addEventListener("click", () => {
    checkWeather(searchbox.value);
})
