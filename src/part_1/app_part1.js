import React from "react";
import { Welcome, WelcomeClass } from "./welcome";

function AppPart1() {
  const now = new Date();
  const a = 10;
  const b = 20;
  const h3Style = {
    color: "green",
    backgroundColor: "yellow",
  };
  const h3 = <h3 style={h3Style}>H3 Example</h3>;

  return (
    <div>
      {h3}
      <Welcome name="Paul" surname="Spencer" h3={h3} />
      <Welcome name="Emily" surname="Spencer" h3={h3} />
      <Welcome name="John" surname="Spencer" h3={h3} />
      <WelcomeClass
        name="Mark"
        surname="Hamilton"
        h3={<h3 style={h3Style}>H3 Class Component Example</h3>}
      />
      <p className="text-red">Hello World, it is {now.toString()}</p>
      <p>
        {a} plus {b} is equal to {a + b}
      </p>
    </div>
  );
}

export default AppPart1;
