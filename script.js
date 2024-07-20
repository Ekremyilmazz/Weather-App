async function getWeather(){
    const city = document.getElementById('cityInput').value;
    const apiKey= '37e3ce4f5e3f280e5b0eb959a2e62afb';
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=tr`;
    
    try{
        const response = await fetch(url);
        if(!response.ok){
            throw new Error('Şehir bulunamadı');
        }
        const data = await response.json();
        displayWeather(data);
    } catch(error){
        document.getElementById('weatherInfo').innerText=error.message;
    }
}

function displayWeather(data){
    const weatherInfo=`
    <h2>${data.name}, ${data.sys.country}</h2>
    <p>Sıcaklık: ${data.main.temp}</p>
    <p>Hava Durumu: ${data.weather[0].description}</p>
    <p>Nem: ${data.main.humidity}%</p>
    <p>Rüzgar Hızı: ${data.wind.speed} m/s</p>
    `;
    document.getElementById('weatherInfo').innerHTML=weatherInfo;
}