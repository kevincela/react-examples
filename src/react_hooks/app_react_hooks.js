import React from "react";
import Clock from "./clock";
import Counter from "./counter";
import CustomTextInput from "./custom_text_input";
import Form from "./form";
import RandomNumberAndToggle from "./random_number_and_toggle";
import RandomQuoteGenerator from "./random_quote_generator";

export default function AppReactHooks(props) {
    return <div>
        <Counter />
        <RandomNumberAndToggle />
        <Clock />
        <RandomQuoteGenerator />
        <h1>Form with hooks</h1>
        <Form />
        <h1>useRef</h1>
        <CustomTextInput />
    </div>
}