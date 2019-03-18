let weatherRequest = new XMLHttpRequest();

let apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=02933daf7eacd95eb67507a4e55f6361';
weatherRequest.open('Get', apiURLstring, true);
weatherRequest.send();

weatherRequest.onload = function() {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);
    
    document.getElementById('cc-temp').innerHTML = weatherData.main.temp;
    document.getElementById('cc-wind').innerHTML = weatherData.wind.speed;
    document.getElementById('cc-sky').innerHTML = weatherData.weather[0].main;
    document.getElementById('cc-hum').innerHTML = weatherData.main.humidity;
    

    
    
}

let forecastRequest = new XMLHttpRequest();
forecastRequest.open('Get', 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=02933daf7eacd95eb67507a4e55f6361', true);
forecastRequest.send();

forecastRequest.onload = function() {
    let weatherData = JSON.parse(forecastRequest.responseText);
    console.log(weatherData);
    
    document.getElementById('ccwed').innerHTML = weatherData.list[0].main.temp;
    document.getElementById('ccthu').innerHTML = weatherData.list[1].main.temp;
    document.getElementById('ccfri').innerHTML = weatherData.list[2].main.temp;
    document.getElementById('ccsat').innerHTML = weatherData.list[3].main.temp;
    document.getElementById('ccsun').innerHTML = weatherData.list[4].main.temp;
    
    var icon = "https://openweathermap.org/img/w/" + weatherData.list[0].weather[0].icon + ".png"
    document.getElementById('ccwedi').setAttribute('src', icon);
    
    var icon = "https://openweathermap.org/img/w/" + weatherData.list[1].weather[0].icon + ".png"
    document.getElementById('ccthui').setAttribute('src', icon);
    
    var icon = "https://openweathermap.org/img/w/" + weatherData.list[2].weather[0].icon + ".png"
    document.getElementById('ccfrii').setAttribute('src', icon);
    
    var icon = "https://openweathermap.org/img/w/" + weatherData.list[3].weather[0].icon + ".png"
    document.getElementById('ccsati').setAttribute('src', icon);
    
    var icon = "https://openweathermap.org/img/w/" + weatherData.list[4].weather[0].icon + ".png"
    document.getElementById('ccsuni').setAttribute('src', icon);
}
