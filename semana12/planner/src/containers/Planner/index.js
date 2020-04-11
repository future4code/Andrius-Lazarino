import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const PlannerWrapper = styled.form`
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

const plannerDaysForm = [
  {
    name: "dia",
    label: "Segunda",
    type: "radio",
    value: "segunda",
    title: "Segunda"
  },
  {
    name: "dia",
    label: "Terça",
    type: "radio",
    value: "terca",
    title: "Terça"
  },
  {
    name: "dia",
    label: "Quarta",
    type: "radio",
    value: "quarta",
    title: "Quarta"
  },
  {
    name: "dia",
    label: "Quinta",
    type: "radio",
    value: "quinta",
    title: "Quinta"
  },
  {
    name: "dia",
    label: "Sexta",
    type: "radio",
    value: "sexta",
    title: "Sexta"
  },
  {
    name: "dia",
    label: "Sabado",
    type: "radio",
    value: "sabado",
    title: "Sabado"
  },
  {
    name: "dia",
    label: "Domingo",
    type: "radio",
    value: "domingo",
    title: "Domingo"
  }
  
]

class Planner extends React.Component {
  render() {
    return <PlannerWrapper>
      <h2>Planner</h2>  
        <input />
        <DaysSelect>
        {
            plannerDaysForm.map((form)=>{
              return (
                <div key={form.value}>
                  {form.label}
                  <input type={form.type} name={form.name} value={form.value} onClick={()=>{console.log("Oi")}} />
                </div>
              )
            })
          }
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
