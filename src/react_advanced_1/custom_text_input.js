import React from "react";

export default class CustomTextInput extends React.Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();

        this.focusTextInput = this.focusTextInput.bind(this);
        this.submit = this.submit.bind(this);
    }

    focusTextInput() {
        this.textInput.current.focus();
    }

    submit() {
        alert("The text you have written is: " + this.textInput.current.value);
    }

    render() {
        return <div>
            <input type="text" ref={this.textInput} />
            <button onClick={this.focusTextInput}>Focus on the text input</button>
            <button onClick={this.submit}>Submit</button>
        </div>
    }
}