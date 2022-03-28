import React from "react";
import Clock from "./clock";
import RandomNumberGenerator from "./random_number_gen";
import Toggle from "./toggle";
import LoginControl from "./greeting";
import ShoppingCart from "./shopping_cart";

export default function AppPart2() {
  return (
    <div>
      <Clock />
      <RandomNumberGenerator />
      <Toggle />
      <LoginControl />
      <ShoppingCart
        items={[
          {
            name: "Item AA",
            description: "Item AA Description",
            quantity: 2,
          },
          {
            name: "Item BB",
            description: "Item BB Description",
            quantity: 5,
          },
        ]}
      />
    </div>
  );
}
