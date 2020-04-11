import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const PlannerWrapper = styled.div`
  width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
`
const DaysSelect = styled.div`
  display: flex;
`
const Days = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const Day = styled.div`
  border: 1px solid black;
  width: 266px;
`

class Planner extends React.Component {
  render() {
    return <PlannerWrapper>
      <h2>Planner</h2>  
        <input />
        <DaysSelect>
          <div>
            <input type="radio" name="dia" value="segunda" />SEGUNDA
          </div>
          <div>
            <input type="radio" name="dia" value="terca" />TERÇA
          </div>
          <div>
            <input type="radio" name="dia" value="quarta" />QUARTA
          </div>
          <div>
            <input type="radio" name="dia" value="quinta" />QUINTA
          </div>
          <div>
            <input type="radio" name="dia" value="sexta" />SEXTA
          </div>
          <div>
            <input type="radio" name="dia" value="sabado" />SÁBADO
          </div>
          <div>
            <input type="radio" name="dia" value="domingo" />DOMINGO
          </div>
        </DaysSelect>
        <button>Criar Tarefa</button>
        <Days>
          <Day>
            <h3>SEGUNDA</h3>
          </Day>
          <Day>
            <h3>TERÇA</h3>
          </Day>
          <Day>
            <h3>QUARTA</h3>
          </Day>
          <Day>
            <h3>QUINTA</h3>
          </Day>
          <Day>
            <h3>SEXTA</h3>
          </Day>
          <Day>
            <h3>SABADO</h3>
          </Day>
          <Day>
            <h3>DOMINGO</h3>
          </Day>
        </Days>
    </PlannerWrapper>;
  }
}

export default connect()(Planner);
