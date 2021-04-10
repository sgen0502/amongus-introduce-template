import React from 'react';
import './App.css';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles'
import {TemplateGenerator} from "./component/templateGenerator";
import {AppBar, Toolbar, Typography} from "@material-ui/core";
import ApplicationState from "./state/ApplicationStateContainer";

const theme = createMuiTheme({
    typography: {
        "fontFamily": `"Noto Sans JP", "Helvetica", "Arial", sans-serif`,
    },
    overrides: {
        MuiTooltip: {
            tooltip: {
                fontSize: "1em",
            }
        }
    }
});

function App() {

    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <AppBar position="relative">
                    <Toolbar>
                        <Typography variant="h6">
                            Among Us 自己紹介クリエイター
                        </Typography>
                    </Toolbar>
                </AppBar>
                <ApplicationState.Provider>
                    <TemplateGenerator/>
                </ApplicationState.Provider>
            </ThemeProvider>
        </div>
    );
}


export default App;
