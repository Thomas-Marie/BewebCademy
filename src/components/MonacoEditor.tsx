import Editor from "@monaco-editor/react";
import { Button, ButtonGroup } from "@mui/material";
import { Container } from "@mui/system";
import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import Language from "../services/LanguageService";
import { styled } from "@mui/material/styles";

const EditorBtn = styled(Button)({
    backgroundColor: "#1d1d1b",
    color: "#ffffff",
    borderRadius: 0,
    border: "0 solid #1d1d1b",
    "&:disabled":{
        color: "#db1144"
    },
    "&:hover":{
        borderColor:"#db1144",
        
    },
}) as typeof Button;

const files: any = {
  "script.js": {
    name: "script.js",
    language: "javascript",
    value: "function caca(){return 'prout'} ",
  },
  "style.css": {
    name: "style.css",
    language: "css",
    value: "",
  },
  "index.html": {
    name: "index.html",
    language: "html",
    value: "<h1>Coucou</hi>",
  },
};

export default function MonacoEditor(/*language: Language*/) {
    const editorRef:any = useRef(null);

    function handleEditorDidMount(editor: any, monaco: any): void {
    editorRef.current = editor;
    }
    
    const [fileName, setFileName] = useState("script.js");
    
    function showValue(){
        return editorRef.current.getValue();
    }
    
    const file: any = files[fileName];

    return (
    <Container maxWidth="sm" sx={{
        backgroundColor:  "#db1144",
        color: "#ffffff",
        borderRadius: 0,
        
        mt: 10,
        width:"33vw",
        height:"80vh"
        }}>
            
      <ButtonGroup >
        <EditorBtn
          sx={{ backgroundColor: "#1d1d1b" }}
          disabled={fileName === "script.js"}
          onClick={() => setFileName("script.js")}
        >
          script.js
        </EditorBtn>
        <EditorBtn
          disabled={fileName === "style.css"}
          onClick={() => setFileName("style.css")}
        >
          style.css
        </EditorBtn>
        <EditorBtn
          disabled={fileName === "index.html"}
          onClick={() => setFileName("index.html")}
        >
          index.html
        </EditorBtn>
      </ButtonGroup>
      <Editor
        height="70vh"
        width="33vw"
        onMount={handleEditorDidMount}
        theme="vs-dark"
        path={file.name}
        defaultLanguage={file.language}
        defaultValue={file.value}
        onChange={showValue}
        
      />
    </Container>
  );
}
