import Editor, { Monaco } from "@monaco-editor/react";

import { useEffect, useRef, useState } from "react";

import CopyToClipBoard from "../CopyToClipboard";
import DiffEditor from "./DiffEditor"

import { Divider, Button, IconButton, Modal } from "@mui/material";
import { Box } from "@mui/system";
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


const style = {
    position: 'absolute' as 'absolute',
    top: '10%',
    left: '10%',
    width: "75vw",
    height:"75vh",
   
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
   
  };
  
//////////////////////////////////////////////////////////////////
// const languages = await getLanguages().then(result => {return result} )
// console.log(languages)
//getAll apres axios
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

export default function MonacoEditor(props: any) {
    const editorRef: any = useRef(null);
    const [boxWidth, setBoxWidth] = useState<string>("33vw");
    const [fileName, setFileName] = useState<string>("script.js");
    const [editorValue, setEditorValue] = useState<string>("")
    const file: any = files[fileName];

    const [open, setOpen] = useState<boolean>(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {}, [props.exercice])
    // attach ref to newly created editor
    async function handleEditorDidMount(editor: any, monaco: Monaco) {
        editorRef.current = await editor;
        saveValue()
    }

    // save referenced editor content
    function saveValue() {
        setEditorValue(editorRef.current.getValue());
        console.log(editorValue)
    }

    //double width of the editor towards right side(hiding the display)
    async function expandEditor() {
        boxWidth === "33vw" ? setBoxWidth("67vw") : setBoxWidth("33vw");
        console.log(boxWidth);
    }

    //read the function name :/
    const returnToDefaultValue = () => {
        editorRef.current.setValue(file.value);
    };

    const handleOpenDiffEditor = () => {
        saveValue()
        handleOpen()
    }
    return (
        <Box
            style={{ width: boxWidth }}
            sx={{
                color: "#ffffff",
                borderRadius: 0,

                border: "5px solid #1d1d1b"
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
                height="79.5vh"

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
                <Box height={"100%"} >
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

                    <CopyToClipBoard toCopy={editorRef} />

                    <IconButton
                        onClick={returnToDefaultValue}
                        size="small"
                        sx={{ color: "white", height: "100%" }}
                    >
                        <CachedIcon />
                    </IconButton>
                </Box>
                <Box>
                    <IconButton sx={{ color: "white", height: "100%" }}>
                        <VisibilityIcon onClick={handleOpenDiffEditor} />
                    </IconButton>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        sx={style}

                    >
                       <DiffEditor exercice={props.exercice} editorValue={editorValue} />
                    </Modal>
                </Box>
            </Box>
        </Box>
    );
}
