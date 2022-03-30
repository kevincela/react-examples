import React from "react";
import AutoFocusTextInput from "./auto_focus_text_input";
import CustomTextInput from "./custom_text_input";
import FileInput from "./file_input";

export default function AppReactAdvancedPart1(props) {
    return <div>
        <h1>Custom text input</h1>
        <CustomTextInput />
        <h1>Auto focus text input</h1>
        <AutoFocusTextInput />
        <h1>File input example</h1>
        <FileInput />
    </div>
}