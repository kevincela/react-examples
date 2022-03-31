import React from "react";
import AutoFocusTextInput from "./auto_focus_text_input";
import CustomTextInput from "./custom_text_input";
import Error from "./error";
import ErrorBoundary from "./error_boundary";
import FileInput from "./file_input";
import { Cellphones, Fruits, withFilter } from "./filter";
import { Cat, Mouse } from "./mouse";

const FruitsWithFilter = withFilter(Fruits);
const CellphonesWithFilter = withFilter(Cellphones);

export default function AppReactAdvanced(props) {
  return (
    <ErrorBoundary>
      <div>
        <h1>Custom text input</h1>
        <CustomTextInput />
        <h1>Auto focus text input</h1>
        <AutoFocusTextInput />
        <h1>File input example</h1>
        <FileInput />
        <h1>HOC example:</h1>
        <FruitsWithFilter data={["apple", "pear", "orange", "strawberry"]} />
        <CellphonesWithFilter
          data={["iPhone X", "Samsung Galaxy S20", "Pocophone F1", "Nokia"]}
        />
        <h1>Trigger error</h1>
        <Error />
        <h1>Mouse render prop</h1>
        <Mouse render={mouse => <Cat mouse={mouse} />} />
        <Mouse render={mouse => <p>Mouse position: {mouse.x} {mouse.y}</p>} />
      </div>
    </ErrorBoundary>
  );
}
