import React, { useState } from "react";
import axios from "axios";
import LinearIndeterminate from "../components/LinearIndeterminate";
 


function CodeConverter() {
 
  const [leftText, setLeftText] = useState("");
  const [rightText, setRightText] = useState("");
  const [selectedLeftLanguage, setSelectedLeftLanguage] = useState("python");
  const [selectedRightLanguage, setSelectedRightLanguage] = useState("python");
  const [isLoading, setIsLoading] = useState(false);

  const handleConvert = async () => {
    try {

      if (leftText == "") 
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
            Authorization: 'Bearer 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',
          },
        }
      );
      setRightText(response.data.choices[0].text);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
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

    <div className="container">

          <div>
      {isLoading ? <LinearIndeterminate /> : <p></p>}  
    </div>
    <div className="textarea-container">
      


      <div className="left-textarea-container">
        <div className="left-dropdown-container">
  
          <select
          className="dropdown-select"
            id="leftLanguage"
            value={selectedLeftLanguage}
            onChange={(event) => setSelectedLeftLanguage(event.target.value)}
          >
            <option value="python">Python</option>
            <option value="java">Java</option>
            <option value="csharp">C#</option>
            <option value="vbnet">VB.NET</option>
            <option value="golang">Golang</option>
            <option value="php">PHP</option>
            <option value="c">C</option>
            <option value="cplusplus">C++</option>
            <option value="ruby">Ruby</option>
            <option value="Scala">Scala</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <textarea
          className="textarea"
          id="leftTextarea"
          value={leftText}
          onChange={(event) => setLeftText(event.target.value)}
          placeholder="Paste code here..."
        />
      </div>
      <div className="right-textarea-container">
        <div className="right-dropdown-container">

          <select
          className="dropdown-select"
            id="rightLanguage"
            value={selectedRightLanguage}
            onChange={(event) => setSelectedRightLanguage(event.target.value)}>
            
            <option value="python">Python</option>
            <option value="java">Java</option>
            <option value="csharp">C#</option>
            <option value="vbnet">VB.NET</option>
            <option value="golang">Golang</option>
            <option value="php">PHP</option>
            <option value="c">C</option>
            <option value="cplusplus">C++</option>
            <option value="ruby">Ruby</option>
            <option value="Scala">Scala</option>
          </select>
        </div>
        <textarea
          className="textarea"
          id="rightTextarea"
          value={rightText}
          readOnly
          placeholder="Converted code goes here"
        />
      </div>
    </div>   
     <div class="button-container">
      <button className="convert-button" onClick={handleConvert}>Convert</button>
      <button className="clear-button" onClick={handleClear}>Clear</button>
      <button className="copy-button" onClick={handleCopy}>Copy</button>
    </div>

 
  
  </div>
);
}



export default CodeConverter;
