const  apiKey = "6e32267fd3be1976f69240b6757f962b";


const weatherData = document.querySelector("#weather-data");
const cityInput = document.getElementById("city-input");
const formEl = document.querySelector("form");

formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    const cityValue = cityInput.value;
    getWeatherData(cityValue);
})

async function getWeatherData(cityValue) {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric`
        );

        if(!response.ok) {
            throw new Error("Network response was not ok");
        }

        const data = await response.json();

        const temparature = Math.round(data.main.temp);

        const description = data.weather[0].description;

        const icon = data.weather[0].icon;

        const details = [
            `Feels like: ${Math.round(data.main.feels_like)}`,
            `Humidity: ${data.main.humidity}%`,
            `Wind speed: ${data.wind.speed} m/s`,
        ];
 
        weatherData.querySelector(".icon").innerHTML = `
        <img src="http://openweathermap.org/img/wn/${icon}.png" alt="Weather icon">
        `;
        weatherData.querySelector(".temperature").textContent = `${temparature}°C`;
        weatherData.querySelector(".decritpion").textContent = description;
        weatherData.querySelector(".details").innerHTML = details.map((detail) => `
            <div>${detail}</div>`).join("");

    } catch (error) {
        weatherData.querySelector(".icon").innerHTML = "";
        weatherData.querySelector(".temperature").textContent = "";
        weatherData.querySelector(".decritpion").textContent = "An error happend, please try again later";
        weatherData.querySelector(".details").innerHTML = ""
    }
}