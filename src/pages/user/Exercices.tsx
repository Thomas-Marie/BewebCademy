import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import Editor from "../../components/layout/MonacoEditor";
import Statement from "../../components/layout/Statement";
import { getExerciceByBadgeId, getExercices } from "../../services/exercice.service";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import "../../theme/_variables_bewebcademy.scss";
import ex from "../../models/exercice";
import { escape } from "querystring";
import { Button, Grid, Popover, Typography } from "@mui/material";

const Exercice = () => {
  const [exercices, setExercices] = useState<ex[]>([]);
  const [srcDoc, setSrcDoc] = useState("");
  const [html, sethtml] = useState("");
  const [css, setcss] = useState("");
  const [javascript, setjavascript] = useState("");
  const [index, setIndex] = useState(0);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [message, setMessage] = useState("");
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleClose = () => {
    setAnchorEl(null);
  };

 console.log(window.location.href.substring(window.location.href.lastIndexOf('/') + 1))
  let exo: ex[];

  useEffect(() => {
    const fetchExercices = async (id:string) => {
      const data = await getExerciceByBadgeId(id).then((result: any) => {return result});
      setExercices(data);
    };
   

    fetchExercices((window.location.href.substring(window.location.href.lastIndexOf('/') + 1))).catch(console.error);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
          <html>
            <body>
                ${html}
            </body>
            <style>
                ${css}
            </style>
            <script>
                ${javascript}
            </script>
          </html>
        `);
    }, 250);

    return () => clearTimeout(timeout);
  }, [html, css, javascript]);

  //replace code \n and ; and space and replace " by '
  const replaceCode = (code: string) => {
    return code
      .replace(/(\r\n|\n|\r)/gm, "")
      .replace(/;/g, "")
      .replace(/ /g, "")
      .replace(/"/g, "'");
  };

  const valider = (event: React.MouseEvent<HTMLButtonElement>) => {
    let test = encodeURI(srcDoc);
    console.log(test);
    console.log(decodeURI(test));
    setAnchorEl(event.currentTarget);

    if (replaceCode(srcDoc) === exercices[index]?.result) {
      if (index === exercices.length - 1) {
        setMessage("Bravo vous avez fini le badge");
      } else {
        setMessage("Bravo vous avez fini l'exercice");
        setIndex(index + 1);
      }
    } else {
        setMessage("Dommage vous n'avez pas fini l'exercice");
    }
    setTimeout(() => {
        handleClose();
        }
    , 2000);
  };

  return (
    <Grid container spacing={0}>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item xs={2}>
      <Grid container spacing={2} m={"0.1vh"}>
            <Grid item xs={12}>
                <p>Exercice : {exercices[index] === undefined ? '' : exercices[index].name}</p>
            </Grid>
            <Grid item xs={12}>
                <p>Badge : {exercices[index] === undefined ? '' : exercices[index].badges.name}</p>
            </Grid>
            <Grid item xs={12}>
                <p>Exercice {exercices[index] === undefined ? '' : index + 1} / {exercices.length}</p>
            </Grid>
            <Grid item xs={12}>
                <p>Statement : {exercices[index] === undefined ? '' : exercices[index].statement}</p>
            </Grid>
            <Grid item xs={12}> 
                <Button aria-describedby={id} variant="contained" onClick={valider} sx={{bgcolor: '#db1144', '&:hover': {bgcolor: '#1d1d1b'}, alignSelf: "end"}}>  Valider </Button> 
                <Popover 
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'center',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'center',
                        horizontal: 'left',
                    }}
                    >
                    <Typography sx={{ p: 2, backgroundColor: '#1d1d1b', color:"#ffffff"}}>{message}</Typography>
                </Popover>

            </Grid>        
        </Grid>                
      </Grid>
      <Grid item xs>
        <Grid container rowSpacing={0}>
          <Grid item xs={6} borderRight={'1px solid grey'} borderBottom={'1px solid grey'}>
            <Editor
              language="html"
              displayName="html"
              help={exercices[index] === undefined ? '' : exercices[index].help}
              value={html}
              onChange={sethtml}
            />
          </Grid>
          <Grid item xs={6} borderLeft={'1px solid grey'} borderBottom={'1px solid grey'}>
            <Editor
              language="css"
              displayName="css"
              help={exercices[index] === undefined ? '' : exercices[index].help}
              value={css}
              onChange={setcss}
            />
          </Grid>
          <Grid item xs={6} borderRight={'1px solid grey'} borderTop={'1px solid grey'}>
            <Editor
              language="javascript"
              displayName="javascript"
              help={exercices[index] === undefined ? '' : exercices[index].help}
              value={javascript}
              onChange={setjavascript}
            />
          </Grid>
          <Grid item xs={6} borderLeft={'1px solid grey'} borderTop={'1px solid grey'}>
            <iframe
              srcDoc={srcDoc}
              title="output"
              sandbox="allow-scripts"
              frameBorder="0"
              width="100%"
              height="100%"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default Exercice;
