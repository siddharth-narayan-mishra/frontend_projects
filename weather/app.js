let btnOne = document.getElementById('searchbtn');
let cityOne = document.getElementById('search');
let cityName = cityOne.value;
let body = document.querySelector('body');

btnOne.addEventListener('click',()=>{
    console.log('hello');
    console.log(cityName);
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=399cf94427c941d6afd45707230712&q=${cityName}&days=5&aqi=no&alerts=no`)
    .then((response)=>response.json())
    .then((data)=>{
        console.log(data);

        let feelsLike = data.current.feelslike_c;
        let hum = data.current.humidity;
        let time = data.current.last_updated;
        let rain = data.current.precip_mm;
        let pressure = data.current.pressure_mb;
        let temp = data.current.temp_c;
        let uvIndex = data.current.uv;
        let vis = data.current.vis_km;
        let windDir = data.current.wind_dir;
        let windSpeed = data.current.wind_kph;
        let icon = data.current.condition.icon;
        let conditionText = data.current.condition.text;

        let icon1 = data.forecast.forecastday[0].hour[6].condition.icon;
        let icon2 = data.forecast.forecastday[0].hour[9].condition.icon;
        let icon3 = data.forecast.forecastday[0].hour[12].condition.icon;
        let icon4 = data.forecast.forecastday[0].hour[15].condition.icon;
        let icon5 = data.forecast.forecastday[0].hour[18].condition.icon;
        let icon6 = data.forecast.forecastday[0].hour[21].condition.icon;
        
        let text1 = data.forecast.forecastday[0].hour[6].condition.text;
        let text2 = data.forecast.forecastday[0].hour[9].condition.text;
        let text3 = data.forecast.forecastday[0].hour[12].condition.text;
        let text4 = data.forecast.forecastday[0].hour[15].condition.text;
        let text5 = data.forecast.forecastday[0].hour[18].condition.text;
        let text6 = data.forecast.forecastday[0].hour[21].condition.text;

        let time1 = data.forecast.forecastday[0].hour[6].time.slice(11,16);
        let time2 = data.forecast.forecastday[0].hour[9].time.slice(11,16);
        let time3 = data.forecast.forecastday[0].hour[12].time.slice(11,16);
        let time4 = data.forecast.forecastday[0].hour[15].time.slice(11,16);
        let time5 = data.forecast.forecastday[0].hour[18].time.slice(11,16);
        let time6 = data.forecast.forecastday[0].hour[21].time.slice(11,16);

        body.innerHTML=`

        <div class="title">
            <p><i id="sun" class="fa-regular fa-sun"></i> the.weather</p>
        </div>

        <div class="at_a_glance">
            <p id="temp"><b>${feelsLike}&degC</b></p>
            <p id="city" class="cityTime"><b>${cityName}</b></p>
            <img class="condn" id="icon" src="${icon}">
            <p class="cityTime" id="time">${time}</p>
            <p class="condn" id="condn"><b>${conditionText}</b></p>
            <p class="mobileCity"><b>${cityName}</b></p>
        </div>

        <div class="sidebar" id="sidebar">

            <div class="searchbar">
                <input type="text" id="search" placeholder="Another location?">
                <label for="search"><button id="searchbtn"><i class="fa-solid fa-magnifying-glass"></i></button></label>
            </div>

            <div class="header">
                Details
            </div>

            <div class="details" id="details">

                <div class="parameter">Temperature</div>
                <div class="value">${temp}&degC</div>

                <div class="parameter">Humidity</div>
                <div class="value">${hum}%</div>

                <div class="parameter">Wind</div>
                <div class="value">${windSpeed}km/h</div>

                <div class="parameter">Wind Direction</div>
                <div class="value">${windDir}</div>

                <div class="parameter">Rain</div>
                <div class="value">${rain}mm</div>

                <div class="parameter">Pressure</div>
                <div class="value">${pressure}mb</div>

                <div class="parameter">UV Index</div>
                <div class="value">${uvIndex}</div>

                <div class="parameter">Visibility</div>
                <div class="value">${vis}km</div>

            </div>

            <div class="divider"></div>

            <div class="cards">
                <div class="card">
                    <div class="time">${time1}</div>
                    <div class="icon"><img src=${icon1}></div>
                    <div class="text">${text1}</div>
                </div>
                <div class="card">
                    <div class="time">${time2}</div>
                    <div class="icon"><img src=${icon2}></div>
                    <div class="text">${text2}</div>
                </div>
                <div class="card">
                    <div class="time">${time3}</div>
                    <div class="icon"><img src=${icon3}></div>
                    <div class="text">${text3}</div>
                </div>
                <div class="card">
                    <div class="time">${time4}</div>
                    <div class="icon"><img src=${icon4}></div>
                    <div class="text">${text4}</div>
                </div>
                <div class="card">
                    <div class="time">${time5}</div>
                    <div class="icon"><img src=${icon5}></div>
                    <div class="text">${text5}</div>
                </div>
                <div class="card">
                    <div class="time">${time6}</div>
                    <div class="icon"><img src=${icon6}></div>
                    <div class="text">${text6}</div>
                </div>
            </div>

            
        </div>

        <script src="app.js"></script>`
})});