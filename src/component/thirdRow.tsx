import React, {useState} from "react";
import {
    Box,
    createStyles,
    makeStyles,
    MenuItem,
    Select,
    Theme,
} from "@material-ui/core";
import playTime from "../resources/playTime.png";
import mapLike from "../resources/mapLike.png";
import playStyle from "../resources/playStyle.png";
import theSkeld from "../resources/theSkeld.png";
import miraHq from "../resources/miraHq.png";
import polus from "../resources/polus.png";
import airshio from '../resources/airship.png'
import free from "../resources/free.png";
import ufo from "../resources/ufo.png";
import neko from "../resources/neko.png";
import alienHat from "../resources/alianHat.png";

const useStyles = (mainColor: string, boxColor: string, font: string) => makeStyles((theme: Theme) =>
    createStyles({
        parentDiv: {
          display: "flex",
          flexDirection: "row",
          marginLeft: "80px",
        },
        sideDiv: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",

        },
        centerDiv: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            marginLeft: "70px",
        },
        flex: {
            display: "flex",
        },
        flexRowInverse: {
            display: "flex",
            flexDirection: "row-reverse"
        },
        grow: {
            flexGrow: 1
        },
        input: {
            margin: theme.spacing(2),
            textAlign: "left",
            fontSize: "36px",
            fontFamily: font
        },
        sideInput: {
            marginTop: theme.spacing(1),
            marginLeft: theme.spacing(2),
            overflowY: "auto",
            minHeight: "130px",
            textAlign: "left",
            fontSize: "36px",
            fontFamily: font
        },
        verticalInput: {
            margin: theme.spacing(2),
            fontSize: "36px",
            fontFamily: font,
            textAlign: "left",
            writingMode: "vertical-lr",

        },
        playTimeImg: {
            marginTop: theme.spacing(1),
            marginLeft: "15px"
        },
        ufoImg: {
            marginTop: "-35px",
            marginRight: "-50px",
        },
        alienHutImg :{
            marginTop: "-20px",
            marginLeft: "-50px",
        },
        nekoImg: {
            marginTop: "-75px",
            marginRight: "-50px",
        },
        leftBox: {
            display: "flex",
            flexDirection: "column",
            width: "400px",
            height: "200px",
            background: boxColor
        },
        leftBelowBox: {
            display: "flex",
            flexDirection: "column",
            marginTop: theme.spacing(4),
            width: "400px",
            height: "200px",
            background: boxColor
        },
        ufoDiv: {

        },
        mapSelect:{
            marginTop: theme.spacing(2)
        },
        mapImage: {
            width: "80%",
        },
        freeBox: {
            display: "flex",
            flexDirection: "column",
            width: "700px",
            height: "665px",
            background: boxColor
        },
        extraBox: {
            display: "flex",
            flexDirection: "column",
            width: "240px",
            height: "665px",
            background: boxColor
        }
    })
);

export interface ThirdRowProps {
    bgColor: string;
    boxColor: string;
    font: string;
}

export const ThirdRow = (props: ThirdRowProps) => {
    const [map, setMap] = useState(1);

    const {bgColor, boxColor, font} = props;
    const classes = useStyles(bgColor, boxColor, font)();
    return (
        <React.Fragment>
            <div className={classes.parentDiv}>
                <div className={classes.sideDiv}>
                    <Box className={classes.leftBox} borderRadius={16}>
                        <div className={classes.flex}>
                            <img src={playTime} alt="name" className={classes.playTimeImg} />
                        </div>
                        <div contentEditable="true" className={classes.sideInput}>
                            <span>プレイ時間帯を記入</span>
                        </div>
                        <div className={classes.flexRowInverse}>
                            <img src={ufo} alt="name" className={classes.ufoImg} />
                        </div>
                    </Box>
                    <Box className={classes.leftBelowBox} borderRadius={16}>
                        <div className={classes.flex}>
                            <img src={mapLike} alt="name" className={classes.playTimeImg} />
                        </div>
                        <Select className={classes.mapSelect} disableUnderline={true} value={map} onChange={event => setMap(event.target.value as number)}>
                            <MenuItem value={1}><img src={theSkeld} alt="name" className={classes.mapImage}/></MenuItem>
                            <MenuItem value={2}><img src={miraHq} alt="name" className={classes.mapImage}/></MenuItem>
                            <MenuItem value={3}><img src={polus} alt="name"  className={classes.mapImage}/></MenuItem>
                            <MenuItem value={4}><img src={airshio} alt="name"  className={classes.mapImage}/></MenuItem>
                        </Select>
                        <div className={classes.flex}>
                            <img src={alienHat} alt="alienHat" className={classes.alienHutImg} />
                        </div>
                    </Box>
                    <Box className={classes.leftBelowBox} borderRadius={16}>
                        <div className={classes.flex}>
                            <img src={playStyle} alt="name" className={classes.playTimeImg} />
                        </div>
                        {/*<Input className={classes.input} multiline　disableUnderline={true} placeholder={"スタイル"}/>*/}
                        <div className={classes.sideInput} contentEditable="true">
                            <span>プレイスタイルを記入</span>
                        </div>
                        <div className={classes.flexRowInverse}>
                            <img src={neko} alt="name" className={classes.nekoImg} />
                        </div>
                    </Box>
                </div>
                <div className={classes.centerDiv}>
                    <Box className={classes.freeBox} borderRadius={16}>
                        <div className={classes.flex}>
                            <img src={free} alt="name" className={classes.playTimeImg} />
                        </div>
                        <div className={classes.input} contentEditable="true">
                            <span>ご自由に編集してください</span>
                        </div>
                    </Box>
                </div>
                <div className={classes.centerDiv}>
                    <Box className={classes.extraBox} borderRadius={16}>
                        <div className={classes.verticalInput} contentEditable="true">ここだけ縦書きです.<br/>邪魔なら消してください
                        </div>
                    </Box>
                </div>
            </div>
        </React.Fragment>
    )
}