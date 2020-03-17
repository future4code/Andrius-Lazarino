import React from "react";
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import { createMuiTheme } from '@material-ui/core/styles';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { connect } from "react-redux";

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

const App = props => {
    console.log(props.task)
    return (
            <MuiThemeProvider theme={theme}>
                <Main>
                    <h1>4Task</h1>
                    <CardTasks className={classes.card}>
                        <CardContent>
                            <Typography component="p">
                                <InputTask
                                    placeholder="Oque tem que ser feito?"
                                    className={classes.input}
                                    inputProps={{
                                        'aria-label': 'Description',
                                    }}
                                />
                                {/* <Task /> */}
                            </Typography>
                        </CardContent>
                    </CardTasks>
                </Main>
            </MuiThemeProvider>
    )
}

const mapStateToProps = state => {
    return {
        task: state.tasks.tasksList
    }
}

export default connect(mapStateToProps)(App)