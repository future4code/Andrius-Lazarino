import React from "react";
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import {
    MuiThemeProvider,
    createMuiTheme
} from '@material-ui/core/styles';
import { connect } from "react-redux";
import { createTask, fetchTasks, markAllComplete, filterTasks, deleteTakscompleted } from "../../actions";
import Tasks from "../Tasks";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#F5F5F5',
        },
        secondary: {
            main: '#212121',
        },
    }
})

const classes = {
    card: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    input: {
        margin: theme.spacing.unit,
    },
};

const CardTasks = styled(Card)`
    width:60%;
  `
const InputTask = styled(Input)`
    width: 100%;
  `
const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `
const Menu = styled.div`
  display: flex;
  align-items: center;
`

class App extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            inputName: ''
        }
    }

    onChangeInputName = (e)=>{
        this.setState({
            inputName: e.target.value
        })
    }
    checkEnterKey = (e)=>{
        if (e.keyCode===13){
            this.props.createTask(this.state.inputName)
            this.setState({
                inputName: ''
            })
        }
    }
    componentDidMount(){
        this.props.fetchTasks()
    }
    render(){
    return (
        <MuiThemeProvider theme={theme}>
            <Main>
                <h1>4Task</h1>
                <CardTasks className={classes.card}>
                    <CardContent>
                        <Typography component="p">
                            <InputTask
                                value={this.state.inputName}
                                onChange={this.onChangeInputName}
                                onKeyDown={this.checkEnterKey}
                                placeholder="Oque tem que ser feito?"
                                className={classes.input}
                                inputProps={{
                                    'aria-label': 'Description',
                                }}
                            />
                            <Tasks />
                            <Menu>
                                <Button className={classes.button} onClick={
                                    this.props.markAllComplete
                                }>Marcar todas como completas</Button>|
                                <Button onClick={()=>{this.props.filterTasks("all")}} className={classes.button}>Todas</Button>|
                                <Button onClick={()=>{this.props.filterTasks("pending")}} className={classes.button}>Pendentes</Button>|
                                <Button onClick={()=>{this.props.filterTasks("completed")}} className={classes.button}>Completas</Button>|
                                <Button onClick={this.props.deleteTakscompleted} className={classes.button}>Remover completas</Button>
                            </Menu>
                        </Typography>
                    </CardContent>
                </CardTasks>
            </Main>
        </MuiThemeProvider>
    )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createTask: name => dispatch(createTask(name)),
        fetchTasks: ()=>dispatch(fetchTasks()),
        markAllComplete: ()=> dispatch(markAllComplete()),
        filterTasks: filter => dispatch(filterTasks(filter)),
        deleteTakscompleted: ()=> dispatch(deleteTakscompleted())
    };
};

export default connect(null,mapDispatchToProps)(App)