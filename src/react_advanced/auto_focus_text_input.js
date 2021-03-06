import React from "react";
import CustomTextInput from "./custom_text_input";

export default class AutoFocusTextInput extends React.Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
    }

    componentDidMount() {
        this.textInput.current.focusTextInput();
    }

    render() {
        return <CustomTextInput ref={this.textInput} />
    }
}