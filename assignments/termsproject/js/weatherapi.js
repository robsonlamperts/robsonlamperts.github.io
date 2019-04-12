let weatherRequest = new XMLHttpRequest();

let apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?q=Manhattan ,US&units=imperial&appid=02933daf7eacd95eb67507a4e55f6361';
weatherRequest.open('Get', apiURLstring, true);
weatherRequest.send();

weatherRequest.onload = function() {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);
    
    document.getElementById('cc-temp').innerHTML = weatherData.main.temp;
    
}



let weatherRequesttwo = new XMLHttpRequest();

let apiURLstringtwo = 'https://api.openweathermap.org/data/2.5/weather?q=Palmyra ,US&units=imperial&appid=02933daf7eacd95eb67507a4e55f6361';
weatherRequesttwo.open('Get', apiURLstringtwo, true);
weatherRequesttwo.send();

weatherRequesttwo.onload = function() {
    let weatherDatatwo = JSON.parse(weatherRequesttwo.responseText);
    console.log(weatherDatatwo);
    
    document.getElementById('cc-temp-two').innerHTML = weatherDatatwo.main.temp;
    
}


let weatherRequestthree = new XMLHttpRequest();

let apiURLstringthree = 'https://api.openweathermap.org/data/2.5/weather?q=Philadelphia ,US&units=imperial&appid=02933daf7eacd95eb67507a4e55f6361';
weatherRequestthree.open('Get', apiURLstringthree, true);
weatherRequestthree.send();

weatherRequestthree.onload = function() {
    let weatherDatathree = JSON.parse(weatherRequestthree.responseText);
    console.log(weatherDatathree);
    
    document.getElementById('cc-temp-three').innerHTML = weatherDatathree.main.temp;
    
}

let weatherRequestfour = new XMLHttpRequest();

let apiURLstringfour = 'https://api.openweathermap.org/data/2.5/weather?q=Columbus ,US&units=imperial&appid=02933daf7eacd95eb67507a4e55f6361';
weatherRequestfour.open('Get', apiURLstringfour, true);
weatherRequestfour.send();

weatherRequestfour.onload = function() {
    let weatherDatafour = JSON.parse(weatherRequestfour.responseText);
    console.log(weatherDatafour);
    
    document.getElementById('cc-temp-four').innerHTML = weatherDatafour.main.temp;
    
}
