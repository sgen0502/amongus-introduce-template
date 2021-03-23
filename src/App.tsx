import React from 'react';
import './App.css';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles'
import {TemplateGenerator} from "./component/templateGenerator";
import {AppBar, Toolbar, Typography} from "@material-ui/core";

const theme = createMuiTheme({
    // palette: {
    //     primary: {
    //         main: '#E9B935',
    //     },
    //     secondary: {
    //         main: green[500],
    //     },
    // },
    typography: {
        "fontFamily": `"Noto Sans JP", "Helvetica", "Arial", sans-serif`,
    }
});

function App() {

    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <AppBar position="sticky">
                    <Toolbar>
                        <Typography variant="h6">
                            Among Us 自己紹介テンプレート
                        </Typography>
                    </Toolbar>
                </AppBar>
                <TemplateGenerator/>
            </ThemeProvider>
        </div>
    );
}


export default App;
