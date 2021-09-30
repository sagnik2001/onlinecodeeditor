import {React,useState,useEffect} from 'react';
import Editor from './Editor.js';
import "./Editor.css"
import { DiHtml5,DiCss3,DiJavascript1 } from "react-icons/di";
import LocalStorage from '../Hooks/LocalStorage.js';
const WebEditor=()=>{
  const [html,SetHtml]=LocalStorage("html"," ")
    const [css,SetCSS]=LocalStorage("css"," ")
      const [javascript,SetJavascript]=LocalStorage("javascript"," ")
      const[srcDoc,SetsrcDoc]=useState("")
      useEffect(() => {
        const timeouts = setTimeout(function () {
          SetsrcDoc(
            `
              <html>
                <body>${html}</body>
                <style>${css}</style>
                <script>${javascript}</script>
              </html>
            `
          )
        },250);
          return () => {
             clearTimeout(timeouts);
          }
      }, [html,css,javascript])
  return(
  <>
  <div className="pane top-pane">
      <Editor
        buttonicons={<DiHtml5 className="icon"/>}
        language="xml"
        displayName="HTML"
        value={html}
        onChange={SetHtml}
      />
      <Editor
      buttonicons={<DiCss3 className="icon"/>}
      language="css"
      displayName="CSS"
      value={css}
      onChange={SetCSS}
      />
      <Editor
      buttonicons={<DiJavascript1 className="icon"/>}
      language="javascrip"
      displayName="JS"
      value={javascript}
      onChange={SetJavascript}
      />
  </div>
  <div className="output-pane pane">
    <iframe
      srcDoc={srcDoc}
     title="output"
     sandbox="allow-scripts"
     frameBorder="0"
     width="100%"
     height="100%"
    />
  </div>
  </>
)
}
export default WebEditor;
