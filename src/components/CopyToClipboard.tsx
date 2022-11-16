import { IconButton } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import AlertSuccess from "./AlertSuccess";
import { useState } from "react";

const CopyToClipBoard = (props: any) => {
    const [copySuccess, setCopySuccess] = useState("");

    const [open, setOpen] = useState(false);


    const copyToClipBoard = async () => {
        try {
            await navigator.clipboard.writeText(
                props.toCopy.current.getValue()
            );
            setCopySuccess("Copied!");
            setOpen(true);
        } catch (err) {
            setCopySuccess("Failed to copy!");
        }
    };

    return (
        <IconButton
            onClick={copyToClipBoard}
            size="small"
            sx={{ color: "white" }}
        >
            <AlertSuccess message={copySuccess} open={open} setOpen={setOpen} />
            <ContentCopyIcon />
        </IconButton>
    );
};

export default CopyToClipBoard;
