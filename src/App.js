import React, { Component } from 'react'
import Form from "./Components/form"
import Weather from "./Components/weather"

let API_Key="81b7fe39e23fbc6ba9dec59388f0759e"

class App extends Component {
    state={
        country :"",
        clouds : "",
        Temperature :"",
        Max_Temperature :"",
        Min_Temperature :"",
        Wind_Speed :"",
        error:""
    }

    getweather= async (e)=>{
        e.preventDefault()
        let city=e.target.elements.city.value
        let country=e.target.elements.country.value
        
        let weather= await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}%2C${country}&appid=${API_Key}`)
        let data= await weather.json()
        if(city && country){
            this.setState({
            country :`City: ${data.name}`,
            clouds : `Clouds: ${data.weather[0].description}`,
            Temperature :`Temperature: ${Math.ceil((data.main.temp) - 273.15 )}K`,
            Max_Temperature :`Max Temperature: ${Math.ceil((data.main.temp_max) - 273.15 )}K`,
            Min_Temperature :`Min Temperature: ${Math.floor((data.main.temp_min) - 273.15 )}K`,
            Wind_Speed :`Wind Speed: ${data.wind.speed}m\s`,
            error:""
        })
        }else{
            this.setState({
                country :"",
                clouds : "",
                Temperature :"",
                Max_Temperature :"",
                Min_Temperature :"",
                Wind_Speed :"",
                error:"Please Enter Data"
            })
        }
        
    }
    
    render() {
    return (
        <div className="App">
        <Form getweather={this.getweather}/>
        <Weather country ={this.state.country}
        clouds = {this.state.clouds}
        Temperature ={this.state.Temperature}
        Max_Temperature ={this.state.Max_Temperature}
        Min_Temperature ={this.state.Min_Temperature}
        Wind_Speed ={this.state.Wind_Speed}
        error={this.state.error}/>
        </div>
    )
    }
}


export default App