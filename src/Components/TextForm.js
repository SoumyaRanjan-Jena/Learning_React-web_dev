import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
     }

     const handleLoClick = () => {
        console.log("Lowercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
     }

    const handleOnChange = (event) => {
        console.log("Onchange was clicked");
        setText(event.target.value)
        }

    const[text, setText] = useState('Enter text here');
    const[fword,findWord] = useState("");
    const[nword,newWord] = useState("");

    const handleFindChange = (event) => {
        findWord(event.target.value);
    }

    const handleWordChange = (event) =>{
        newWord(event.target.value);
    }

    const handleNewWord = () =>{
        let newText = text.replaceAll(fword,nword);
        setText(newText);
    }

    const handleExtraSpace = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

  return (
    <>
    <div>
        <div className="mb-3">
        <label for="my-box" className="form-label"><h1>{props.heading}</h1></label>
        <textarea className="form-control" id="my-box" rows="8" value={text} onChange={handleOnChange} style = {{backgroundColor : (props.mode === 'dark' ? '#343a40' : 'white') , color : (props.mode === 'dark' ? 'white' : '#343a40') , border: '4px solid props.textColor' }}></textarea>
            </div>
        <button className="btn btn-primary mx-3 my-3" onClick={handleUpClick}>Convert to Uppercase</button> 
        <button className="btn btn-primary mx-3 my-3" onClick={handleLoClick}>Convert to Lowercase</button>    
        <button className="btn btn-primary mx-3 my-3" onClick={handleExtraSpace}>Remove extra spaces</button>
    </div>
    <div className="container my-3 mx-1">
        <h1>Your Text Summary: </h1>
        <p>{text.split(" ").length === 1 ? 0 : text.split(" ").length} words and {text.length} characters</p>
    </div>
    <div>
        <div>
        <label for="replace-box1" className='form-label mx-3'><h3>Find Word: </h3></label>
        <textarea className="form-control" id="replace-box1" rows="1" value={fword} onChange={handleFindChange} style = {{backgroundColor : (props.mode === 'dark' ? '#343a40' : 'white') , color : (props.mode === 'dark' ? 'white' : '#343a40') , border: '4px solid props.textColor' }}></textarea>
        </div>
       <div>
       <label for="replace-box2" className='form-label mx-3'><h3>Replace with: </h3></label>
        <textarea className="form-control" id="replace-box2" rows="1" value={nword} onChange={handleWordChange} style = {{backgroundColor : (props.mode === 'dark' ? '#343a40' : 'white') , color : (props.mode === 'dark' ? 'white' : '#343a40') , border: '4px solid props.textColor' }}></textarea>
       </div>
    </div>
    <div>
        <button className="btn btn-primary my-3 mx-3" onClick={handleNewWord}>Replace</button>
    </div>
    </>
  )
}
