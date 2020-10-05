import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

function NewWorkout() {
  const [exercicios, setExercicios] = useState(['Power Clean', 'Power Snatch']);
  const [exercicio, setExercicio] = useState([{
    nome: '',
    timeCap: '',
    repeticoes: '',
    porcentagem: ''
  }]);
  const [series, setSeries] = useState([{
    repeticoes: '',
    porcentagem: ''
  }]);
  const [sessao, setSessao] = useState([{
    descricao: '',
    observação: '',   
  }]);
  const descricao = '';
  const observacao = '';
  const classes = useStyles();

  const handleChange = (event) => {
    setExercicio(event.target.value);
  };

  const handleClickSessao = (event) => {
    const newSessao = {
      descricao: 'descricao',
      observacao: 'observacao',
    };

    setSessao([
      ...sessao,
      newSessao
    ]);
  };

  const handleClickExercicio = (event) => {
    const newExercico = {
      nome: 'Power Clean',
      timeCap: '2 por 20'
    };

    setExercicio([
      ...exercicio,
      newExercico
    ]);
  };

  const handleClickSerie = (event) => {
    const newSerie = {
      repeticoes: 3,
      porcentagem: 70
    };

    setSeries([
      ...series,
      newSerie
    ]);
  };

  return (
    <div className="App">
      <div>
        <TextField
          id="date"
          label="Dia"
          type="date"
          defaultValue={new Date()}
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
        </div>
        <div>
        <TextField id="descricao" label="Descrição" value={descricao}/>
        <div>
        <TextField
          id="observacao"
          label="Multiline"
          multiline
          rows={4}
          value={observacao}
        /> 
        </div>
        <IconButton onClick={handleClickSessao} color="secondary" aria-label="add an alarm">
          <AddCircleIcon />
        </IconButton>
        </div>
        <div>
        <TextField
          id="timecap"
          label="TimeCap"
          type="text"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <InputLabel htmlFor="age-native-simple">Exercício</InputLabel>
        <Select
          native
          value={exercicio}
          onChange={handleChange}
          inputProps={exercicios}
        >
          {exercicios.map((exer) => (
            <option value={exer}>{exer}</option>
          ))}

        </Select>
        </div>
        <IconButton onClick={handleClickExercicio} color="secondary" aria-label="add an alarm">
          <AddCircleIcon />
        </IconButton>
        <div>
        <TextField
          id="repeticao"
          label="Repeticao"
          type="text"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="porcentagem"
          label="Porcentagem"
          type="text"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />        
        </div>
        <IconButton onClick={handleClickSerie} color="secondary" aria-label="add an alarm">
          <AddCircleIcon />
        </IconButton>
        {sessao.map((value) => (
          <div>
            <h5>{value.descricao}</h5>
            <h5>{value.observacao}</h5>   
            <h6>{value.timeCap}</h6>          
          </div>
         ))}
         {exercicio.map((value) => (
          <div>
            <h5>{value.nome}</h5>
            <h6>{value.timeCap}</h6>  
            <h5>{value.repeticoes}</h5>   
            <h6>{value.porcentagem}</h6>          
          </div>
         ))}
         {series.map((value) => (
          <div> 
            <h6>{value.repeticoes} {value.porcentagem}</h6>          
          </div>
         ))}
    </div>
  );
}

export default NewWorkout;
