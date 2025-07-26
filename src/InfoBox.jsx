import "./InfoBox.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import Icon from '@mui/material/Icon';
export default function InfoBox({data}) {
    let RAIN_URL = 
    "https://images.unsplash.com/photo-1558409057-bbe679023136?q=80&w=1637&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let HOT_URL =
    "https://images.unsplash.com/photo-1604228741406-3faa38f4907a?q=80&w=882&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let COLD_URL =
    "https://images.unsplash.com/photo-1477468572316-36979010099d?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    return (
        <div className="info-box">
           <div className="location-box"> <h5 className="heading">Location: {data.city}</h5></div>
            <Card sx={{ maxWidth: 350,
                 backgroundColor: 'rgba(255, 255, 255, 0.1)',                 
                 
             }} className="card-box">
                <CardMedia
                    sx={{ height: 140 }}
                    image={data.humidity > 80 ? RAIN_URL : data.temp > 18 ? HOT_URL : COLD_URL}
                    title="green iguana"
                />
                <CardContent className="cardcontent">
                    <Typography gutterBottom variant="h5" component="div" style={{}}>
                   {data.weather}&nbsp;{data.humidity > 80 ? <ThunderstormIcon></ThunderstormIcon> : data.temp > 18 ? <SunnyIcon style={{fontSize: "25px"}}></SunnyIcon> : <AcUnitIcon></AcUnitIcon>}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component="span">
                       <ul  style={{ listStyleType: 'none', paddingLeft: 0 }} className="typo" component="div">
                        <li>temperature : {data.temp}&deg;C</li>
                        <li>Feels Like : {data.feelslike}&deg;C</li>
                        <li>MIN Temp : {data.mintemp}&deg;C</li>
                        <li>MAX Temp : {data.maxtemp}&deg;C</li>
                        <li>The Humidity : {data.humidity}</li>
                       </ul>
                    </Typography>
                </CardContent>
            </Card>

        </div>
    )
}