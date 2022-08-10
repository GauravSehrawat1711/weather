import React from "react";
import "./Weather.css";
import aa from "./aa.png";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
//f841dab371eaa3703099fcd15e64c964
//https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=f841dab371eaa3703099fcd15e64c964

export default function () {
  const [data, setData] = useState();

  const apiKey = "f841dab371eaa3703099fcd15e64c964";
  const [input, setInput] = useState("");
  const [mintemp, setMinTemp] = useState([]);
  const [maxtemp, seMxTemp] = useState([]);
  const [city,setCity]=useState("")
  const [fore,setForcast]=useState([])

  const [date, setDate] = useState([]);
  const [st,setSt]=useState(false);

  const getWeattherDeatial = async (cityname) => {
    if (!cityname) {
      return;
    }
    else{
      setCity(cityname)
    var mntemp = [];
    var mxtemp = [];
    var date=[];
    var fcaste=[];
    const ap =
      "https://api.openweathermap.org/data/2.5/forecast?q=" +
      cityname +
      "&appid=" +
      apiKey;
    let result = await fetch(ap)
      .then((res) => res.json())
      .then((result) => {
        for (let i = 0; i < 40; i++) {
          mntemp.push(result.list[i].main.temp_min.toFixed(2));
        }
        for (let i = 0; i < 40; i++) {
          mxtemp.push(result.list[i].main.temp_min.toFixed(2));
         
        }
        for (let i = 0; i < 40; i++) {
          date.push(result.list[i].dt_txt.slice(0,10));
          // console.log(result.list[i].dt_txt)
        }
        for (let i = 0; i < 40; i++) {
           fcaste.push(result.list[i].weather[0].description.toUpperCase());
          //  console.log(result.list[i].weather[0].description)
        }
        if(result){
          setSt(true);
        }
        

    });
  }
    
    setMinTemp(mntemp);
    seMxTemp(mxtemp);
    setDate(date);
    setForcast(fcaste)
  };

  useEffect(() => {
    getWeattherDeatial();
  }, []);
  const handleSearch = () => {
    getWeattherDeatial(input);
    
  };
  const handleChange = (e) => {
    // console.log(e.target.value)
    setInput(e.target.value);
  };

  console.log(fore)
  return (
    <>
     <div>
        <form className="d-flex">
          <input
            onChange={handleChange}
            value={input}
            className="form-control me-2"
            type="search"
            placeholder="Enter Place"
            aria-label="Search"
          />
          <button
            className="btn btn-danger"
            type="button"
            onClick={handleSearch}
          >
            Search
          </button>
        </form>
      </div>
  {!st && <div>
    Please enter a valid Place
  </div> }
      {st && city.length>0 && <div className="container">
        <div className="row row-cols-3">
          <div className="col">
            <div className="shadow rounded weather">
              <div className="upper">
              <img className="weathericon" src={aa} alt="Image" />
              <span>
                {date[1]}
              </span>
              </div>
              <div className="city">
                <h5>{city.toUpperCase()}</h5>
                <span>{fore[1]}</span>
              </div>

              <div className="temp">
                
                <div>{`Min ${(mintemp[1] - 273).toFixed(1)}°C`}</div>
                <div> {`Max ${(maxtemp[1] - 273).toFixed(1)}°C`}</div>
              </div>
            </div>
          </div>
          <div className="col">
                <div className="shadow rounded weather">
                <div className="upper">
              <img className="weathericon" src={aa} alt="Image" />
              <span>
                {date[10]}
              </span>
              </div>
              <div className="city">
                <h5>{city.toUpperCase()}</h5>
                <span>{fore[10]}</span>
              </div>
              <div className="temp">
                <div>{`Min ${(mintemp[10] - 273).toFixed(1)}°C`}</div>
                <div> {`Max ${(maxtemp[10] - 273).toFixed(1)}°C`}</div>
              </div>
            </div>
          </div>
          <div className="col">
            
            <div className="shadow rounded weather">
            <div className="upper">
              <img className="weathericon" src={aa} alt="Image" />
              <span>
                {date[17]}
              </span>
              </div>  <div className="city">
                <h5>{city.toUpperCase()}</h5>
                <span>{fore[17]}</span>
              </div>
              <div className="temp">
              <div>{`Min ${(mintemp[17] - 273).toFixed(1)}°C`}</div>
              <div> {`Max ${(maxtemp[17] - 273).toFixed(1)}°C`}</div>
              </div>
            </div>
          </div>
        
        <div className="col">
        
          <div className="shadow rounded weather">
          <div className="upper">
              <img className="weathericon" src={aa} alt="Image" />
              <span>
                {date[26]}
              </span>
              </div>  <div className="city">
              <h5>{city.toUpperCase()}</h5>
              <span>{fore[26]}</span>
            </div>
            <div className="temp">
            <div>{`Min ${(mintemp[26] - 273).toFixed(1)}°C`}</div>
            <div> {`Max ${(maxtemp[26] - 273).toFixed(1)}°C`}</div>
            </div>
          </div>
        </div>

        <div className="col">
         
          <div className="shadow rounded weather">
          <div className="upper">
              <img className="weathericon" src={aa} alt="Image" />
              <span>
                {date[34]}
              </span>
              </div> <div className="city">
              <h5>{city.toUpperCase()}</h5>
              <span>{fore[34]}</span>
                          </div>
            <div className="temp">
            <div>{`Min ${(mintemp[34] - 273).toFixed(1)}°C`}</div>
            <div> {`Max ${(maxtemp[34] - 273).toFixed(1)}°C`}</div>
            </div>
          </div>
        </div>
      </div>
      </div>
    }</>
  );
}
