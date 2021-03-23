import React, {useRef, useState} from "react";
import {
    AppBar,
    Box,
    Button,
    Container,
    createStyles,
    Grid,
    makeStyles, Menu, MenuItem, Select,
    Theme,
    Toolbar,
    Typography
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
        menu: {
            display: "flex",
            justifyContent: "space-around",
            margin: theme.spacing(2),
        },
        menuItem: {
            margin: theme.spacing(1)
        },
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

// const canvasProps = {
//     onChange: null,
//     loadTimeOffset: 5,
//     lazyRadius: 30,
//     brushRadius: 12,
//     brushColor: "#444",
//     catenaryColor: "#0a0302",
//     gridColor: "rgba(150,150,150,0.17)",
//     hideGrid: true,
//     canvasWidth: 400,
//     canvasHeight: 400,
//     disabled: false,
//     imgSrc: "",
//     saveData: null,
//     immediateLoading: false,
//     hideInterface: false
// };

//font gooddog-new,
export const TemplateGenerator = (props : {ref?: any}) => {
    const [bgColor, setBgColor] = useState("#E9CFD7")
    const [boxColor, setBoxColor] = useState("#F4E7E8")

    const [hideCanvas, setHideCanvas] = useState(true)
    const classes = useStyles(bgColor, boxColor)();

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const exportRef = useRef(null);
    const canvasRef = useRef({} as CanvasDraw);
    return (
        <Container className={classes.container} fixed>
            <Grid container>
                <Grid item xs={12}>
                    <AppBar position={"static"}>
                        <Toolbar>
                            <Typography className={classes.title} variant="h6" noWrap>
                                機能
                            </Typography>
                            <div className={classes.grow}/>
                            <div >
                                <Menu
                                    id="simple-menu"
                                    anchorEl={anchorEl}
                                    keepMounted
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}
                                >
                                    <AppBar position={"relative"} color={"default"}>
                                        <Toolbar>
                                            <Typography>プリセット</Typography>
                                            <div className={classes.grow}/>
                                            <Select disableUnderline={true} >
                                                <MenuItem value={1}>ピンク</MenuItem>
                                                <MenuItem value={2}>青</MenuItem>
                                                <MenuItem value={3}>緑</MenuItem>
                                            </Select>
                                        </Toolbar>
                                    </AppBar>
                                    <div className={classes.menu}>
                                        <div>
                                            <Typography>全体</Typography>
                                            <SketchPicker
                                                color={ bgColor }
                                                onChangeComplete={(color: any) => setBgColor(color.hex)}
                                            />
                                        </div>
                                        <div>
                                            <Typography>四角内</Typography>
                                            <SketchPicker
                                                color={ boxColor }
                                                onChangeComplete={(color: any) => setBoxColor(color.hex)}
                                            />
                                        </div>
                                    </div>
                                </Menu>
                                <Button className={classes.menuItem} variant={"contained"} color={"default"}  onClick={() => exportComponentAsPNG (exportRef)}>
                                    ダウンロード
                                </Button>
                                <Button className={classes.menuItem} variant={"contained"} color={"secondary"}  aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                                    色変更
                                </Button>

                                <Button className={classes.menuItem} variant={"contained"} color={"secondary"} onClick={() => {
                                    setHideCanvas(!hideCanvas)
                                }}>落書きモード</Button>
                            </div>
                        </Toolbar>
                    </AppBar>
                </Grid>
                <Grid item xs={12}>
                    <div ref={exportRef}>
                        <Box id="template" className={classes.box}>
                            <Grid container>
                                {hideCanvas ? null : <CanvasDraw ref={canvasRef} hideGrid={true} canvasWidth={1460} canvasHeight={1180} style={{background: "transparent", marginLeft: "0px", position: "absolute"}}/>}
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