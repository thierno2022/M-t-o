const APIKEY=

let url = `https://api.openweathermap.org/data/2.5/weather?q=Rouen&appid=${APIKEY}&units=metric&lang=fr
`;


fetch(url).then((Response) =>
Response.json().then((data) => {
console.log(data);
document.querySelector('#city').innerHTML = data.name;
document.querySelector('#temp').innerHTML = data.main.temp + '°';
document.querySelector('#humidity').innerHTML = data.main.humidity + '%';
document.querySelector('#wind').innerHTML =
 "<i class='fa-solid fa-wind'></i>" +data.wind.speed + 'km/h';
} )
);