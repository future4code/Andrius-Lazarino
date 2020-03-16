import React from 'react'
import styled from 'styled-components'
import { createMuiTheme } from '@material-ui/core/styles'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
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
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
}
const Main = styled.div`
    display: flex;
    flex-direction: column;
  `
const Menu = styled.div`
    display: flex;
    align-items: center;
`
const Item = styled.div`
    display: flex;
    align-items: center;
`
const Marker = styled.div`
    width: 30px;
    height: 30px;
    margin-right: 15px;
    border: 1px solid grey;
    border-radius: 50%;
  `

function Task() {
    return (
        <MuiThemeProvider theme={theme}>
            <Main>
                <Item>
                    <Marker />
                    <h2>Use Redux</h2>
                </Item>

                <Menu>
                    <Button className={classes.button}>Marcar todas como completas</Button>|
                    <Button className={classes.button}>Todas</Button>|
                    <Button className={classes.button}>Pendentes</Button>|
                    <Button className={classes.button}>Completas</Button>|
                    <Button className={classes.button}>Remover completas</Button>
                </Menu>
            </Main>
        </MuiThemeProvider>
    )
}
export default Task;