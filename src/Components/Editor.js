import {React,useState} from 'react';
import "codemirror/lib/codemirror.css"
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/css/css";
import "codemirror/mode/javascript/javascript";
import {Controlled as ControlledEditor} from "react-codemirror2"
import "codemirror/addon/edit/closetag";
import "codemirror/addon/edit/matchtags";
import 'codemirror/addon/edit/closebrackets'
import "codemirror/addon/edit/matchbrackets";
import 'codemirror/addon/hint/show-hint.css';
import { CgArrowsExpandRight } from "react-icons/cg";
import 'codemirror/addon/hint/show-hint';
import 'codemirror/addon/hint/javascript-hint';

import 'codemirror/addon/hint/anyword-hint';
require('codemirror/addon/hint/javascript-hint');
require('codemirror/addon/hint/css-hint');
require('codemirror/addon/hint/show-hint');
const Editor=(props)=>{
  const[but,setbut]=useState(true)
  const{
    buttonicons,
    displayName,
    language,
    value,
    onChange
  }=props
  const handleChange=(editor,data,value)=>{
    onChange(value)
    editor.showHint({ completeSingle: false });
  }
  return(
     <div className={`editor-container ${but ? " " : "collapsed"}`}>
       <div className="editor-title">
  {buttonicons}&nbsp;{displayName}
         <button type="button" className="expandcollapsed-btn"
            onClick={()=>setbut(prev=>!prev)}
           ><CgArrowsExpandRight/></button>
       </div>
       <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className="code-mirror-wrapper"
        options={{
         lineWrapping: true,
          mode: language,
          lint:true,
            scrollbarStyle: "null",
       theme: "material",
       lineNumbers: true,
       autoCloseTags: true,
          matchTags: true,
        autoCloseBrackets: true,
          matchBrackets: true,
        }}
       />
      </div>
  )
}
export default Editor;
