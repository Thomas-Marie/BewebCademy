import { DiffEditor as MonacoDiffEditor } from '@monaco-editor/react';
import { Modal } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';

const DiffEditor = (props: any) => {
    const [diffEditor, setDiffEditor] = useState<any>()


    useEffect(() => {

        setDiffEditor(<MonacoDiffEditor
            height="75vh"
            width="75vw"
            original={props.exercice.result}
            modified={props.editorValue}
            language={props.exercice.language}
            theme="vs-dark"
            
        />
        )

    }, [props.exercice.result, props.editorValue])

    return (
        <Box >
            {diffEditor}
        </Box>
    )



}

export default DiffEditor