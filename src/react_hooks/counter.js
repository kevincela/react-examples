import React, { useState } from "react";

export default function Counter(props) {
    const [count, setCount] = useState(0);

    return <div>
        <h1>Counter</h1>
        <p>The current counter value is: {count}</p>
        <button onClick={() => {setCount(prevCount => prevCount + 1)}}>Increment</button>
    </div>
}