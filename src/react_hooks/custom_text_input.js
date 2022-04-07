import React, { useRef, useState } from "react";

export default function CustomTextInput(props) {
    const inputRef = useRef();

    const focusInput = () => {
        inputRef.current.focus()
    }

    return <div>
        <input ref={inputRef} type="text" />
        <button onClick={focusInput}>Focus on the input!</button>
    </div>
}