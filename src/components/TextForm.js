import React, { useState } from "react";

export default function TextForm(props) {
    const handleUppercaseClick = () => {
        //console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", "success");
    }
    const handleLowercasecaseClick = () => {
        //console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase", "success");
    }
    const handleClearTextClick = () => {
        //console.log("Uppercase was clicked" + text);
        let newText = '';
        setText(newText);
        props.showAlert("Text has been cleared", "success");
    }
    const handleOnChange = (event) => {
        //console.log("OnChange");
        setText(event.target.value);
    }
    const handleCopy = () => {
        let text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text has been copied", "success");
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces has been removed", "success")
    }
    // const handleTextAreaColor=()=>{
    //     if(props.mode === 'dark'){
    //         document.getElementById('mybox').style.backgroundColor='#6C6F73';
    //         document.getElementById('mybox').style.color='white';
    //     }
    //     else{
    //         document.getElementById('mybox').style.backgroundColor='white';
    //         document.getElementById('mybox').style.color='black';
    //     }
    // }
    const [text, setText] = useState('');
    return (
        <>
            <div className="Container my-6" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h3>{props.heading}</h3>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        value={text}
                        onChange={handleOnChange}
                        style={{ backgroundColor: props.mode === 'dark' ? '#90959A23' : '#AAABAB23', color: props.mode === 'dark' ? 'white' : 'black' }}
                        id="mybox"
                        rows={8}
                    ></textarea>
                </div>
                <button type="button" className="btn btn-outline-primary  mx-1 my-1" onClick={handleUppercaseClick}>Convert to uppercase</button>
                <button type="button" className="btn btn-outline-primary  mx-1 my-1" onClick={handleLowercasecaseClick}>Convert to lowercase</button>
                <button type="button" className="btn btn-outline-primary  mx-1 my-1" onClick={handleClearTextClick}>Clear Text</button>
                <button type="button" className="btn btn-outline-primary  mx-1 my-1" onClick={handleCopy}>Copy Text</button>
                <button type="button" className="btn btn-outline-primary  mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container my-4" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h3>Your Text Summary</h3>
                <p>{(text.split(" ").filter((element) => { return element.length !== 0 }).length)} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} minutes read time</p>
                <h5><b>Preview</b></h5>
                <p>{text.length > 0 ? text : "Text preview"}</p>
            </div>
        </>
    );
}