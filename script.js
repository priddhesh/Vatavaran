let API_KEY = "5373b44134da46fab1e133156222012";
function find(){
    let region = document.getElementById("country").value;
    let url = `http://api.weatherapi.com/v1/forecast.json?key=`+API_KEY+`&q=${region}&aqi=yes`;
    fetch(url).then((data)=> data.json()).then((response)=> {
       let p = document.getElementById("info");
        console.log(response);
        console.log(response.current.dewpoint_c);
        document.getElementById("img").setAttribute("src",`${response.current.condition.icon}`)
        p.innerHTML = `<br>${response.location.localtime}</br>Temperature in ${region} is ${response.current.temp_c} 	℃ <br>${response.current.condition.text}</br>
        <br>Maximum Temp: ${response.forecast.forecastday[0].day.maxtemp_c} <br>Last updated on ${response.current.last_updated}`;
        for (let i = 0; i < Array.from(response.forecast.forecastday[0].hour).length; i++) {
            let k = document.createElement('p');
            k.innerHTML = `${(response.forecast.forecastday[0].hour[i].time).slice(11,13)} ${response.forecast.forecastday[0].hour[i].temp_c}`;
            let v = document.getElementById("value");
            v.append(k);
        }
    }).catch(()=>{
    let p = document.getElementById("info");
    p.innerHTML = "Please enter valid country name";
    });
}

// Maxtemp : response.forecast.forecastday[0].day.maxtemp_c
// Mintemp: response.forecast.forecastday[0].day.mintemp_c
// Present Temp : response.current.temp_c
// Feels like : response.current.feelslike_c
// Condition : response.current.condition.text
//  Humidity : response.current.humidity
//  Visibility :response.current.vis_miles
//  Wind : Visibility :response.current.wind_mph/wind_dir
//  UV : response.current.uv
//  Pressure(inch) : response.current.pressure_in