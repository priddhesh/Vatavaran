import React from 'react'

function Future(props) {
    return (
        <>
            <div className="container text-center">
                <div className="row row-cols-6 p-2">
                    <div className="col ">
                        <div className="card" style={{ width: "10rem" }}>
                            <div className="card-body bg-secondary">
                                <h5 className="card-text">12:00 AM</h5>
                                <img className='h-10 mx-auto' src={props.icon[0]} alt="icon" />
                                <h6 className="card-title">Temp.:{props.weather[0]}°</h6>
                                <h6 className="card-title">Humidity:{props.humidity[0]}</h6>
                                <h6 className="card-title">Dewpoint:{props.dewpoint[0]}°</h6>
                                <h6 className="card-title">Wind:{props.wind[0]} {props.windd[0]}</h6>
                                <h6 className="card-title">Pressure:{props.pressure[0]}in</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card" style={{ width: "10rem" }}>
                            <div className="card-body bg-secondary">
                                <h5 className="card-text">1:00 AM</h5>
                                <img className='h-10 mx-auto' src={props.icon[1]} alt="icon" />
                                <h6 className="card-title">Temp.:{props.weather[1]}°</h6>
                                <h6 className="card-title">Humidity:{props.humidity[1]}</h6>
                                <h6 className="card-title">Dewpoint:{props.dewpoint[1]}°</h6>
                                <h6 className="card-title">Wind:{props.wind[1]} {props.windd[1]}</h6>
                                <h6 className="card-title">Pressure:{props.pressure[1]}in</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card" style={{ width: "10rem" }}>
                            <div className="card-body bg-secondary">
                                <h5 className="card-text">2:00 AM</h5>
                                <img className='h-10 mx-auto' src={props.icon[2]} alt="icon" />
                                <h6 className="card-title">Temp.:{props.weather[2]}°</h6>
                                <h6 className="card-title">Humidity:{props.humidity[2]}</h6>
                                <h6 className="card-title">Dewpoint:{props.dewpoint[2]}°</h6>
                                <h6 className="card-title">Wind:{props.wind[2]} {props.windd[2]}</h6>
                                <h6 className="card-title">Pressure:{props.pressure[2]}in</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card" style={{ width: "10rem" }}>
                            <div className="card-body bg-secondary">
                                <h5 className="card-text">3:00 AM</h5>
                                <img className='h-10 mx-auto' src={props.icon[3]} alt="icon" />
                                <h6 className="card-title">Temp.:{props.weather[3]}°</h6>
                                <h6 className="card-title">Humidity:{props.humidity[3]}</h6>
                                <h6 className="card-title">Dewpoint:{props.dewpoint[3]}°</h6>
                                <h6 className="card-title">Wind:{props.wind[3]} {props.windd[3]}</h6>
                                <h6 className="card-title">Pressure:{props.pressure[3]}in</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card" style={{ width: "10rem" }}>
                            <div className="card-body bg-secondary">
                                <h5 className="card-text">4:00 AM</h5>
                                <img className='h-10 mx-auto' src={props.icon[4]} alt="icon" />
                                <h6 className="card-title">Temp.:{props.weather[4]}°</h6>
                                <h6 className="card-title">Humidity:{props.humidity[4]}</h6>
                                <h6 className="card-title">Dewpoint:{props.dewpoint[4]}°</h6>
                                <h6 className="card-title">Wind:{props.wind[4]} {props.windd[4]}</h6>
                                <h6 className="card-title">Pressure:{props.pressure[4]}in</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card" style={{ width: "10rem" }}>
                            <div className="card-body bg-secondary">
                                <h5 className="card-text">5:00 AM</h5>
                                <img className='h-10 mx-auto' src={props.icon[5]} alt="icon" />
                                <h6 className="card-title">Temp.:{props.weather[5]}°</h6>
                                <h6 className="card-title">Humidity:{props.humidity[5]}</h6>
                                <h6 className="card-title">Dewpoint:{props.dewpoint[5]}°</h6>
                                <h6 className="card-title">Wind:{props.wind[5]} {props.windd[5]}</h6>
                                <h6 className="card-title">Pressure:{props.pressure[5]}in</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row row-cols-6 p-2">
                    <div className="col"><div className="card" style={{ width: "10rem" }}>
                        <div className="card-body bg-secondary">
                            <h5 className="card-text">6:00 AM</h5>
                            <img className='h-10 mx-auto' src={props.icon[6]} alt="icon" />
                            <h6 className="card-title">Temp.:{props.weather[6]}°</h6>
                            <h6 className="card-title">Humidity:{props.humidity[6]}</h6>
                            <h6 className="card-title">Dewpoint:{props.dewpoint[6]}°</h6>
                            <h6 className="card-title">Wind:{props.wind[6]} {props.windd[6]}</h6>
                            <h6 className="card-title">Pressure:{props.pressure[6]}in</h6>
                        </div>
                    </div>
                    </div>
                    <div className="col">
                        <div className="card" style={{ width: "10rem" }}>
                            <div className="card-body bg-secondary">
                                <h5 className="card-text">7:00 AM</h5>
                                <img className='h-10 mx-auto' src={props.icon[7]} alt="icon" />
                                <h6 className="card-title">Temp.:{props.weather[7]}°</h6>
                                <h6 className="card-title">Humidity:{props.humidity[7]}</h6>
                                <h6 className="card-title">Dewpoint:{props.dewpoint[7]}°</h6>
                                <h6 className="card-title">Wind:{props.wind[7]} {props.windd[7]}</h6>
                                <h6 className="card-title">Pressure:{props.pressure[7]}in</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card" style={{ width: "10rem" }}>
                            <div className="card-body bg-secondary">
                                <h5 className="card-text">8:00 AM</h5>
                                <img className='h-10 mx-auto' src={props.icon[8]} alt="icon" />
                                <h6 className="card-title">Temp.:{props.weather[8]}°</h6>
                                <h6 className="card-title">Humidity:{props.humidity[8]}</h6>
                                <h6 className="card-title">Dewpoint:{props.dewpoint[8]}°</h6>
                                <h6 className="card-title">Wind:{props.wind[8]} {props.windd[8]}</h6>
                                <h6 className="card-title">Pressure:{props.pressure[8]}in</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card" style={{ width: "10rem" }}>
                            <div className="card-body bg-secondary">
                                <h5 className="card-text">9:00 AM</h5>
                                <img className='h-10 mx-auto' src={props.icon[9]} alt="icon" />
                                <h6 className="card-title">Temp.:{props.weather[9]}°</h6>
                                <h6 className="card-title">Humidity:{props.humidity[9]}</h6>
                                <h6 className="card-title">Dewpoint:{props.dewpoint[9]}°</h6>
                                <h6 className="card-title">Wind:{props.wind[9]} {props.windd[9]}</h6>
                                <h6 className="card-title">Pressure:{props.pressure[9]}in</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card" style={{ width: "10rem" }}>
                            <div className="card-body bg-secondary">
                                <h5 className="card-text">10:00 AM</h5>
                                <img className='h-10 mx-auto' src={props.icon[10]} alt="icon" />
                                <h6 className="card-title">Temp.:{props.weather[10]}°</h6>
                                <h6 className="card-title">Humidity:{props.humidity[10]}</h6>
                                <h6 className="card-title">Dewpoint:{props.dewpoint[10]}°</h6>
                                <h6 className="card-title">Wind:{props.wind[10]} {props.windd[10]}</h6>
                                <h6 className="card-title">Pressure:{props.pressure[10]}in</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card" style={{ width: "10rem" }}>
                            <div className="card-body bg-secondary">
                                <h5 className="card-text">11:00 AM</h5>
                                <img className='h-10 mx-auto' src={props.icon[11]} alt="icon" />
                                <h6 className="card-title">Temp.:{props.weather[11]}°</h6>
                                <h6 className="card-title">Humidity:{props.humidity[11]}</h6>
                                <h6 className="card-title">Dewpoint:{props.dewpoint[11]}°</h6>
                                <h6 className="card-title">Wind:{props.wind[11]} {props.windd[11]}</h6>
                                <h6 className="card-title">Pressure:{props.pressure[11]}in</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row row-cols-6 p-2">
                    <div className="col"><div className="card" style={{ width: "10rem" }}>
                        <div className="card-body bg-secondary">
                            <h5 className="card-text">12:00 PM</h5>
                            <img className='h-10 mx-auto' src={props.icon[12]} alt="icon" />
                            <h6 className="card-title">Temp.:{props.weather[12]}°</h6>
                            <h6 className="card-title">Humidity:{props.humidity[12]}</h6>
                            <h6 className="card-title">Dewpoint:{props.dewpoint[12]}°</h6>
                            <h6 className="card-title">Wind:{props.wind[12]} {props.windd[12]}</h6>
                            <h6 className="card-title">Pressure:{props.pressure[12]}in</h6>
                        </div>
                    </div>
                    </div>
                    <div className="col"><div className="card" style={{ width: "10rem" }}>
                        <div className="card-body bg-secondary">
                            <h5 className="card-text">1:00 PM</h5>
                            <img className='h-10 mx-auto' src={props.icon[13]} alt="icon" />
                            <h6 className="card-title">Temp.:{props.weather[13]}°</h6>
                            <h6 className="card-title">Humidity:{props.humidity[13]}</h6>
                            <h6 className="card-title">Dewpoint:{props.dewpoint[13]}°</h6>
                            <h6 className="card-title">Wind:{props.wind[13]} {props.windd[13]}</h6>
                            <h6 className="card-title">Pressure:{props.pressure[13]}in</h6>
                        </div>
                    </div>
                    </div>
                    <div className="col"><div className="card" style={{ width: "10rem" }}>
                        <div className="card-body bg-secondary">
                            <h5 className="card-text">2:00 PM</h5>
                            <img className='h-10 mx-auto' src={props.icon[14]} alt="icon" />
                            <h6 className="card-title">Temp.:{props.weather[14]}°</h6>
                            <h6 className="card-title">Humidity:{props.humidity[14]}</h6>
                            <h6 className="card-title">Dewpoint:{props.dewpoint[14]}°</h6>
                            <h6 className="card-title">Wind:{props.wind[14]} {props.windd[14]}</h6>
                            <h6 className="card-title">Pressure:{props.pressure[14]}in</h6>
                        </div>
                    </div>
                    </div>
                    <div className="col"><div className="card" style={{ width: "10rem" }}>
                        <div className="card-body bg-secondary">
                            <h5 className="card-text">3:00 PM</h5>
                            <img className='h-10 mx-auto' src={props.icon[15]} alt="icon" />
                            <h6 className="card-title">Temp.:{props.weather[15]}°</h6>
                            <h6 className="card-title">Humidity:{props.humidity[15]}</h6>
                            <h6 className="card-title">Dewpoint:{props.dewpoint[15]}°</h6>
                            <h6 className="card-title">Wind:{props.wind[15]} {props.windd[15]}</h6>
                            <h6 className="card-title">Pressure:{props.pressure[15]}in</h6>
                        </div>
                    </div>
                    </div>
                    <div className="col"><div className="card" style={{ width: "10rem" }}>
                        <div className="card-body bg-secondary">
                            <h5 className="card-text">4:00 PM</h5>
                            <img className='h-10 mx-auto' src={props.icon[16]} alt="icon" />
                            <h6 className="card-title">Temp.:{props.weather[16]}°</h6>
                            <h6 className="card-title">Humidity:{props.humidity[16]}</h6>
                            <h6 className="card-title">Dewpoint:{props.dewpoint[16]}°</h6>
                            <h6 className="card-title">Wind:{props.wind[16]} {props.windd[16]}</h6>
                            <h6 className="card-title">Pressure:{props.pressure[16]}in</h6>
                        </div>
                    </div>
                    </div>
                    <div className="col"><div className="card" style={{ width: "10rem" }}>
                        <div className="card-body bg-secondary">
                            <h5 className="card-text">5:00 PM</h5>
                            <img className='h-10 mx-auto' src={props.icon[17]} alt="icon" />
                            <h6 className="card-title">Temp.:{props.weather[17]}°</h6>
                            <h6 className="card-title">Humidity:{props.humidity[17]}</h6>
                            <h6 className="card-title">Humidity:{props.humidity[17]}°</h6>
                            <h6 className="card-title">Wind:{props.wind[17]} {props.windd[17]}</h6>
                            <h6 className="card-title">Pressure:{props.pressure[17]}in</h6>

                        </div>
                    </div>
                    </div>
                </div>
                <div className="row row-cols-6 p-2">
                    <div className="col"><div className="card" style={{ width: "10rem" }}>
                        <div className="card-body bg-secondary">
                            <h5 className="card-text">6:00 PM</h5>
                            <img className='h-10 mx-auto' src={props.icon[18]} alt="icon" />
                            <h6 className="card-title">Temp.:{props.weather[18]}°</h6>
                            <h6 className="card-title">Humidity:{props.humidity[18]}</h6>
                            <h6 className="card-title">Humidity:{props.humidity[18]}°</h6>
                            <h6 className="card-title">Wind:{props.wind[18]} {props.windd[18]}</h6>
                            <h6 className="card-title">Pressure:{props.pressure[18]}in</h6>
                        </div>
                    </div>
                    </div>
                    <div className="col"><div className="card" style={{ width: "10rem" }}>
                        <div className="card-body bg-secondary">
                            <h5 className="card-text">7:00 PM</h5>
                            <img className='h-10 mx-auto' src={props.icon[19]} alt="icon" />
                            <h6 className="card-title">Temp.:{props.weather[19]}°</h6>
                            <h6 className="card-title">Humidity:{props.humidity[19]}</h6>
                            <h6 className="card-title">Humidity:{props.humidity[19]}°</h6>
                            <h6 className="card-title">Wind:{props.wind[19]} {props.windd[19]}</h6>
                            <h6 className="card-title">Pressure:{props.pressure[19]}in</h6>
                        </div>
                    </div>
                    </div>
                    <div className="col"><div className="card" style={{ width: "10rem" }}>
                        <div className="card-body bg-secondary">
                            <h5 className="card-text">8:00 PM</h5>
                            <img className='h-10 mx-auto' src={props.icon[20]} alt="icon" />
                            <h6 className="card-title">Temp.:{props.weather[20]}°</h6>
                            <h6 className="card-title">Humidity:{props.humidity[20]}</h6>
                            <h6 className="card-title">Humidity:{props.humidity[20]}°</h6>
                            <h6 className="card-title">Wind:{props.wind[20]} {props.windd[20]}</h6>
                            <h6 className="card-title">Pressure:{props.pressure[20]}in</h6>
                        </div>
                    </div>
                    </div>
                    <div className="col"><div className="card" style={{ width: "10rem" }}>
                        <div className="card-body bg-secondary">
                            <h5 className="card-text">9:00 PM</h5>
                            <img className='h-10 mx-auto' src={props.icon[21]} alt="icon" />
                            <h6 className="card-title">Temp.:{props.weather[21]}°</h6>
                            <h6 className="card-title">Humidity:{props.humidity[21]}</h6>
                            <h6 className="card-title">Humidity:{props.humidity[21]}°</h6>
                            <h6 className="card-title">Wind:{props.wind[21]} {props.windd[21]}</h6>
                            <h6 className="card-title">Pressure:{props.pressure[21]}in</h6>
                        </div>
                    </div>
                    </div>
                    <div className="col"><div className="card" style={{ width: "10rem" }}>
                        <div className="card-body bg-secondary">
                            <h5 className="card-text">10:00 PM</h5>
                            <img className='h-10 mx-auto' src={props.icon[22]} alt="icon" />
                            <h6 className="card-title">Temp.:{props.weather[22]}°</h6>
                            <h6 className="card-title">Humidity:{props.humidity[22]}</h6>
                            <h6 className="card-title">Humidity:{props.humidity[22]}°</h6>
                            <h6 className="card-title">Wind:{props.wind[22]} {props.windd[22]}</h6>
                            <h6 className="card-title">Pressure:{props.pressure[22]}in</h6>
                        </div>
                    </div>
                    </div>
                    <div className="col"><div className="card" style={{ width: "10rem" }}>
                        <div className="card-body bg-secondary">
                            <h5 className="card-text">11:00 PM</h5>
                            <img className='h-10 mx-auto' src={props.icon[23]} alt="icon" />
                            <h6 className="card-title">Temp.:{props.weather[23]}°</h6>
                            <h6 className="card-title">Humidity:{props.humidity[23]}</h6>
                            <h6 className="card-title">Humidity:{props.humidity[23]}°</h6>
                            <h6 className="card-title">Wind:{props.wind[23]} {props.windd[23]}</h6>
                            <h6 className="card-title">Pressure:{props.pressure[23]}in</h6>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Future
