import React from "react";

export default function BorderBox(props) {
    return <div style={{border: "1px solid black"}}>
        {props.children}
    </div>
}