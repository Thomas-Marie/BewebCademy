import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';




function createData(
  titrebadge: string,
  language: string,
  obtenu: string,
  date: string,
) {
  return {titrebadge, language, obtenu, date };
}

const rows = [
  createData('Les bases', 'javascript', 'oui', '08/08/2022'),
  createData('Fonction','javascript', 'non', '08/08/2022'),
  createData('Array','javascript','oui', '08/08/2022'),

];


export default function listTable() {

  
  return (

    <TableContainer sx={{width:'80%', margin: 'auto'}} component={Paper}>
      <Table sx={{ minWidth: 650, 
    alignItems : 'center',
    border : 1}} aria-label="simple table">
        <TableHead >
          <TableRow>
            <TableCell sx={{color: '#DB1144'}}>Titre Badge</TableCell>
            <TableCell style={{color: '#DB1144'}}align="center">Language</TableCell>
            <TableCell style={{color: '#DB1144'}}align="center">Obtenu</TableCell>
            <TableCell style={{color: '#DB1144'}}align="center">Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.titrebadge}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>              
              <TableCell component="th" scope="row">
                {row.titrebadge}
              </TableCell>
              <TableCell align="center">{row.language}</TableCell>
              <TableCell align="center">{row.obtenu}</TableCell>
              <TableCell align="center">{row.date}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}



