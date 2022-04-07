import React, { useEffect, useState } from "react";

export default function Clock(props) {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        let timerID = setInterval(() => {setDate(new Date())}, 1000);
        return () => {
            clearInterval(timerID);
        }
    })

    return <div>
        <h1>Clock with Hooks</h1>
        <h2>It is {date.toLocaleTimeString()}.</h2>
    </div>
}