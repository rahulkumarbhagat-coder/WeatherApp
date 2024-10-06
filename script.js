const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiKey = "f270813b81b790c599ac60c7a06dc76d";

const searchBox = document.querySelector('.search-bar');
const searchBtn = document.querySelector('.search button');

const weatherIcon = document.querySelector('.weather-icon');

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error p").style.display="block";
        document.querySelector(".weather").style.display="none";
    }

    else{
        var data = await response.json();

    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML= Math.round(data.main.temp) + " °C";
    document.querySelector(".humidity").innerHTML=data.main.humidity + " %";
    document.querySelector(".wind").innerHTML=data.wind.speed + " Km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "weather-cloudy-icon.png"
    }
    else if(data.weather[0].main == "Haze"){
        weatherIcon.src = "weather-hot-icon.png"
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "weather-clear-icon.png"
    }

    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "weather-mist-icon.png"
    }
    
    document.querySelector(".weather").style.display= "block"
    document.querySelector(".error p").style.display="none";
}
    }
    

searchBtn.addEventListener("click" , () =>{
    checkWeather(searchBox.value);
} )

