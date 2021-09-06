import React from 'react'

export default function About(props) {

  //  const [darkStyle, setdarkStyle] = useState({
  //   color: 'black',
  //   backgroundColor: 'white'
  //  })
  let darkStyle = {
    color: props.mode ==='dark'?'white':'#212529',
    backgroundColor: props.mode ==='dark'?'#212529':'white', 
}
    //const [btnText, setbtnText] = useState("Enable Dark Mode")
   document.title = 'TextUtils - About';
  //  const toggleStyle = ()=>{
  //    if(darkStyle.color === 'black'){
  //     setdarkStyle({
  //       color: 'white',
  //       backgroundColor: 'black',
  //       border: '1px solid white'
  //     })
  //     setbtnText("Enable Light Mode");
  //    }
  //    else{
  //     setdarkStyle({
  //       color: 'black',
  //       backgroundColor: 'white'
  //     })
  //     setbtnText("Enable Dark Mode");
  //    }
  //  }
    return (
        <div className = "container" style = {{color: props.mode ==='dark'?'white':'#212529'}}>
      <h1 className = "my-3">About TextUtils</h1>
                <div className="accordion" id="accordionExample">
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button className="accordion-button" type="button" style = {darkStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            <b>Text Analysis</b>
          </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
          <div className="accordion-body" style = {darkStyle}>
          TextUtils is a tool that allows you to analyse a text quickly and effeciently by counting the number of words and characters present. It also helps in manupulating the text by providing various useful utilities
          like different kind of conversions, copying and clearing text, etc. 
          Be it word count, character count, or manupulating the text, you can do it all at one place. 
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingTwo">
          <button className="accordion-button collapsed" type="button" style = {darkStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            <b>Free to Use</b>
          </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
          <div className="accordion-body" style = {darkStyle}>
            TextUtils is an easy and free to use analyzer tool that provides instant character and word count statistics for a given text.
             TextUtils reports the number of words and characters. Thus it is suitable for wrtigng text with word/character limit. 
             This tool is intended for everyone who wants quick and efficient analysis of there important peices of text.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingThree">
          <button className="accordion-button collapsed" type="button" style = {darkStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
           <b> Browser Compatible </b>
          </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
          <div className="accordion-body" style = {darkStyle}>
            This word counter works in any web browser be it chrome, firefox, Internet explorer, safari, opera. It suits to count characters in facebook, blogs, books, documents(pdf, excel), articles etc. 
          </div>
        </div>
      </div>
    </div>

     {/* <div className = "container my-3">
       <button onClick={toggleStyle} type="button" className="btn btn-primary">{btnText}</button>
    </div> */}
    </div> 
    )
}


//component's name should start with a capital letter,
