import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { createTask, fetchTasks } from "../../actions/planner"

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
  constructor(props) {
    super(props)
    this.state = {
      selectedDay: false,
      taskText: ""
    }
  }

  componentDidMount() {
    this.props.fetchTasks()
  }

  handleDayChange = (day) => {
    this.setState({
      selectedDay: day
    })
  }

  handleTaskText = (e) => {
    this.setState({
      taskText: e.target.value
    })
  }

  handleOnSubmit = (e) => {
    e.preventDefault()
    this.props.createTask(this.state.taskText, this.state.selectedDay)
    this.setState({ taskText: "" })
  }

  render() {
    console.log(this.props.tasks)
    return <PlannerWrapper onSubmit={this.handleOnSubmit}>
      <h2>Planner</h2>
      <input type="text" required={true} value={this.state.taskText} onChange={this.handleTaskText} />
      <DaysSelect>
        {
          plannerDaysForm.map((form) => {
            return (
              <div key={form.value}>
                <input type={form.type} name={form.name} value={form.value} onClick={() => { this.handleDayChange(form.value) }} />
                {form.label}
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

const mapStateToProps = state => {
  return {
    tasks: state.planner.tasks
  }
}

const mapDispatchToProps = dispatch => ({
  createTask: (text, day) => dispatch(createTask(text, day)),
  fetchTasks: () => dispatch(fetchTasks())
})

export default connect(mapStateToProps, mapDispatchToProps)(Planner);
