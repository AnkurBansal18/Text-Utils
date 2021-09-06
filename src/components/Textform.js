import React, {useState} from 'react'

export default function Textform(props) {
 
    document.title = 'TextUtils - Home';
     const handleUpperCase = ()=> {
        //  console.log("uppercase was clicked" + text);
         let updatedText = text.toUpperCase();
         setText(updatedText);
         props.showAlert("Converted to Uppercase !", "success");
     }

     const handleLowerCase = ()=> {
         let updatedText = text.toLowerCase();
         setText(updatedText);
         props.showAlert("Converted to Lowercase !", "success");
     }

     const handleInvertCase = ()=> {
        
        var updatedText = text.split('')
        .map((text) =>
         text === text.toUpperCase() 
         ? text.toLowerCase()
         : text.toUpperCase()
        ).join('')
     setText(updatedText);
     props.showAlert("Converted to Invertcase !", "success");
    }
    
     const handleCapitalize = ()=> {
         const arr = text.split(" ");
         for(let i=0; i<arr.length; i++){
           arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
         }

         const updatedText = arr.join(" ");
         setText(updatedText);
         props.showAlert("Text has been capitalized.", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }

     const handleCopy = ()=> {
         var text = document.getElementById("textBox");
         text.select();
         navigator.clipboard.writeText(text.value);
         props.showAlert("Copied to clipboard.", "success");
     }

     const handleClear = ()=> {
        let updatedText = "";
         setText(updatedText);
         props.showAlert("Text Cleared.", "success");
     }
     const handleOnchange = (event)=> {
        // console.log("onchange");
        setText(event.target.value);
    }

    const[text, setText] = useState('');
   // text = "newText";    wrong way to change text (we cant simply use assignment operator)
    //setText("newText");  right way to change text.
    return (
        <>
        <div className = "container" style ={{color: props.mode==='dark'?'white':'black'}} >
            <h1 className ="mb-3">{props.heading}</h1>
            <div className="mb-3">
         
            <textarea className="form-control" value ={text} onChange = {handleOnchange} style = {{backgroundColor: props.mode==='dark'?'#212529':'white', color: props.mode==='dark'?'white':'black'}} id="textBox" rows="10"></textarea>
             </div>
             
             <button disabled = {text.length === 0} className = "btn btn-dark mx-2 my-2" onClick= {handleUpperCase}>Convert to Uppercase</button>
             <button disabled = {text.length === 0} className = "btn btn-dark mx-2  my-2" onClick= {handleLowerCase}>Convert to Lowercase</button>
             <button disabled = {text.length === 0} className = "btn btn-dark mx-2  my-2"  onClick= {handleInvertCase}>Convert to Invertcase</button>
             <button disabled = {text.length === 0} className = "btn btn-dark mx-2  my-2" onClick= {handleCapitalize}>Capitalize the word</button>
             <button disabled = {text.length === 0} className = "btn btn-dark mx-2  my-2"  onClick= {handleExtraSpaces}>Remove Extra Spaces</button>
             <button disabled = {text.length === 0} className = "btn btn-dark mx-2  my-2" onClick= {handleCopy}>Copy To Clipboard</button>
             <button disabled = {text.length === 0} className = "btn btn-dark mx-2  my-2"  onClick= {handleClear}>Clear All Text</button>
             
     </div>

        <div className = "container my-3" style ={{color: props.mode==='dark'?'white':'black'}} >
            <h2>Text Summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} words and {text.length} letters.</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length !== 0}).length} Minutes Read.</p>
            <h2>Text Preview</h2>
            <p>{text.length>0?text:"Enter your text to preview it."}</p>
        </div>
        </>
    )
}





