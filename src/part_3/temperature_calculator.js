import React from "react";

const scaleNames = {
    c: "Celsius",
    f: "Fahrenheit"
}

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature)
    if (Number.isNaN(input)) {
        return "";
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

export default class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {temperature: "", scale: "c"};

        this.onTemperatureChanged = this.onTemperatureChanged.bind(this);
    }

    onTemperatureChanged(newState) {
        this.setState(newState);
    }

    render() {
        const celsius = this.state.scale === "c" ? this.state.temperature : tryConvert(this.state.temperature, toCelsius);
        const fahrenheit = this.state.scale === "f" ? this.state.temperature : tryConvert(this.state.temperature, toFahrenheit)

        return <div>
            <TemperatureInput scale="c" temperature={celsius} onTemperatureChanged={this.onTemperatureChanged} />
            <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChanged={this.onTemperatureChanged} />
            <BoilingVerdict celsius={celsius} />
        </div>
    }
}

class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onTemperatureChanged({
            temperature: event.target.value,
            scale: this.props.scale
        });
    }

    render() {
        return <fieldset>
            <legend>Enter temperature in {scaleNames[this.props.scale]}:</legend>
            <input value={this.props.temperature} onChange={this.handleChange}/>
        </fieldset>
    }
}

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>The water would boil.</p>
    }
    return <p>The water would not boil.</p>
}