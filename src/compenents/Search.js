import React, { useState, useEffect, useRef} from 'react'
import Spinner from './Spinner'
import Weather from './Weather'
import Home from './Home'
import Error from './Error'
import Future from './Future'
import './style.css'

let API_KEY = "5373b44134da46fab1e133156222012";
function Search() {
  const textInput = useRef(null);
  const detailInfo = [];
  const timeF = [];
  const humidityf = [];
  const dewpointf= [];
  const windf = [];
  const pressuref=[];
  const winddir=[];
  const iconfuture = [];
  useEffect(() => {
    textInput.current.focus();
  }, []);

  const [information, setInformation] = useState({
    temperature: null,
    humidity: null,
    wind: null,
    pressure: null,
    icon: "",
    uv: "",
    visibility: null,
    feelslike: null,
    region: "",
    time: "",
    moon_phase: "",
    location: "",
    mintemp: null,
    maxtemp: null,
    direction: "",
    latitude: null,
    longitude: null,
    precipitation: null,
    status: false,
    isday: false,
    city: "",
    weather: [],
    timef: [],
    humidityf: [],
    dewpoint: [],
    windspeed:[],
    pressure_in:[],
    windd:[],
    iconf : []
  });
  const [spinner, setSpinner] = useState(false);
  const [status, setStatus] = useState(false);
  const [count, setCount] = useState(0);
  const [error, setError] = useState(false);
  const [a, seta] = useState(true)
  function value(e) {
    setInformation({
      ...information,
      city: e.target.value
    });
  }

  function render() {
    seta(!a);
  }
  
  useEffect(() => {
    document.getElementById("button-addon2").addEventListener('click', search);
    return () => {
      document.removeEventListener('click', search);
    }
    //eslint-disable-next-line
  }, [status])
  
  function search() {
    seta(!a);
    setStatus((val) => !val);
    if (information.city !== "") {
      setCount((cnt) => cnt + 1);
      setSpinner(true);
      fetch(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${information.city}&aq=yes`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          for (let i = 0; i < 24; ++i) {
            timeF.push(data.forecast.forecastday[0].hour[i].time);
            humidityf.push(data.forecast.forecastday[0].hour[i].humidity);
            detailInfo.push(data.forecast.forecastday[0].hour[i].temp_c);
            dewpointf.push(data.forecast.forecastday[0].hour[i].dewpoint_c);
            windf.push(data.forecast.forecastday[0].hour[i].wind_mph);
            pressuref.push(data.forecast.forecastday[0].hour[i].pressure_in);
            winddir.push(data.forecast.forecastday[0].hour[i].wind_dir);
            iconfuture.push(data.forecast.forecastday[0].hour[i].condition.icon);
          }
          setInformation({
            temp: `${data.current.temp_c}`,
            humidity: `${data.current.humidity}`,
            isday: `${data.current.is_day}`,
            wind: `${data.current.wind_mph}`,
            direction: `${data.current.wind_dir}`,
            pressure: `${data.current.pressure_in}`,
            icon: `${data.current.condition.icon}`,
            visibility: `${data.current.vis_miles}`,
            text: `${data.current.condition.text}`,
            uv: `${data.current.uv}`,
            location: `${data.location.name}`,
            region: `${data.location.region}`,
            mintemp: `${data.forecast.forecastday[0].day.mintemp_c}`,
            maxtemp: `${data.forecast.forecastday[0].day.maxtemp_c}`,
            moon_phase: `${data.forecast.forecastday[0].astro.moon_phase}`,
            latitude: `${data.location.lat}`,
            longitude: `${data.location.lon}`,
            feelslike: `${data.current.feelslike_c}`,
            time: `${data.location.localtime}`,
            precipitation: `${data.current.precip_mm}`,
            weather : detailInfo,
            timef : timeF,
            humidityf : humidityf,
            dewpoint : dewpointf,
            windspeed : windf,
            pressure_in : pressuref,
            windd : winddir,
            iconf: iconfuture
          })
          setSpinner(false);
          setError(false);
          console.log(detailInfo);
        }).catch((error) => {
          setError(true);
          console.log(error);
        })
    }
  }

  return (
    <>
      <div className="input-group mb-2 w-50 mx-auto">
        <input ref={textInput} onChange={value} type="text" className="form-control" placeholder='Enter city/region name' aria-label="Recipient's username" aria-describedby="button-addon2" />
        <button onClick={search} id="button-addon2" className="btn btn-primary" type="submit">Search</button>
        {a && !spinner && count!==0 && !error && <button onClick={render} id="button-addon2" className="btn btn-success mx-2" type="submit">Get more details</button>}
        {!a && !spinner && count!==0 && !error && <button onClick={render} id="button-addon2" className="btn btn-success mx-2" type="submit">Main Page</button>}
      </div>
      {count === 0 && <Home />}
      {!error && spinner && <Spinner />}
      {a && !error && !spinner && count !== 0 && <Weather temp={information.temp} latitude={information.latitude} precipitation={information.precipitation} isday={information.isday} longitude={information.longitude} feelslike={information.feelslike} humidity={information.humidity} wind={information.wind} direction={information.direction} moon_phase={information.moon_phase} pressure={information.pressure} icon={information.icon} uv={information.uv} visibility={information.visibility} condition={information.text} time={information.time} region={information.region} location={information.location} maxtemp={information.maxtemp} mintemp={information.mintemp} />}
      {error && <Error />}
      {!a && < Future weather={information.weather} icon={information.iconf} windd={information.windd} wind={information.windspeed} pressure={information.pressure_in} dewpoint={information.dewpoint} humidity={information.humidityf} time={information.timef}/>}
    </>
  )
}

export default Search