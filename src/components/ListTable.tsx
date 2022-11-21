import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// import { Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import { getBadges } from '../services/badge.service';
import Badge from '../models/badge';


export default function ListTable() {



  const [badges, setBadges] = useState<any>([])

  useEffect(() => {
    const fetchBadges = async () => {
      const ResulGetBadges = await getBadges().then((result: any) => { return result })
      setBadges(ResulGetBadges)
      // console.log(badges[0].language[0])
    }
    fetchBadges().catch(console.error)
  }, [])


  let htmlBadges = Array()
  let cssBadges = Array()
  let jsBadges = Array()
  let phpBadges = Array()
  let sqlBadges = Array()

  badges.map((badge: Badge, i: number) => {
    switch (badge.language[0].name) {
      case 'php':
        phpBadges.push(badge)
        break
      case 'javascript':
        jsBadges.push(badge)
        break
      case 'html':
        htmlBadges.push(badge)
        break
      case 'css':
        cssBadges.push(badge)
        break
      case 'sql':
        sqlBadges.push(badge)
        break
      default:
        console.log("Il ne se passe rien")
    }
  })

  return (
    <TableContainer sx={{ width: '100%', margin: 'auto' }} component={Paper}>
      {/* <Typography variant="h3">Badges({badges.language.name})</Typography> */}
      <Table sx={{
        minWidth: 650,
        alignItems: 'center',
        border: 1
      }} aria-label="simple table">

        <TableHead >
          <TableRow>
            <TableCell sx={{ color: '#DB1144' }}>Titre Badge</TableCell>
            <TableCell sx={{ color: '#DB1144' }} align="center">Language</TableCell>
            <TableCell sx={{ color: '#DB1144' }} align="center">Obtenu</TableCell>
            <TableCell sx={{ color: '#DB1144' }} align="center">Date</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>

          {badges.map((elementbadges: any, index: any) => (
            <TableRow
              key={elementbadges.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row" sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                <img src={elementbadges.image} />
                <span>{elementbadges.name}</span>
              </TableCell>
              <TableCell align="center">{elementbadges.language.name}</TableCell>
              <TableCell align="center">{elementbadges.all_done}</TableCell>
              <TableCell align="center">{elementbadges.acquisition_date}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}



