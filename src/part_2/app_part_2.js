import React from "react";
import Clock from "./clock";
import RandomNumberGenerator from "./random_number_gen";
import Toggle from "./toggle";
import LoginControl from "./greeting";

export default function AppPart2() {
    const numbers = [1,"two",3,"four",5];

    return (
      <div>
        <Clock />
        <RandomNumberGenerator />
        <Toggle />
        <LoginControl />
        <ul>{numbers.map(number => <li key={number}><h4>{number}</h4></li>)}</ul>
      </div>
    );
  }