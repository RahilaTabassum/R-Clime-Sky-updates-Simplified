
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({info}) {

    const INIT_URL="https://media.istockphoto.com/id/1325033552/photo/cloudscape.webp?a=1&b=1&s=612x612&w=0&k=20&c=E7vfDzaC5CJEqdMXkLrEoT7yZAQ5j1NUsXZDKNCS-sc="
    const HOT_URL="https://plus.unsplash.com/premium_photo-1667076649924-d784d205cbba?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3VubnklMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    const COLD_URL="https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const RAIN_URL="https://images.unsplash.com/photo-1641673132450-e757bb9fa1c9?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJhaW55JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";

    return (
        <div className="InfoBox">
           
            <div className="cardContainer"><Card sx={{ maxWidth: 345 }}>
              <CardMedia
              sx={{ height: 140 }}
              image={
                info.humidity > 80
                  ? RAIN_URL 
                  : info.temp > 15
                  ? HOT_URL 
                  : COLD_URL
                }
              title="green iguana"
              />
             <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              {info.city} {
                info.humidity > 80
                  ? <ThunderstormIcon/>
                  : info.temp > 15
                  ? <SunnyIcon/> 
                  : <AcUnitIcon/>
                }
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                 <div>Temperature = {info.temp} &deg;C</div>
                 <div>Humidity = {info.humidity}</div>
                 <div>Min Temp = {info.tempMin}&deg;C</div>
                 <div>Max Temp = {info.tempMax}&deg;C</div>
                 <div>The Weather can be described as <i>{info.weather}</i> and feels like = {info.feelsLike}&deg;C</div>
              </Typography>
             </CardContent>
             
            </Card>
            </div>
        </div>
    );
}