import React, {useState} from "react";
import {Box, Button, createStyles, Grid, Input, makeStyles, Theme, Typography} from "@material-ui/core";
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
            marginTop: theme.spacing(1),
            display: "flex",
            justifyContent: "center"
        },
        characterBtn: {

        },
        input: {
            fontSize: "42px"
        }
    })
);

export interface SecondRowProps {
    bgColor: string;
    boxColor: string;
}

const GrayButton = (props: {img: any, select: boolean, setter: React.Dispatch<React.SetStateAction<boolean>>, className: string}) => {
    const {img, select, setter, className} = props;

    return (
        <Button onClick={() => setter(!select)}>
            <img src={img} alt="pc" className={className} />
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
                <div className={classes.deviceDiv}>
                    <GrayButton img={whiteGuy} select={selectWhite} setter={setSelectWhite} className={classnames(classes.characterBtn, {[classes.gray]: selectWhite})} />
                    <GrayButton img={redGuy} select={selectRed} setter={setSelectRed} className={classnames(classes.characterBtn, {[classes.gray]: selectRed})} />
                    <GrayButton img={orangeGuy} select={selectOrange} setter={setSelectOrange} className={classnames(classes.characterBtn, {[classes.gray]: selectOrange})} />
                    <GrayButton img={yellowGuy} select={selectYellow} setter={setSelectYellow} className={classnames(classes.characterBtn, {[classes.gray]: selectYellow})} />
                    <GrayButton img={greenGuy} select={selectGreen} setter={setSelectGreen} className={classnames(classes.characterBtn, {[classes.gray]: selectGreen})} />
                    <GrayButton img={darkGreenGuy} select={selectDarkGreen} setter={setSelectDarkGreen} className={classnames(classes.characterBtn, {[classes.gray]: selectDarkGreen})} />
                    <GrayButton img={skyBlueGuy} select={selectSkyBlue} setter={setSelectSkyBlue} className={classnames(classes.characterBtn, {[classes.gray]: selectSkyBlue})} />
                    <GrayButton img={blueGuy} select={selectBlue} setter={setSelectBlue} className={classnames(classes.characterBtn, {[classes.gray]: selectBlue})} />
                    <GrayButton img={purpleGuy} select={selectPurple} setter={setSelectPurple} className={classnames(classes.characterBtn, {[classes.gray]: selectPurple})} />
                    <GrayButton img={pinkGuy} select={selectPink} setter={setSelectPink} className={classnames(classes.characterBtn, {[classes.gray]: selectPink})} />
                    <GrayButton img={brownGuy} select={selectBrown} setter={setSelectBrown} className={classnames(classes.characterBtn, {[classes.gray]: selectBrown})} />
                    <GrayButton img={blackGuy} select={selectBlack} setter={setSelectBlack} className={classnames(classes.characterBtn, {[classes.gray]: selectBlack})} />
                </div>
            </Box>
        </React.Fragment>
    )
}