fetch('http://api.weatherapi.com/v1/forecast.json?key=399cf94427c941d6afd45707230712&q=London&days=5&aqi=no&alerts=no')
.then((response)=>response.json())
.then((data)=>{
    console.log(data);
})