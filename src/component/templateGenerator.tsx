import React, {createRef, useRef, useState} from "react";
import {
    AppBar,
    Box,
    Button,
    Container,
    createStyles,
    Grid,
    makeStyles,
    Theme,
    Toolbar,
    Typography,
    Input
} from "@material-ui/core";
import { exportComponentAsPNG  } from 'react-component-export-image';
import { SketchPicker } from 'react-color';
import CanvasDraw from "react-canvas-draw";
import {FirstRow} from "./firstRow";
import {SecondRow} from "./secondRow";
import {ThirdRow} from "./thirdRow";


const useStyles = (mainColor: string, boxColor: string) => makeStyles((theme: Theme) =>
    createStyles({
        container: {
            display: "flex",
            justifyContent: "left",
            marginTop: theme.spacing(2),
            minWidth: "1688px"
        },
        flex: {
            display: "flex",
        },
        grow: {
            flexGrow: 1
        },
        gray: {
            filter: "grayscale(100%)",
            opacity: 0.15
        },
        title: {},
        box: {
            margin: theme.spacing(1),
            background: mainColor,
            height: "1220px"
        },
        firstRow: {
            marginTop: "60px",
            display: "flex",
        },
        secondRow: {
            marginTop: "40px",
            display: "flex",
        }
    })
);

const canvasProps = {
    onChange: null,
    loadTimeOffset: 5,
    lazyRadius: 30,
    brushRadius: 12,
    brushColor: "#444",
    catenaryColor: "#0a0302",
    gridColor: "rgba(150,150,150,0.17)",
    hideGrid: true,
    canvasWidth: 400,
    canvasHeight: 400,
    disabled: false,
    imgSrc: "",
    saveData: null,
    immediateLoading: false,
    hideInterface: false
};

//font gooddog-new,
export const TemplateGenerator = () => {
    const [bgColor, setBgColor] = useState("#E9CFD7")
    const [boxColor, setBoxColor] = useState("#F4E7E8")

    const [hideCanvas, setHideCanvas] = useState(true)
    const classes = useStyles(bgColor, boxColor)();

    const exportRef = useRef(null);
    return (
        <Container className={classes.container} fixed>
            <Grid container>
                <Grid item xs={12}>
                    <AppBar position={"static"}>
                        <Toolbar>
                            <Typography className={classes.title} variant="h6" noWrap>
                                テンプレート
                            </Typography>
                            <div className={classes.grow}/>
                            <button onClick={() => exportComponentAsPNG (exportRef)}>
                                Export As PNG
                            </button>
                            <SketchPicker
                                color={ bgColor }
                                onChangeComplete={(color: any) => setBgColor(color.hex)}
                            />
                            <SketchPicker
                                color={ boxColor }
                                onChangeComplete={(color: any) => setBoxColor(color.hex)}
                            />
                            <Button variant={"contained"} color={"secondary"} 　onClick={() => setHideCanvas(!hideCanvas)}>落書きモード</Button>
                        </Toolbar>
                    </AppBar>
                </Grid>
                <Grid item xs={12}>
                    <div ref={exportRef}>
                        <Box id="template" className={classes.box}>
                            <Grid container>
                                {hideCanvas ? null : <CanvasDraw hideGrid={true} canvasWidth={1460} canvasHeight={1180} style={{background: "transparent", marginLeft: "0px", position: "absolute"}}/>}
                                <Grid item xs={12} className={classes.firstRow}>
                                    <FirstRow bgColor={bgColor} boxColor={boxColor}/>
                                </Grid>
                                <Grid item xs={12} className={classes.secondRow}>
                                    <SecondRow bgColor={bgColor} boxColor={boxColor}/>
                                </Grid>
                                <Grid item xs={12} className={classes.secondRow}>
                                    <ThirdRow bgColor={bgColor} boxColor={boxColor}/>
                                </Grid>
                            </Grid>
                        </Box>
                    </div>
                </Grid>
            </Grid>
        </Container>
    )
}