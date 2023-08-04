import React,{useState} from 'react'
export default function TextForm(props) {
    const handleUpClick=()=>{
        // console.log("uppercase was clicked" + text); 
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted into upperCase","success");
    }
    const handleLowClick=()=>{
      // console.log("uppercase was clicked" + text); 
      let newText=text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to LowerCase","success");
  }
  const handleclearClick=()=>{
    let newText='';
    setText(newText);
    props.showAlert("Text has been cleared","success");
}
    const handleOnChange=(event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }
    const [text,setText]=useState('');
    // wrong way to change  the state 
    // text="new text";

    // right way to change the state
    // setText("New Text") ;
  return (
    <>
    <div className="container" style ={{color:props.mode==='dark'?'white':'black'}}>
    <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} style ={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} id="mybox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
<button className="btn btn-primary mx-1" onClick={handleclearClick}>Clear text</button>
    </div>
    <div className="container">
      <h1>Your text summary</h1>
      <p>{text.split(" ").length}words ,{text.length} characters</p>
      <p>{0.008 *text.split("").length}Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter Something in the textbox to preview "}</p>
    </div>
  </>
  )
}
