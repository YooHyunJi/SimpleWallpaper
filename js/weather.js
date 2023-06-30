const API_KEY = "a7bb1e685999be4ad3c61d286bfb4261";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    console.log(lat, lon);

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            console.log(data.name);
            const city = document.querySelector("#weather span:first-child");
            const weather = document.querySelector("#weather span:last-child");
            
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} ${data.main.temp}`;
        });
}

function onGeoError(){
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);