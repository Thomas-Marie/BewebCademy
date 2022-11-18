import { Box } from "@mui/system"
import { useEffect, useState } from "react"



const Statement = (props: any) => {
    const [title , setTitle] = useState<any>("")
    const [statement, setStatement] = useState<any>("")
    
   
    
    useEffect(()=>{

        setTitle(<h1 style={{margin:"25px", fontSize:"45px"}}>{(props.exercice.name)}</h1>)
        setStatement(<p>{props.exercice.statement}</p>)
    
    },[props.exercice])
    
    


    return(
        <Box sx={{            
            width:" 33vw",
            border: "5px solid black",
            m: 0
        }}
        >
            {title}
            {statement}
        </Box>
    )
}

export default Statement;