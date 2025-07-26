import Search from "./Search.jsx"
import InfoBox from "./InfoBox.jsx"
import "./Weather_App.css"
import { useState } from "react"
export default function Weather_app() {
    let [data, setData] = useState({
        city: "Hubli",
        feelslike: 37.56,
        humidity: 50,
        maxtemp: 33.03,
        mintemp: 33.03,
        temp: 33.03,
        weather: "overcast clouds"
    })

      let updateData = (res) =>{
            setData(res);
            console.log(data);
      }
    return (
        <div>
            <Search updateData={updateData}></Search>
            <InfoBox data={data}></InfoBox>
            <div className="warning">
            <p>⚠️ Disclaimer: The weather data shown may not be 100% accurate. It is based on information provided by a third-party API and may vary.</p>
            </div>
        </div>
    )
}