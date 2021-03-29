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
import ApplicationState from "../state/ApplicationStateContainer";
import { exportComponentAsPNG  } from 'react-component-export-image';
import { SketchPicker } from 'react-color';
import CanvasDraw from "react-canvas-draw";
import {FirstRow} from "./firstRow";
import {SecondRow} from "./secondRow";
import {ThirdRow} from "./thirdRow";
import sign from "../resources/sign.png";
import {FontPicker} from "./font/FontPicker";
const useStyles = (mainColor: string) => makeStyles((theme: Theme) =>
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
        flexRowReverse: {
            display: "flex",
            flexDirection: "row-reverse",
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
        },
        hide: {
            visibility: "collapse"
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

export const TemplateGenerator = () => {
    const [bgColor, setBgColor] = useState("#E9CFD7")
    const [boxColor, setBoxColor] = useState("#F4E7E8")

    const [hideCanvas, setHideCanvas] = useState(true)
    const classes = useStyles(bgColor)();

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const state = ApplicationState.useContainer();

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
                    <AppBar position={"static"} color={"default"}>
                        <Toolbar>
                            <Typography className={classes.title} variant="h6" noWrap>
                                メニュー
                            </Typography>
                            <div className={classes.grow}/>
                            <Button className={classes.menuItem} variant={"contained"} color={"primary"}  onClick={() => exportComponentAsPNG (exportRef)}>
                                画像をダウンロード
                            </Button>
                            <FontPicker className={classes.menuItem} selectedFont={state.font} onChange={state.setFont}/>
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
                                            <div className={classes.grow} />
                                            <Select className={classes.grow} disableUnderline={true} >
                                                <MenuItem value={1}>
                                                    <div className={classes.flex}>ピンク: 全体 <div>{bgColor}</div>, 四角内 <div>{boxColor}</div></div>
                                                </MenuItem>
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
                                <Button className={classes.menuItem} variant={"contained"} color={"secondary"}  aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                                    色変更
                                </Button>
                                <Button className={classes.menuItem} variant={"outlined"} color={"secondary"} onClick={() => {
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
                                <CanvasDraw ref={canvasRef} hideGrid={true} canvasWidth={1686} canvasHeight={1180} style={{visibility: hideCanvas ? "collapse" : "visible", background: "transparent", marginLeft: "0px", position: "absolute"}}/>
                                <Grid item xs={12} className={classes.firstRow}>
                                    <FirstRow bgColor={bgColor} boxColor={boxColor} font={state.font}/>
                                </Grid>
                                <Grid item xs={12} className={classes.secondRow}>
                                    <SecondRow bgColor={bgColor} boxColor={boxColor}/>
                                </Grid>
                                <Grid item xs={12} className={classes.secondRow}>
                                    <ThirdRow bgColor={bgColor} boxColor={boxColor} font={state.font}/>
                                </Grid>
                                <Grid item xs={12} className={classes.flexRowReverse}>
                                    <div className={classes.flex}>
                                        <img src={sign} alt="name" className={classes.flex} />
                                    </div>
                                </Grid>
                            </Grid>
                        </Box>
                    </div>
                </Grid>
            </Grid>
        </Container>
    )
}