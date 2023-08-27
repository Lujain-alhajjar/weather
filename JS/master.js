const api ={
    base: "https://api.openweathermap.org/data/2.5/",
    key: "b01b03911d7296006f62d07356bb71ca",
}
let weather_obj ={};
let app_container = document.querySelector("#app_container");
let weather_location = document.querySelector("#location");
let date = document.querySelector("#date");
let temperature_current = document.querySelector("#temperature_current");
let temperature_max_min = document.querySelector("#temperature_max_min");
let weather = document.querySelector("#weather");
let weather_desc = document.querySelector("#weather_desc");

document.addEventListener("readystatechange",(e)=>{
    if(e.target.readyState==="complete"){
        AddSearchListener();
    }
});
 const AddSearchListener =()=>{
    let loc = document.querySelector("#location_input");
    loc.addEventListener("keypress",(e)=>{
        if(e.key=="Enter"){
            
            getWeatherData(loc.value);
        }
    });
    document.querySelector("button").addEventListener("click",()=>{
        getWeatherData(loc.value);
    });
};
const getWeatherData=(loc)=>{
     fetch(
        `${api.base}weather?q=${loc}&&units=metric&appid=${api.key}`
    ).then((res)=>res.json()).then((result)=>{
        weather_obj={...result};
        fillData(weather_obj);
    });
};

const fillData=(weather_obj)=>{
    weather_location.textContent = weather_obj.name + " , " + weather_obj.sys.country;
    date.textContent=dateBuild(new Date());
    temperature_current.innerHTML = "Current Temprature : " + Math.round(weather_obj.main.temp) + " ْC";
    // if(weather_obj.main.temp>25||weather_obj.main.temp==25){
    //     document.querySelector(".App")style='bacground-image:'
    // }
    // if(weather_obj.main.temp<25){
    //     document.querySelector(".App").style.backgroundImage=url("../images/winter.jftf");
    // }
    temperature_max_min.textContent=
    "Hight : "+
    Math.round(weather_obj.main.temp_max)+
    " ْC / low : "+
    Math.round(weather_obj.main.temp_min)+
    " ْC ";
    weather.textContent=weather_obj.weather[0].description;
    if(weather_obj.weather[0].description==="few clouds"||weather_obj.weather[0].description==="overcast clouds"){
        let rain=document.createElement("i");
        rain.classList="fa-solid fa-cloud-sun";
        if(document.querySelector("svg")!=null){

            document.querySelector("svg").remove();
        }

        document.querySelector(".App").appendChild(rain);
    }
    if(weather_obj.weather[0].description==="clear sky"){
        weather.textContent=weather_obj.weather[0].main + "  ";
        let Clear=document.createElement("i");
        Clear.classList="fa-solid fa-sun";
        if(document.querySelector("svg")!=null){

            document.querySelector("svg").remove();
        }
        document.querySelector(".App").appendChild(Clear);
    }
    if(weather_obj.weather[0].description=="broken clouds" || weather_obj.weather[0].description=="scattered clouds"){
        weather.textContent=weather_obj.weather[0].main + "  ";
        let cloud=document.createElement("i");
        cloud.classList="fa-solid fa-cloud";
        if(document.querySelector("svg")!=null){

            document.querySelector("svg").remove();
        }
        document.querySelector(".icon").appendChild(cloud);
    }
    if(weather_obj.weather[0].description=="Clouds"){
        weather.textContent=weather_obj.weather[0].main + "  ";
        let cloud=document.createElement("i");
        cloud.classList="fa-brands fa-cloud";
        if(document.querySelector("svg")!=null){

            document.querySelector("svg").remove();
        }
        document.querySelector(".icon").appendChild(cloud);
    }
   
    if(weather_obj.weather[0].description==="mist"){
        weather.textContent=weather_obj.weather[0].main + "  ";
        let cloud=document.createElement("i");
        cloud.classList="fa-brands fa-cloudversify";
        if(document.querySelector("svg")!=null){

            document.querySelector("svg").remove();
        }
        document.querySelector(".icon").appendChild(cloud);
    }
    if(weather_obj.weather[0].description==="haze"){
        weather.textContent=weather_obj.weather[0].main + "  ";
        let cloud=document.createElement("i");
        cloud.classList="fa-solid fa-smog";
        if(document.querySelector("svg")!=null){

            document.querySelector("svg").remove();
        }
        document.querySelector(".icon").appendChild(cloud);
    }
    if(weather_obj.weather[0].description==="light rain"){
        weather.textContent=weather_obj.weather[0].main + "  ";
        let cloud=document.createElement("i");
        cloud.classList="fa-solid fa-cloud-sun-rain";
        if(document.querySelector("svg")!=null){

            document.querySelector("svg").remove();
        }
        document.querySelector(".icon").appendChild(cloud);
    }
    if(weather_obj.weather[0].description==="moderate rain"){
        weather.textContent=weather_obj.weather[0].main + "  ";
        let cloud=document.createElement("i");
        cloud.classList="fa-solid fa-cloud-rain";
        if(document.querySelector("svg")!=null){

            document.querySelector("svg").remove();
        }
        document.querySelector(".icon").appendChild(cloud);
    }

   
    if(weather_obj.weather[0].description==="smoke"){
        weather.textContent=weather_obj.weather[0].main + "  ";
        let cloud=document.createElement("i");
        cloud.classList="fa-solid fa-smog";
        document.querySelector("svg").remove(); 
        document.querySelector(".icon").appendChild(cloud);
    }

   
    
    weather_desc.textContent=' wind speed is : '+ weather_obj.wind.speed + '  Km/h';

};
const dateBuild = (d)=>{
    let date = String(new window.Date());
    date=date.slice(3,15);
    return date;

};
getWeatherData("Seoul");
