let city_name=document.getElementById("search");
let button = document.getElementById("search-btn");
let apiKey = "Enter your OpenWeatherMap API key";


function fetchWeather(city_){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+city_+apiKey)
        .then((response)=> response.json())
        .then((data)=>{
            console.log(data)
            
            document.querySelector(".main").style.opacity="1" ; 
            document.querySelector(".footer").style.opacity="1";
            document.querySelector(".error").innerHTML=""

            let desc = data.weather[0].description;
            let icon_id = data.weather[0].icon;
            let temp = Math.round(data.main.temp);
            let feels_like = Math.round(data.main.feels_like);
            let min_temp = Math.round(data.main.temp_min);
            let max_temp = Math.round(data.main.temp_max);
            let pressure = data.main.pressure;
            let humidity = data.main.humidity;
            let wind = data.wind.speed;
            let city_name = data.name;
            
            document.querySelector(".b-icon").src="http://openweathermap.org/img/wn/"+icon_id+"@2x.png";
            document.querySelector(".desc").innerText=desc;
            document.querySelector(".big-temp").innerText=temp+"°C";
            document.querySelector(".feels-like").innerText="Feels like "+feels_like+"°C";
            document.getElementById("hum").innerText="Humidity: "+humidity+"%";
            document.getElementById("pres").innerText="Pressure: "+pressure+" mb";
            document.getElementById("wind").innerText="Wind: "+wind+" kph";
            document.getElementById("minTempd0").innerText=min_temp+"°C";
            document.getElementById("maxTempd0").innerText=max_temp+"°C";
            document.querySelector(".background").style.backgroundImage="url('https:source.unsplash.com/1600x900/?"+city_name+"')"
        })
        .catch(error=>{
            document.querySelector(".main").style.opacity="0" ; 
            document.querySelector(".footer").style.opacity="0";
            document.querySelector(".error").innerHTML=""
            let errorMessage = document.createElement('h1');
            errorMessage.innerText="Couldn't Find City";
            document.querySelector(".error").prepend(errorMessage);
            errorMessage.style.textAlign="center";
            errorMessage.style.marginTop="100px";
        })

fetch('https://api.openweathermap.org/data/2.5/forecast?q='+city_+'&appid=e492c752bb82b0381cfffba13899576d&units=metric')
        .then((response)=>response.json())
        .then((data)=>{
            let date0=data.list[0].dt_txt.slice(0,10);
            let date1=data.list[8].dt_txt.slice(0,10);
            let date2=data.list[16].dt_txt.slice(0,10);
            let date3=data.list[24].dt_txt.slice(0,10);
            let date4=data.list[32].dt_txt.slice(0,10);

            let min_temp0=Math.round(data.list[0].main.temp_min);
            let min_temp1=Math.round(data.list[8].main.temp_min);
            let min_temp2=Math.round(data.list[16].main.temp_min);
            let min_temp3=Math.round(data.list[24].main.temp_min);
            let min_temp4=Math.round(data.list[32].main.temp_min);

            let max_temp0=Math.round(data.list[0].main.temp_max);
            let max_temp1=Math.round(data.list[8].main.temp_max);
            let max_temp2=Math.round(data.list[16].main.temp_max);
            let max_temp3=Math.round(data.list[24].main.temp_max);
            let max_temp4=Math.round(data.list[32].main.temp_max);

            let icond0=data.list[0].weather[0].icon;
            let icond1=data.list[8].weather[0].icon;
            let icond2=data.list[16].weather[0].icon;
            let icond3=data.list[24].weather[0].icon;
            let icond4=data.list[32].weather[0].icon;

            let condn0=data.list[0].weather[0].main;
            let condn1=data.list[8].weather[0].main;
            let condn2=data.list[16].weather[0].main;
            let condn3=data.list[24].weather[0].main;
            let condn4=data.list[32].weather[0].main;

            let time0=data.list[0].dt_txt.slice(-8,-3);
            let time3=data.list[1].dt_txt.slice(-8,-3);
            let time6=data.list[2].dt_txt.slice(-8,-3);
            let time9=data.list[3].dt_txt.slice(-8,-3);
            let time12=data.list[4].dt_txt.slice(-8,-3);
            let time15=data.list[5].dt_txt.slice(-8,-3);
            let time18=data.list[6].dt_txt.slice(-8,-3);
            let time21=data.list[7].dt_txt.slice(-8,-3);

            let temp0=Math.round(data.list[0].main.temp);
            let temp3=Math.round(data.list[1].main.temp);
            let temp6=Math.round(data.list[2].main.temp);
            let temp9=Math.round(data.list[3].main.temp);
            let temp12=Math.round(data.list[4].main.temp);
            let temp15=Math.round(data.list[5].main.temp);
            let temp18=Math.round(data.list[6].main.temp);
            let temp21=Math.round(data.list[7].main.temp);

            let icon0=data.list[0].weather[0].icon;
            let icon3=data.list[1].weather[0].icon;
            let icon6=data.list[2].weather[0].icon;
            let icon9=data.list[3].weather[0].icon;
            let icon12=data.list[4].weather[0].icon;
            let icon15=data.list[5].weather[0].icon;
            let icon18=data.list[6].weather[0].icon;
            let icon21=data.list[7].weather[0].icon;

            document.getElementById("icon0").src="http://openweathermap.org/img/wn/"+icon0+".png"
            document.getElementById("temp0").innerText=temp0+"°C";
            document.getElementById("time0").innerText=time0;

            document.getElementById("icon3").src="http://openweathermap.org/img/wn/"+icon3+".png"
            document.getElementById("temp3").innerText=temp3+"°C";
            document.getElementById("time3").innerText=time3;

            document.getElementById("icon6").src="http://openweathermap.org/img/wn/"+icon6+".png"
            document.getElementById("temp6").innerText=temp6+"°C";
            document.getElementById("time6").innerText=time6;

            document.getElementById("icon9").src="http://openweathermap.org/img/wn/"+icon9+".png"
            document.getElementById("temp9").innerText=temp9+"°C";
            document.getElementById("time9").innerText=time9;
            document.getElementById("condn0").innerText=condn0;

            document.getElementById("icon12").src="http://openweathermap.org/img/wn/"+icon12+".png"
            document.getElementById("temp12").innerText=temp12+"°C";
            document.getElementById("time12").innerText=time12;
            document.getElementById("condn0").innerText=condn0;

            document.getElementById("icon15").src="http://openweathermap.org/img/wn/"+icon15+".png"
            document.getElementById("temp15").innerText=temp15+"°C";
            document.getElementById("time15").innerText=time15;
            document.getElementById("condn0").innerText=condn0;

            document.getElementById("icon18").src="http://openweathermap.org/img/wn/"+icon18+".png"
            document.getElementById("temp18").innerText=temp18+"°C";
            document.getElementById("time18").innerText=time18;
            document.getElementById("condn0").innerText=condn0;

            document.getElementById("icon21").src="http://openweathermap.org/img/wn/"+icon21+".png"
            document.getElementById("temp21").innerText=temp21+"°C";
            document.getElementById("time21").innerText=time21;
            
            document.querySelector(".date").innerText=date0;

            document.getElementById("card-date0").innerText=date0;
            document.getElementById("minTempd0").innerText=min_temp0+"°C"
            document.getElementById("maxTempd0").innerText=max_temp0+"°C"
            document.getElementById("icond0").src="http://openweathermap.org/img/wn/"+icond0+".png"
            document.getElementById("condn0").innerText=condn0;
            
            document.getElementById("card-date1").innerText=date1;
            document.getElementById("minTempd1").innerText=min_temp1+"°C"
            document.getElementById("maxTempd1").innerText=max_temp1+"°C"
            document.getElementById("icond1").src="http://openweathermap.org/img/wn/"+icond1+".png"
            document.getElementById("condn1").innerText=condn1;
            
            document.getElementById("card-date2").innerText=date2;
            document.getElementById("minTempd2").innerText=min_temp2+"°C"
            document.getElementById("maxTempd2").innerText=max_temp2+"°C"
            document.getElementById("icond2").src="http://openweathermap.org/img/wn/"+icond2+".png"
            document.getElementById("condn2").innerText=condn2;

            document.getElementById("card-date3").innerText=date3;
            document.getElementById("minTempd3").innerText=min_temp3+"°C"
            document.getElementById("maxTempd3").innerText=max_temp3+"°C"
            document.getElementById("icond3").src="http://openweathermap.org/img/wn/"+icond3+".png"
            document.getElementById("condn3").innerText=condn3;

            document.getElementById("card-date4").innerText=date4;
            document.getElementById("minTempd4").innerText=min_temp4+"°C"
            document.getElementById("maxTempd4").innerText=max_temp4+"°C"
            document.getElementById("icond4").src="http://openweathermap.org/img/wn/"+icond4+".png"
            document.getElementById("condn4").innerText=condn4;
        })
        .catch(error=>{
            console.log(error);
        })
}

fetchWeather("London");

button.addEventListener("click",()=>{
    fetchWeather(city_name.value);
});

city_name.addEventListener("keypress",function (e) {
    if (e.key === 'Enter') {
        fetchWeather(city_name.value);
    }
});
