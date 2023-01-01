import React,{useState, useEffect} from 'react'
import Spinner from './Spinner';
import Weather from './Weather';
import Home from './Home';
import Error from './Error';
import './style.css';

let API_KEY = "5373b44134da46fab1e133156222012"

function Search() {
  const [spinner, setspinner] = useState(false)
  const [city, setcity] = useState("")
  const [temp, settemp] = useState()
  const [humidity, sethumidity] = useState()
  const [wind, setwind] = useState()
  const [pressure, setpressure] = useState()
  const [icon, seticon] = useState("")
  const [uv, setuv] = useState()
  const [visibility, setvisibility] = useState()
  const [text, settext] = useState()
  const [feelslike, setfeelslike] = useState();
  const [location, setlocation] = useState("");
  const [region, setregion] = useState("")
  const [mintemp, setmintemp] = useState()
  const [maxtemp, setmaxtemp] = useState()
  const [time, settime] = useState()
  const [moon_phase, setmoon_phase] = useState("")
  const [direction, setdirection] = useState("")
  const [latitude, setlatitude] = useState()
  const [longitude, setlongitude] = useState();
  const [precipitation, setprecipitation] = useState()
  const [status, setstatus] = useState(false)
  const [count, setcount] = useState(0)
  const [error, seterror] = useState(false)
  const [color, setcolor] = useState({
    bg:"",
    tc:""
  })
  const [isday, setisday] = useState(false)
  function value(e)
  {
      setcity(e.target.value);
  }

  useEffect(() => {
      document.getElementById("button-addon2").addEventListener('click', search)
    return () => {
      document.removeEventListener('click',search)
    }
  },[status])
  
  function search()
  {
    setstatus((val)=> !val);
    if(city!="")
    {
    setcount((cnt)=> cnt+1);
    setspinner(true);
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&aq=yes`)
      .then((response)=> response.json())
      .then((data)=>{
          console.log(data);
          seterror(false);
          settemp(data.current.temp_c);
          setisday(data.current.is_day);
          sethumidity(data.current.humidity);
          setwind(data.current.wind_mph);
          setdirection(data.current.wind_dir);
          setpressure(data.current.pressure_in);
          seticon(data.current.condition.icon);
          setvisibility(data.current.vis_miles);
          settext(data.current.condition.text);
          setuv(data.current.uv);
          setlocation(data.location.name);
          setregion(data.location.region);
          setmintemp(data.forecast.forecastday[0].day.mintemp_c);
          setmaxtemp(data.forecast.forecastday[0].day.maxtemp_c);
          setmoon_phase(data.forecast.forecastday[0].astro.moon_phase);
          setlatitude(data.location.lat);
          setlongitude(data.location.lon);
          setfeelslike(data.current.feelslike_c);
          settime(data.location.localtime);
          setprecipitation(data.current.precip_mm);
          setisday(data.current.is_day);
          setspinner(false);
          
      }).catch((err)=>{
        seterror(true);
        console.log(err);
      })
    }
  }
  return (
    <>
    <div className="input-group mb-2">
        <input onChange={value} type="text" className="form-control" aria-label="Recipient's username" aria-describedby="button-addon2"/>
        <button onClick={search} id="button-addon2" className="btn btn-primary" type="submit">Search</button>
    </div>
    {count==0 && <Home/>}
    {!error && spinner && <Spinner/>}
    {!error && !spinner && count!=0 && <Weather temp={temp} latitude={latitude} precipitation={precipitation} isday={isday} longitude={longitude} feelslike={feelslike} humidity={humidity} wind={wind} direction={direction} moon_phase={moon_phase} pressure={pressure} icon={icon} uv={uv} visibility={visibility} condition={text} time={time} region={region} location={location} maxtemp={maxtemp} mintemp={mintemp}/>}
    {error && <Error/>} 
    </>
  )
}

export default Search