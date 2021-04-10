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
import { ChromePicker } from 'react-color';
import {FirstRow} from "./firstRow";
import {SecondRow} from "./secondRow";
import {ThirdRow} from "./thirdRow";
import sign from "../resources/sign.png";
import {FontPicker} from "./font/FontPicker";
import classNames from "classnames";
import { TutorialDialog } from "./tutorialDialog";
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
        explain: {
            color: "#FFFFFF",
            fontWeight: "bold",
            background: "#fcb840"
        },
        mainGrid: {
            margin: theme.spacing(2)
        },
        box: {
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
        colorBox: {
          marginLeft: theme.spacing(1),
          minWidth: "100px"
        },
        fontBold: {
            fontWeight: "bold"
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

const Preset = [
    {name: "pink", bgColor: "#E9CFD7", boxColor: "#F4E7E8"},
    {name: "orange", bgColor: "#E9D6CF", boxColor: "#F4EEE7"},
    {name: "yellow", bgColor: "#E9E5CF", boxColor: "#F3F4E7"},
    {name: "green", bgColor: "#CFE9CF", boxColor: "#E7F4EB"},
    {name: "skyblue", bgColor: "#CFE9E7", boxColor: "#E7F1F4"},
    {name: "blue", bgColor: "#CFDAE9", boxColor: "#E7E9F4"},
    {name: "purple", bgColor: "#DDCFE9", boxColor: "#F0E7F4"}
]

export const TemplateGenerator = () => {
    const [bgColor, setBgColor] = useState("#E9CFD7");
    const [boxColor, setBoxColor] = useState("#F4E7E8");
    const [dialogOpen, setDialogOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const classes = useStyles(bgColor)();

    const state = ApplicationState.useContainer();



    const handleDialogClickOpen = () => {
        setDialogOpen(true);
    };
    const handleDialogClose = () => {
        setDialogOpen(false);
    };

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const onColorPresetChange = (preset: any) => {
        const selectedColor = preset.target.value;
        const color = Preset.find(p => p.name === selectedColor);
        if(color){
            setBgColor(color.bgColor);
            setBoxColor(color.boxColor);
        }
    }

    const exportRef = useRef(null);
    return (
        <Container className={classes.container} fixed>
            <TutorialDialog open={dialogOpen} handleClose={handleDialogClose}/>
            <Grid container>
                <Grid item xs={12}>
                    <AppBar position={"static"} color={"default"}>
                        <Toolbar>
                            <Typography className={classes.title} variant="h6" noWrap>
                                メニュー
                            </Typography>
                            <Button className={classNames(classes.menuItem, classes.explain)} variant={"contained"}
                                    color={"inherit"} size={"large"} onClick={handleDialogClickOpen}>
                                使い方説明！
                            </Button>
                            <div className={classes.grow}/>
                            <Button className={classes.menuItem} variant={"contained"} color={"primary"} size={"large"} onClick={() => exportComponentAsPNG (exportRef)}>
                               ダウンロード
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
                                            <Typography className={classes.fontBold}>プリセット</Typography>
                                            <div className={classes.grow} />
                                            <Select className={classes.grow} disableUnderline={true} defaultValue={"pink"} onChange={onColorPresetChange}>
                                                {Preset.map(p => (
                                                    <MenuItem key={p.name} value={p.name}>
                                                        <div className={classes.flex}>
                                                            <div className={classNames(classes.flex, classes.menuItem)}>
                                                                全体: <div className={classes.colorBox} style={{background: p.bgColor}}/>
                                                            </div>
                                                            <div className={classNames(classes.flex, classes.menuItem)}>
                                                                四角: <div className={classes.colorBox} style={{background: p.boxColor}}/>
                                                            </div>
                                                        </div>
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </Toolbar>
                                    </AppBar>
                                    <div className={classes.menu}>
                                        <div className={classes.menuItem}>
                                            <Typography className={classes.fontBold}>全体</Typography>
                                            <ChromePicker
                                                color={ bgColor }
                                                onChangeComplete={(color: any) => setBgColor(color.hex)}
                                            />
                                        </div>
                                        <div className={classes.menuItem}>
                                            <Typography className={classes.fontBold}>四角</Typography>
                                            <ChromePicker
                                                color={ boxColor }
                                                onChangeComplete={(color: any) => setBoxColor(color.hex)}
                                            />
                                        </div>
                                    </div>
                                </Menu>
                                <Button className={classes.menuItem} variant={"contained"} color={"secondary"} size={"large"}  onClick={handleClick}>
                                    色変更
                                </Button>
                            </div>
                        </Toolbar>
                    </AppBar>
                </Grid>
                <Grid item xs={12} className={classes.mainGrid}>
                    <div ref={exportRef}>
                        <Box id="template" className={classes.box}>
                            <Grid container>
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
