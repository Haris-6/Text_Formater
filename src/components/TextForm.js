
import React,{useState}  from 'react'

export default function TextForm(props) {
  const [text, setText] = useState("");  //usestate is default vlaue of text and setText is update fo text
const changeToUpper=()=>{
  // console.log("Uppercase was clicked")
  let newText = text.toUpperCase();
  setText(newText);
}
const changeToLower=()=>{
  // console.log("Uppercase was clicked")
  let newText = text.toLocaleLowerCase();
  setText(newText);
}



const handleExtraSpaces = ()=>{
        let words = text.split(' ');
        let joinedWords = '';
        // console.log(words);
        words.forEach((elem)=>{
            if(elem[0] !== undefined){
                joinedWords += elem + " ";
                console.log(joinedWords);
            }
        })
        setText(joinedWords);
    }
const clear=()=>{
  // console.log("Uppercase was clicked")
  let newText = '';
  setText(newText);
}

const handleCopy = ()=>{
var text =document.getElementById("myBox");
text.select();
navigator.clipboard.writeText(text.value);
document.getSelection().removeAllRanges();
}

const reversed = () => {
  let splitWord = text.split("");
  let reverseWord = splitWord.reverse("");
  let joinedWords = reverseWord.join("");
  let newText = joinedWords

  setText(newText);
};





const onChangeValue=(event)=>{
  // console.log("value has been changed")
  setText(event.target.value);
}

  return (
    <>
   <div className="container" style={{color:props.mode==='white'?'black':'white'}}>  
    <h1>{props.heading}</h1>
<div className="mb-3">
 <textarea className="form-control"  placeholder='Enter Text Here' value={text} onChange={onChangeValue} id="myBox" rows="9" style={{backgroundColor:props.mode==='white'? '#1a3856' : 'white', color:props.mode==='white'? 'white' :' #1a3856'}}></textarea> 
<button className="btn btn-primary my-2" disabled={text.length===0} onClick={changeToUpper}>Click to convert Uppercase</button>
<button className="btn btn-warning my-2 mx-3" disabled={text.length===0} onClick={changeToLower}>Click to convert Lowercase</button>
<button className="btn btn-danger my-2 " disabled={text.length===0} onClick={clear}>Clear text</button>
<button className="btn btn-dark my-2 mx-3" disabled={text.length===0} onClick={reversed}>CLick to reverse text</button>
<button className="btn btn-success my-2 " disabled={text.length===0}  onClick={handleExtraSpaces}>remove extra spaces</button>
<button className="btn btn-info my-2 mx-3" disabled={text.length===0}  onClick={handleCopy}>Click to Copy</button>
</div>
    </div>
 <div className="container my-2" style={{color:props.mode==='white'?'black':'white'}}> 
  <h1>Your Text Summary</h1>
  <p> {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters </p> {/* /s+/ id regular spaces it is use to resolve enter problem */ }
  <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes require to read</p>
  <h3>preview</h3>
  <p>{text.length>0?text :'Nothing to preview'}</p>


</div>
    </>
  )
}
