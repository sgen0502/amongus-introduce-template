import React, {useState} from "react";
import {Box, Button, createStyles, makeStyles, Theme, Tooltip} from "@material-ui/core";
import classnames from "classnames";
import amongusLogo from "../resources/amongus.png";
import myColor from "../resources/myColor.png";
import whiteGuy from "../resources/whiteGuy.png";
import redGuy from "../resources/redGuy.png";
import orangeGuy from "../resources/orangeGuy.png";
import yellowGuy from "../resources/yellowGuy.png";
import greenGuy from "../resources/greenGuy.png";
import darkGreenGuy from "../resources/darkGreenGuy.png";
import skyBlueGuy from "../resources/skyBlueGuy.png";
import blueGuy from "../resources/blueGuy.png";
import purpleGuy from "../resources/purpleGuy.png";
import pinkGuy from "../resources/pinkGuy.png";
import brownGuy from "../resources/brownGuy.png";
import blackGuy from "../resources/blackGuy.png";
import tanGuy from "../resources/tanGuy.png";
import greyGuy from "../resources/greyGuy.png";
import bananaGuy from "../resources/bananaGuy.png";
import sunsetGuy from "../resources/sunsetGuy.png";
import roseGuy from "../resources/roseGuy.png";
import maroonGuy from "../resources/maroonGuy.png";

const useStyles = (mainColor: string, boxColor: string) => makeStyles((theme: Theme) =>
    createStyles({
        flex: {
            display: "flex",
        },
        grow: {
            flexGrow: 1
        },
        gray: {
            filter: "grayscale(20%)",
            opacity: 0.10
        },
        logoDiv: {
            marginTop: "30px",
            marginLeft: "110px"
        },
        myColorImg: {
            marginTop: "-30px",
            marginLeft: "15px"
        },
        deviceBox: {
            display: "flex",
            flexDirection: "column",
            alignContent: "left",
            marginLeft: "110px",
            width: "1010px",
            height: "133px",
            background: boxColor
        },
        deviceDiv: {
            marginTop: theme.spacing(2),
            display: "flex",
            justifyContent: "center"
        },
        characterBtn: {
            margin: theme.spacing(-1)
        },
        characterImg: {
            width: "75px",
            height: "75px",
        },
        input: {
            fontSize: "42px"
        },
        nameTooltip:{
            fontSize: "50px",
        }
    })
);

export interface SecondRowProps {
    bgColor: string;
    boxColor: string;
}

const GrayButton = (props: {img: any, select: boolean, setter: React.Dispatch<React.SetStateAction<boolean>>, imgClass: string, btnClass: string}) => {
    const {img, select, setter, imgClass, btnClass} = props;

    return (
        <Button className={btnClass} onClick={() => setter(!select)}>
            <img src={img} alt="pc" className={imgClass} />
        </Button>
    )
}
export const SecondRow = (props: SecondRowProps) => {
    const [selectWhite, setSelectWhite] = useState(true);
    const [selectRed, setSelectRed] = useState(true);
    const [selectOrange, setSelectOrange] = useState(true);
    const [selectYellow, setSelectYellow] = useState(true);
    const [selectGreen, setSelectGreen] = useState(true);
    const [selectDarkGreen, setSelectDarkGreen] = useState(true);
    const [selectSkyBlue, setSelectSkyBlue] = useState(true);
    const [selectBlue, setSelectBlue] = useState(true);
    const [selectPurple, setSelectPurple] = useState(true);
    const [selectPink, setSelectPink] = useState(true);
    const [selectBrown, setSelectBrown] = useState(true);
    const [selectBlack, setSelectBlack] = useState(true);
    const [selectRose, setSelectRose] = useState(true);
    const [selectSunset, setSelectSunset] = useState(true);
    const [selectMaroon, setSelectMaroon] = useState(true);
    const [selectTan, setSelectTan] = useState(true);
    const [selectBanana, setSelectBanana] = useState(true);
    const [selectGrey, setSelectGrey] = useState(true);

    const {bgColor, boxColor} = props;
    const classes = useStyles(bgColor, boxColor)();
    return (
        <React.Fragment>
            <div className={classes.logoDiv}>
                <img src={amongusLogo} alt="logo" />
            </div>
            <Box className={classes.deviceBox} borderRadius={16}>
                <div className={classes.flex}>
                    <img src={myColor} alt="myColor" className={classes.myColorImg} />
                </div>
                <Tooltip className={classes.nameTooltip} title="クリック・タップで選択" arrow>
                    <div className={classes.deviceDiv}>
                        <GrayButton img={redGuy} select={selectRed} setter={setSelectRed} btnClass={classes.characterBtn} imgClass={classnames(classes.characterImg, {[classes.gray]: selectRed})} />
                        <GrayButton img={orangeGuy} select={selectOrange} setter={setSelectOrange} btnClass={classes.characterBtn} imgClass={classnames(classes.characterImg, {[classes.gray]: selectOrange})} />
                        <GrayButton img={yellowGuy} select={selectYellow} setter={setSelectYellow} btnClass={classes.characterBtn} imgClass={classnames(classes.characterImg, {[classes.gray]: selectYellow})} />
                        <GrayButton img={greenGuy} select={selectGreen} setter={setSelectGreen} btnClass={classes.characterBtn} imgClass={classnames(classes.characterImg, {[classes.gray]: selectGreen})} />
                        <GrayButton img={darkGreenGuy} select={selectDarkGreen} setter={setSelectDarkGreen} btnClass={classes.characterBtn} imgClass={classnames(classes.characterImg, {[classes.gray]: selectDarkGreen})} />
                        <GrayButton img={skyBlueGuy} select={selectSkyBlue} setter={setSelectSkyBlue} btnClass={classes.characterBtn} imgClass={classnames(classes.characterImg, {[classes.gray]: selectSkyBlue})} />
                        <GrayButton img={blueGuy} select={selectBlue} setter={setSelectBlue} btnClass={classes.characterBtn} imgClass={classnames(classes.characterImg, {[classes.gray]: selectBlue})} />
                        <GrayButton img={purpleGuy} select={selectPurple} setter={setSelectPurple} btnClass={classes.characterBtn} imgClass={classnames(classes.characterImg, {[classes.gray]: selectPurple})} />
                        <GrayButton img={pinkGuy} select={selectPink} setter={setSelectPink} btnClass={classes.characterBtn} imgClass={classnames(classes.characterImg, {[classes.gray]: selectPink})} />
                        <GrayButton img={brownGuy} select={selectBrown} setter={setSelectBrown} btnClass={classes.characterBtn} imgClass={classnames(classes.characterImg, {[classes.gray]: selectBrown})} />
                        <GrayButton img={blackGuy} select={selectBlack} setter={setSelectBlack} btnClass={classes.characterBtn} imgClass={classnames(classes.characterImg, {[classes.gray]: selectBlack})} />
                        <GrayButton img={whiteGuy} select={selectWhite} setter={setSelectWhite} btnClass={classes.characterBtn} imgClass={classnames(classes.characterImg, {[classes.gray]: selectWhite})} />
                        <GrayButton img={roseGuy} select={selectRose} setter={setSelectRose} btnClass={classes.characterBtn} imgClass={classnames(classes.characterImg, {[classes.gray]: selectRose})} />
                        <GrayButton img={sunsetGuy} select={selectSunset} setter={setSelectSunset} btnClass={classes.characterBtn} imgClass={classnames(classes.characterImg, {[classes.gray]: selectSunset})} />
                        <GrayButton img={maroonGuy} select={selectMaroon} setter={setSelectMaroon} btnClass={classes.characterBtn} imgClass={classnames(classes.characterImg, {[classes.gray]: selectMaroon})} />
                        <GrayButton img={tanGuy} select={selectTan} setter={setSelectTan} btnClass={classes.characterBtn} imgClass={classnames(classes.characterImg, {[classes.gray]: selectTan})} />
                        <GrayButton img={bananaGuy} select={selectBanana} setter={setSelectBanana} btnClass={classes.characterBtn} imgClass={classnames(classes.characterImg, {[classes.gray]: selectBanana})} />
                        <GrayButton img={greyGuy} select={selectGrey} setter={setSelectGrey} btnClass={classes.characterBtn} imgClass={classnames(classes.characterImg, {[classes.gray]: selectGrey})} />
                    </div>
                </Tooltip>
            </Box>
        </React.Fragment>
    )
}