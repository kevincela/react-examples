import React from "react";
import BorderBox from "./border_box";
import NameForm from "./name_form";
import Reservation from "./reservation";
import Calculator from "./temperature_calculator";

export default function AppPart3(props) {
    return <div>
        <h1>Name form</h1>
        <NameForm />
        <h1>Reservation</h1>
        <Reservation />
        <h1>Temperature Calculator</h1>
        <Calculator />
        <h1>children prop example</h1>
        <BorderBox>
            <h3>Hello World!</h3>
        </BorderBox>
    </div>
}