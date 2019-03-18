let forecastRequest = new XMLHttpRequest();

let apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?q=Preston,Idaho&units=imperial&appid=02933daf7eacd95eb67507a4e55f6361';
forecastRequest.open('Get', apiURLstring, true);
forecastRequest.send();

forecastRequest.onload = function() {
    let weatherData = JSON.parse(forecastRequest.responseText);
    console.log(weatherData);
    
    document.getElementById('cc').innerHTML = weatherData.main.temp;
    
}

