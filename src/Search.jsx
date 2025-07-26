 import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { fakerTH, tr } from '@faker-js/faker';
import { getOffsetLeft } from '@mui/material/Popover';
import "./Search.css"

export default function Search({updateData}) {
    let [location , setLocation] = useState(""); 
    let [err,setErr] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = import.meta.env.VITE_API_KEY;
    
      let getWeather = async () => {
        try{
            let result = await fetch(`${API_URL}?q=${location}&appid=${API_KEY}&units=metric`);
        let jsonData = await result.json();

        let Data = {
            city : location,
            temp : jsonData.main.temp,
            mintemp :  jsonData.main.temp_min,
            maxtemp :  jsonData.main.temp_max,
            humidity : jsonData.main.humidity,
            feelslike: jsonData.main.feels_like,
            weather: jsonData.weather[0].description,
            }
         return Data;
        }catch(err) {
           throw err;
        }
        
      }

    let locationInput = (event) => {
        setLocation(event.target.value);
    }

    let HandleSubmit =async (event) =>{
        try{
            setErr(false)
              event.preventDefault();
        setLocation("");
       let res = await getWeather();
       updateData(res);
        }catch(err) {
            setErr(true);
        }
      
    }
    return(
        <div className='search-box'>
            <h1>Search Weather Information</h1>
            <br /> <br />
            <form action="" onSubmit={HandleSubmit}>
                 <TextField id="city" label="City" variant="outlined"  value={location} onChange={locationInput} color='white'/>
               
                 <Button id='Submit' variant="contained" type='submit'>Search</Button>
            </form>
              {err && <p style={{color: "red" , marginBottom: 0 }}>No Such Place Exits!</p>}
        </div>
    )
    
}