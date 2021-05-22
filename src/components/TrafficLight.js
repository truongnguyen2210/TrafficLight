import React, { Component } from 'react';
import classNames from 'classnames'

import './TraficLight.css';
const Red = 1;
const Orange = 2;
const Green = 3;
class TrafficLight extends Component {
    constructor() {
        super();
        this.state = {
            curentColors: Red
        };
        setInterval(() => {
            console.log(this.curentColors);
            this.setState({
                curentColors: this.getNextColor(this.state.curentColors)
            });
        }, 2000)
    }
    getNextColor(color) {
        switch (color) {
            case Red:
                return Orange;
            case Orange:
                return Green;
            default:
                return Red;
        }
    }
    render() {
        const { curentColors } = this.state;
        return <div className = "TrafficLight" >
            <
            div className = {
                classNames('buld', 'red', {
                    active: curentColors === Red
                })
            } > < /div> <
            div className = {
                classNames('buld', 'orange', {
                    active: curentColors === Orange
                })
            } > < /div> <
            div className = {
                classNames('buld', 'green', {
                    active: curentColors === Green
                })
            } > < /div> <
            /div>;
    }
}

export default TrafficLight;