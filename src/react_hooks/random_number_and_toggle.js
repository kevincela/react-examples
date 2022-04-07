import React, { useState } from "react";
import { useToggle } from "./hooks/useToggle";

export default function RandomNumberAndToggle(props) {
    const [randomValue, setRandomValue] = useState(Math.random() * 100);
    const [state, toggle] = useToggle(true);

    const setNewRandomValue = () => {
        setRandomValue(Math.random() * 100)
    }

    return <div>
        <h1>RandomNumberAndToggle</h1>
        <h2>Current random value: {randomValue}</h2>
        <button onClick={setNewRandomValue}>Generate a new random value</button>
        <button onClick={toggle}>{state ? "ON" : "OFF"}</button>
    </div>
}