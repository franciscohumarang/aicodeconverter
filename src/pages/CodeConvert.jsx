import React, { useState } from "react";
import axios from "axios";
import LinearIndeterminate from "../components/LinearIndeterminate";
import Alert from '@mui/material/Alert';



function Codeswaper() {
 
  const [leftText, setLeftText] = useState("");
  const [rightText, setRightText] = useState("");
  const [selectedLeftLanguage, setSelectedLeftLanguage] = useState("csharp");
  const [selectedRightLanguage, setSelectedRightLanguage] = useState("python");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setError] = useState(false);
  const handleswap = async () => {
    try {

      if (leftText === "") 
      {
        alert("Please paste code")
        return;
      }
      setIsLoading(true);
       
      const response = await axios.post(
        "https://api.openai.com/v1/completions",
        {
        model:"text-davinci-003",
          prompt: "Translate code from" + selectedLeftLanguage + " to " + selectedRightLanguage + ":"  + leftText,
          max_tokens: 1024,
          temperature: 0.5,
          top_p: 1,
          frequency_penalty: 0,
          presence_penalty: 0,
          stop: ">>>"
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: 'Bearer ' + process.env.REACT_APP_APIKEY ,
          },
        }
      );
      setRightText(response.data.choices[0].text);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
setError(true);
      console.error(error);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(rightText);
  };

  const handleClear =() => {
  setRightText("")
  }

  return (
  <div>
              <div>
      {isLoading ? <LinearIndeterminate /> : <p></p>}  
      </div>

    <div className="container">
      
        <div className="intro-text">
        { isError &&
       
            <Alert  onClose={() => { setError(false)}} severity="error">Error occured swaping. Please try again later.</Alert>
           
        }
      </div>
      <div className="intro-text">
    <p><b>Welcome to Syntax Swapper! Swap one programming language with AI for FREE!</b></p>
    <p>&#128073; To swap one language to another, select the programming language and paste the code on the left side </p>
    <p>Select the programming language you wish to be swaped, and press swap</p>
    <p>&#x1F4A1; You can also type a piece of code you wish to generate like fibonacci, recurssive function, etc. on your selected language.</p>
  </div>
    <div className="text-area-container">
        <select className="dropdown"
         value={selectedLeftLanguage}
         onChange={(event) => setSelectedLeftLanguage(event.target.value)}>
<option value="abap">ABAP</option>
<option value="ada">ADA</option>
<option value="bash">Bash</option>
<option value="c">C</option>
<option value="cplusplus">C++</option>
<option value="csharp">C#</option>
<option value="cobol">Cobol</option>
<option value="dart">Dart</option>
<option value="erlang">Erlang</option>
<option value="fsharp">F#</option>
<option value="golang">Golang</option>
<option value="groovy">Groovy</option>
<option value="java">Java</option>
<option value="jscript">JavaScript</option>
<option value="julia">Julia</option>
<option value="kotlin">Kotlin</option>
<option value="lisp">Lisp</option>
<option value="lua">Lua</option>
<option value="objective">Objective-C</option>
<option value="perl">Perl</option>
<option value="php">PHP</option>
<option value="prolog">Prolog</option>
<option value="python">Python</option>
<option value="rpg">RPG</option>
<option value="ruby">Ruby</option>
<option value="rust">Rust</option>
<option value="sas">SASA</option>
<option value="scala">Scala</option>
<option value="sol">Solidity</option>
<option value="swift">Swift</option>
<option value="vbnet">VB.NET</option>
          

      </select>
      <textarea id="leftTextarea"
          value={leftText}
          onChange={(event) => setLeftText(event.target.value)}
          placeholder="Paste code here..." className="text-area"></textarea>
        </div>
        <div className="arrow-container"> {/* Add this div */}
  <span className="arrow">➡️</span>
</div>
    <div className="text-area-container">
      <select className="dropdown"   id="rightLanguage"
            value={selectedRightLanguage}
            onChange={(event) => setSelectedRightLanguage(event.target.value)}>
      <option value="abap">ABAP</option>
<option value="ada">ADA</option>
<option value="bash">Bash</option>
<option value="c">C</option>
<option value="cplusplus">C++</option>
<option value="csharp">C#</option>
<option value="cobol">Cobol</option>
<option value="dart">Dart</option>
<option value="erlang">Erlang</option>
<option value="fsharp">F#</option>
<option value="golang">Golang</option>
<option value="groovy">Groovy</option>
<option value="java">Java</option>
<option value="jscript">JavaScript</option>
<option value="julia">Julia</option>
<option value="kotlin">Kotlin</option>
<option value="lisp">Lisp</option>
<option value="lua">Lua</option>
<option value="objective">Objective-C</option>
<option value="perl">Perl</option>
<option value="php">PHP</option>
<option value="prolog">Prolog</option>
<option value="python">Python</option>
<option value="rpg">RPG</option>
<option value="ruby">Ruby</option>
<option value="rust">Rust</option>
<option value="sas">SASA</option>
<option value="scala">Scala</option>
<option value="sol">Solidity</option>
<option value="swift">Swift</option>
            <option value="vbnet">VB.NET</option>
            
      </select>
        <textarea className="text-area"
          id="rightTextarea"
          value={rightText}
          readOnly
          placeholder="swaped code goes here"></textarea>
    </div>
    <div className="button-container">
      <button className="button" onClick={handleswap}>Swap</button>
      <button className="button" onClick={handleClear}>Clear</button>
      <button className="button copy" onClick={handleCopy}>Copy</button>
    </div>
  </div>
  </div>
    
);
}



export default Codeswaper;
