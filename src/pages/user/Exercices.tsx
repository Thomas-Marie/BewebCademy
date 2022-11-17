import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import MonacoEditor from "../../components/layout/MonacoEditor";
import Statement from "../../components/layout/Statement";
import { getExercices } from "../../services/exercice.service";
import Header from "../../components/layout/Header"
import Footer from "../../components/layout/Footer"
import "../../theme/_variables_bewebcademy.scss"
import { Pagination } from "@mui/material";

const Exercice = () => {
    const [exercices, setExercices] = useState<any>([]);
    let increment = 0;
    let maxIncrement = exercices.length;

    useEffect(() => {
        const fetchExercices = async () => {
            let data = await getExercices().then((result: any) => {
                return result;
            });
            setExercices(data[increment]);
        };
        fetchExercices().catch(console.error);
    }, []);


    console.log(exercices)

    return (
        <Box width="100%" height="85vh">
            <Header />
            <Box display="flex" flexDirection="row" mt="9vh">
                <Statement exercice={exercices} />
                <MonacoEditor exercice={exercices} />
                
            </Box>
            
            

        </Box>
    );
};

export default Exercice;
