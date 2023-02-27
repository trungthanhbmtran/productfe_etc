import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Grid, List, ListItem, ListItemButton } from "@mui/material";
// import Link from "../lib/Link";
import { useMemo, useState } from "react";
import LayOut from '../layout';
import {DocETC} from '../../../data/doc'
import {Colors} from '../../lib/theme'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: Colors.primary,
    color: Colors.secondary,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



export default function Doc({slug}) {
  const [clicked, setClicked] = useState(1)

  const TypeTable = DocETC.filter(e => e.IdType == slug)

  const TabeRender = useMemo(() => TypeTable.at().Content.filter(e => e.IdCategory == clicked),[clicked])
  return (
    <LayOut>
      <Grid container  sx={{m : 5}}>
        <Grid item xs={12}  md={2} lg={2} >
          {TypeTable.at().Content && TypeTable.at().Content.map(e => {
            return (
              <List
                variant="outlined"
                sx={{ borderRadius: 'sm', maxWidth: 240 }}
              >
                <ListItem >
                  <ListItemButton onClick={() => setClicked(e.IdCategory)} >{e.Category}</ListItemButton>
                </ListItem>
              </List>

            )
          })}
        </Grid>
        <Grid item xs={12}  md={10} lg={10}>
          {TabeRender.map((element) => {
            return (
              <TableContainer key={element.IdCategory} component={Paper} >
                <Table sx={{ minWidth: 650 }} aria-label="simple table" >
                  <TableHead>
                    <TableRow >
                      <StyledTableCell align="center">STT</StyledTableCell>
                      <StyledTableCell align="center">Tên Tệp</StyledTableCell>
                      <StyledTableCell align="center">Ngày cập nhật</StyledTableCell>
                      <StyledTableCell align="center">Tải xuống</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {element.SubContent.map((row, index) => {
                      return (
                        <StyledTableRow
                          key={row.Name}
                        >
                          <StyledTableCell align="center">{index + 1}</StyledTableCell>
                          <StyledTableCell component="th" scope="row" align="left">
                            {row.Name}
                          </StyledTableCell>
                          <StyledTableCell align="center">{row.Modifile}</StyledTableCell>
                          <StyledTableCell align="center">
                            <Button component="a"
                              href={row.path}
                              download="tailieu.pdf">
                              Xem tài liệu
                            </Button>
                          </StyledTableCell>
                        </StyledTableRow >
                      )
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
            )
          })}
        </Grid>
      </Grid>
      </LayOut>
  )

}