import Editor, { Monaco } from "@monaco-editor/react";
import { Divider, Button, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import React, { useRef, useState } from "react";

import Language from "../services/LanguageService";
import { styled } from "@mui/material/styles";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
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

const EditorIcon = styled(IconButton)({
    height: "100%",
}) as typeof IconButton;
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

    function handleEditorDidMount(editor: any, monaco: Monaco): void {
        editorRef.current = editor;
    }

    const [fileName, setFileName] = useState<string>("script.js");

    function showValue() {
        return editorRef.current.getValue();
    }

    const file: any = files[fileName];

    function expandEditor() {
        console.log(" a venir bientot peut etre")
    }

    return (
        <Box
            sx={{
                color: "#ffffff",
                borderRadius: 0,
                mt: 10,
                width: "33vw",
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

                    <EditorIcon onClick={expandEditor}
                        sx={{
                            color: "white",
                            border: "2 solid white",
                            width: "100%",
                            height: "100%",
                        }}
                    >
                        <OpenInFullIcon  />
                    </EditorIcon>
                </Box>
            </Box>
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
            <Box
                display="flex"
                justifyContent={"space-between"}
                alignItems="center"
                sx={{ backgroundColor: "#db1144" }}
            >
                <Box height={"100%"}>
                    <Button
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

                    <EditorIcon size="small" sx={{ color: "white" }}>
                        <ContentCopyIcon />
                    </EditorIcon>
                    <EditorIcon size="small" sx={{ color: "white" }}>
                        <CachedIcon />
                    </EditorIcon>
                </Box>
                <Box>
                    <EditorIcon sx={{ color: "white" }}>
                        <VisibilityIcon />
                    </EditorIcon>
                </Box>
            </Box>
        </Box>
    );
}
