import React,{useState} from 'react'
import Graph from './Graph'
import './style.css'

function Weather(props) {
    const [val, setVal] = useState(-1);
    const [mode, setMode] = useState("Night");
    const [bg, setBg] = useState("#c2f9fc");
    function changeMode()
    {
        if(mode === "Night")
        {
            setMode("Day");
            setBg("#787a7d");
        }else{
            setMode("Night");
            setBg("#c2f9fc");
        }
    }
    return (
        <>
        <div className={`d-flex flex-row mb-6 bg-${props.isday==="1" ? "secondary" : "dark"}  text-${props.isday==="1" ? "dark" : "white"} text-emphasis-info1`}>
            <div className='container p-1 mb-2 '>
                <div className="d-flex justify-content-around">
                    <h2>{props.location}{`${props.region}` !== `${props.location}` ? `, ${props.region}` : ``}</h2>
                    <h4 className='my-1'>{props.time}</h4>
                </div>
                <div className="d-flex justify-content-around">
                    <div className='container my-auto'>
                        <h1 className='text-center' style={{ fontSize: "90px" }}>{props.temp}°</h1>
                        <h2 className='text-center my-3'>Feels like {props.feelslike}°</h2>
                        <h4 className='text-center my-3'>Day {props.maxtemp}°↑ Night {props.mintemp}°↓ </h4>
                    </div>
                    <div className="container">
                        <img className='h-100 w-100 d-inline-block col-2 mx-auto' src={props.icon} alt="icon" />
                        <h3 className='text-center'>{props.condition}</h3>
                    </div>
                </div>
            </div>
            <div className={`container text-center text-${props.isday==="1" ? "dark" : "white"}`}>
                <div className="row">
                    <div className="col card bg-light p-1 bg-opacity-10" style={{ width: "0.5rem", height: "5%" }}>
                        <h6 className="card-title text-center"><b>Humidity</b></h6>
                        <img style={{ height: "90px" }} src="https://cdn-icons-png.flaticon.com/512/6393/6393411.png" className="card-img-top" alt="" />
                        <div className="card-body">
                            <p className="card-text text-center"><b>{props.humidity}%</b></p>
                        </div>
                    </div>
                    <div className="col card bg-light p-1 bg-opacity-10" style={{ width: "0.5rem", height: "5%" }}>
                        <h6 className="card-title text-center"><b>Visibility</b></h6>
                        <img style={{ height: "90px" }} src="https://cdn-icons-png.flaticon.com/512/4005/4005908.png" className="card-img-top" alt="wind-speed" />
                        <div className="card-body">
                            <p className="card-text text-center"><b>{props.visibility}mph</b></p>
                        </div>
                    </div>
                    <div className="col card bg-light p-1   bg-opacity-10" style={{ width: "0.5rem", height: "5%" }}>
                        <h6 className="card-title text-center"><b>Pressure</b></h6>
                        <img style={{ height: "90px" }} src={require('./images/icons8-atmospheric-pressure-96.png')} className="card-img-top" alt="wind-speed" />
                        <div className="card-body">
                            <p className="card-text text-center"><b>{props.pressure}in</b></p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col card bg-light p-1 bg-opacity-10" style={{ width: "0.5rem", height: "5%" }}>
                        <h6 className="card-title text-center"><b>UV Index</b></h6>
                        <img style={{ height: "90px" }} src={require('./images/icons8-sunlight-100.png')} className="card-img-top" alt="wind-speed" />
                        <div className="card-body">
                            <p className="card-text text-center"><b>{props.uv}</b></p>
                        </div>
                    </div>
                    <div className="col card bg-light p-1  bg-opacity-10" style={{ width: "0.5rem", height: "5%" }}>
                        <h6 className="card-title text-center"><b>Wind</b></h6>
                        <img style={{ height: "90px" }} src={require("./images/icons8-wind-100.png")} className="card-img-top" alt="wind-speed" />
                        <div className="card-body">
                            <p className="card-text text-center"><b>{props.wind}mph</b></p>
                        </div>
                    </div>
                    <div className="col card bg-light p-1 bg-opacity-10" style={{ width: "0.5rem", height: "5%" }}>
                        <h6 className="card-title text-center"><b>Wind Direction</b></h6>
                        <img style={{ height: "90px" }} src={require("./images/direction.png")} className="card-img-top" alt="wind-speed" />
                        <div className="card-body">
                            <p className="card-text text-center"><b>{props.direction}</b></p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col card bg-light p-1  bg-opacity-10" style={{ width: "0.5rem", height: "5%" }}>
                        <h6 className="card-title text-center"><b>Moon Phase</b></h6>
                        <img style={{ height: "90px" }} src={require('./images/phase.png')} className="card-img-top" alt="wind-speed" />
                        <div className="card-body">
                            <p className="card-text text-center"><b>{props.moon_phase}</b></p>
                        </div>
                    </div>
                    <div className="col card bg-light p-1  bg-opacity-10" style={{ width: "0.5rem", height: "5%" }}>
                        <h6 className="card-title text-center"><b>Location</b></h6>
                        <img style={{ height: "90px" }} src={require("./images/latitude.png")} className="card-img-top" alt="wind-speed" />
                        <div className="card-body">
                            <p className="card-text text-center"><b>Lat:{props.latitude} Lon:{props.longitude}</b></p>
                        </div>
                    </div>
                    <div className="col card bg-light p-1 bg-opacity-10" style={{ width: "0.5rem", height: "5%" }}>
                        <h6 className="card-title text-center"><b>Precipitation</b></h6>
                        <img style={{ height: "90px" }} src={require("./images/precipitation.png")} className="card-img-top" alt="wind-speed" />
                        <div className="card-body">
                            <p className="card-text text-center"><b>{props.precipitation}mm</b></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <div className='py-2 d-flex justify-content-between'>
                <div >
                    <button type="button" onClick={() => { setVal(1); document.getElementById("Temperature").setAttribute("disabled", true); document.getElementById("Pressure").removeAttribute("disabled", true); document.getElementById("Humidity").removeAttribute("disabled", true) }} id="Temperature"  className="btn btn-primary mx-3">Temperature</button>
                    <button type="button" onClick={() => { setVal(2); document.getElementById("Pressure").setAttribute("disabled", true); document.getElementById("Temperature").removeAttribute("disabled", true); document.getElementById("Humidity").removeAttribute("disabled", true) }} id="Pressure" className="btn btn-primary mx-3">Pressure</button>
                    <button type="button" onClick={() => { setVal(3); document.getElementById("Humidity").setAttribute("disabled", true); document.getElementById("Pressure").removeAttribute("disabled", true); document.getElementById("Temperature").removeAttribute("disabled", true) }} id="Humidity" className="btn btn-primary mx-3">Humidity</button>
                </div>
                <div className="form-check form-switch mx-3">
                <input onClick={changeMode}  className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                <label className={`form-check-label text-dark`} htmlFor="flexSwitchCheckChecked">{mode} Mode</label>
                </div>
        </div>
        <Graph temp={props.gweather} bg={bg} pressure = {props.fpressure} humidity={props.fhumidity} val ={val}/>
        </>
    )
}

export default Weather


