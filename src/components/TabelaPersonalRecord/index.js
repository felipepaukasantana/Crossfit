import React, { useState, useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

const useStyles = makeStyles({
    table: {
      minWidth: 700,
      marginTop: 30,
    },
  });

  function calcularPorcentagem(peso, porcentagem) {
    return (peso * (porcentagem / 100)).toFixed(2)
  }

function TabelaPersonalRecord() {
  const [exercicios, setExercicios] = useState([
      { 
        nome:'Power Clean',
        personalRecord: 205
      },
      { 
        nome:'Power Snacth',
        personalRecord: 155
      },
      { 
        nome:'Strict HSPU',
        personalRecord: 17
      },
      { 
        nome:'Toes 2 bar',
        personalRecord: 33
      }
    ]); 
   
   const [ porcentagens, setPorcentagens ] = useState([{ }]); 
   const [ porcentagemInicial, setPorcentagemInicial ] = useState(10);
   const [ intervalo, setIntervalo ] = useState(2.5);
   


   const handleOnChancePercentualInicial = (event) => {
    setPorcentagemInicial(Number(event.target.value));
   }

   const handleOnChanceIntervalo = (event) => {
    setIntervalo(Number(event.target.value));
   }

   const classes = useStyles(); 
   
   useEffect(() => {
    function montarPorcentagens ()  {
        let valor = porcentagemInicial
        const valorTotal = 100;
        let lista = [{
            valor: valor
        }]

        while (valor < valorTotal) {
            valor = valor + intervalo;
            lista.push({
                valor: valor
            })
        }
        return lista;
   }
    setPorcentagens(montarPorcentagens());
  }, [porcentagemInicial, intervalo]);

  return (
    
    <div>
      <TextField id="outlined-basic" label="Porcentagem Inicial" variant="outlined" value={porcentagemInicial} onChange={handleOnChancePercentualInicial}/>
      <FormControl component="fieldset">
      <FormLabel component="legend">Intervalo Porcentagem</FormLabel>
      <RadioGroup row aria-label="position" name="position" defaultValue="top" value={intervalo} onChange={handleOnChanceIntervalo}>
      <FormControlLabel
          value={2.5}
          control={<Radio color="primary" />}
          label="2,5"
          labelPlacement="start"
        />
        <FormControlLabel
          value={5}
          control={<Radio color="primary" />}
          label="5"
          labelPlacement="start"
        />
        <FormControlLabel
          value={10}
          control={<Radio color="primary" />}
          label="10"
          labelPlacement="start"
        />
        <FormControlLabel
          value={20}
          control={<Radio color="primary" />}
          label="20"
          labelPlacement="start"
        />
      </RadioGroup>
    </FormControl>
      <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Exercício</StyledTableCell>
            <StyledTableCell align="left">PR</StyledTableCell>
            {porcentagens.map((porcentagem) => (
                <StyledTableCell align="left">{porcentagem.valor}%</StyledTableCell>    
              ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {exercicios.map((row) => (
            <StyledTableRow key={row.nome}>
              <StyledTableCell component="th" scope="row">
                {row.nome}
              </StyledTableCell>
              <StyledTableCell align="left">{row.personalRecord}</StyledTableCell>
              {porcentagens.map((porcentagem) => (
                <StyledTableCell align="left">{
                    calcularPorcentagem(row.personalRecord, porcentagem.valor)
                    }</StyledTableCell>    
              ))}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer> 
    </div>
  );
}

export default TabelaPersonalRecord;
