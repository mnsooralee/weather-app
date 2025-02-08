const apikey = "9a5138fffc8f671b508644c7b3b51df0";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// step 1: simple function
// const checkWeather = async() => {
//     let response = await fetch(apiUrl + `&appid=${apikey}`);
//     console.log(response);
//     let data = await response.json();
//     console.log(data);
// }

const searchBox = document.querySelector(".search input"); //input inside the class ".search"
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

const checkWeather = async(city) => {
    let response = await fetch(apiUrl + city + `&appid=${apikey}`);
    console.log(response);

    if(response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else {
        let data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp +"°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    
    if(data.weather[0].main == "Clouds") {
        weatherIcon.src = "imgs/clouds.png";
    }
    else if(data.weather[0].main == "Clear") {
        weatherIcon.src = "imgs/clear.png";
    }
    else if(data.weather[0].main == "Rain") {
        weatherIcon.src = "imgs/rain.png";
    }
    else if(data.weather[0].main == "Drizzle") {
        weatherIcon.src = "imgs/drizzle.png";
    }
    else if(data.weather[0].main == "Mist") {
        weatherIcon.src = "imgs/mist.png";
    }
    else if(data.weather[0].main == "Snow") {
        weatherIcon.src = "imgs/snow.png";
    }
    else {
        weatherIcon.src = "imgs/clear.png";
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
    }

}

searchBtn.addEventListener("click", () => {
    console.log(searchBox.value);
    checkWeather(searchBox.value);
})
//checkWeather("berlin");
searchBox.addEventListener("keydown", () => {
    if (event.key === "Enter") {
        checkWeather(searchBox.value);
    }
    // if (searchBox !== "") {
    //     if (event.key === "Enter") {
    //         checkWeather(searchBox.value);
    //     }
    // }
})

