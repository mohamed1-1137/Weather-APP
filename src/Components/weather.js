import React, { Component } from 'react'

class Weather extends Component {
    render() {
    return (
        <div className="Weahter_list">
            <div>{this.props.country}</div>
            <div>{this.props.clouds}</div>
            <div>{this.props.Temperature}</div>
            <div>{this.props.Max_Temperature}</div>
            <div>{this.props.Min_Temperature}</div>
            <div>{this.props.Wind_Speed}</div>
            <div>{this.props.error}</div>
        </div>
    )
    }
}

export default Weather