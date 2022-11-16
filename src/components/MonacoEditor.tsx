import Editor, { Monaco } from "@monaco-editor/react";
import { Divider, Button, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import { useRef, useState } from "react";
import CopyToClipBoard from "./CopyToClipboard"
import Language from "../services/LanguageService";
import { styled } from "@mui/material/styles";

import CachedIcon from "@mui/icons-material/Cached";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import VisibilityIcon from "@mui/icons-material/Visibility";

//////////////Styled components//////////////////////////////////////
const EditorButton = styled(Button)({
    backgroundColor: "#1d1d1b",
    color: "#ffffff",
    borderRadius: 0,
    height: "100%",
    border: "0 solid #1d1d1b",
    "&:disabled": {
        color: "#db1144",
    },
    "&:hover": {
        borderColor: "#db1144",
    },
}) as typeof Button;


//////////////////////////////////////////////////////////////////

/////////////////FakeData/////////////////////////
const files: any = {
    "script.js": {
        name: "script.js",
        language: "javascript",
        value: "function caca(){return 'prout'} ",
    },

    "index.html": {
        name: "index.html",
        language: "html",
        value: "<h1>Coucou</hi>",
    },
};

export default function MonacoEditor(/*language: Language*/) {
    const editorRef: any = useRef(null);
    const editorBox: any = useRef(0);
    const [fileName, setFileName] = useState<string>("script.js");
    const file: any = files[fileName];

// attach ref to newly created editor
    function handleEditorDidMount(editor: any, monaco: Monaco): void {
        editorRef.current = editor;
    }

    // save referenced editor content 
    function saveValue() {
        return editorRef.current.getValue();
    }



    //double width of the editor towards right side(hiding the display)
    function expandEditor() {
        console.log(editorRef.style)
    }

    //read the function name :/
    const returnToDefaultValue = () => {
        editorRef.current.setValue(file.value);
    };

    return (
        <Box ref={editorBox}
            style={{width: "33vw"}}
            sx={{
                color: "#ffffff",
                borderRadius: 0,
                mt: 10,
                
                height: "80vh",
                ml: 20,
            }}
        >
            <Box
                display="flex"
                justifyContent={"space-between"}
                flexDirection="row"
                sx={{ backgroundColor: "#db1144" }}
            >
                <Box sx={{ width: "93%" }}>
                    <EditorButton
                        disabled={fileName === "script.js"}
                        onClick={() => setFileName("script.js")}
                    >
                        script.js
                    </EditorButton>

                    <EditorButton
                        disabled={fileName === "index.html"}
                        onClick={() => setFileName("index.html")}
                    >
                        index.html
                    </EditorButton>
                </Box>
                <Box display="flex" width={"7%"} height={"100%"}>
                    <Divider
                        flexItem={true}
                        orientation="vertical"
                        sx={{ backgroundColor: "white" }}
                    />

                    <IconButton
                        onClick={expandEditor}
                        sx={{
                            color: "white",
                            border: "2 solid white",
                            width: "100%",
                            height: "100%",
                        }}
                    >
                        <OpenInFullIcon />
                    </IconButton>
                </Box>
            </Box>
            <Editor
                height="70vh"
               // width="33vw"
                onMount={handleEditorDidMount}
                theme="vs-dark"
                path={file.name}
                defaultLanguage={file.language}
                defaultValue={file.value}
                
            />
            <Box
                display="flex"
                justifyContent={"space-between"}
                alignItems="center"
                sx={{ backgroundColor: "#db1144" }}
            >
                <Box height={"100%"}>
                    <Button
                        onClick={saveValue}
                        variant="contained"
                        size="small"
                        sx={{
                            backgroundColor: "#1d1d1b",

                            maxWidth: 5,
                            maxHeight: 25,
                            "&:hover": {
                                backgroundColor: "#ffffff",
                                color: "black",
                            },
                            ml: 3,
                        }}
                    >
                        Exécuter
                    </Button>

                    <CopyToClipBoard toCopy={editorRef}/>

                    <IconButton
                        onClick={returnToDefaultValue}
                        size="small"
                        sx={{ color: "white" , height: "100%"}}
                    >
                        <CachedIcon />
                    </IconButton>
                </Box>
                <Box>
                    <IconButton sx={{ color: "white", height: "100%" }}>
                        <VisibilityIcon />
                    </IconButton>
                </Box>
            </Box>
        </Box>
    );
}
