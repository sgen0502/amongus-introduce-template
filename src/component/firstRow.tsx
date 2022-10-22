import React, {useEffect, useState} from "react";
import {useDropzone} from 'react-dropzone';
import star from "../resources/star.png";
import imagePlaceHolder from "../resources/imagePlaceHolder.png";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {Box, Button, createStyles, makeStyles, Theme, Tooltip} from "@material-ui/core";
import name from "../resources/name.png";
import playDevice from "../resources/playDevice.png";
import pc from "../resources/PC.png";
import classnames from "classnames";
import phone from "../resources/phone.png";
import switchImg from "../resources/switch.png";
//import { FontResizableDiv } from "./font/FontResizableDiv";

const useStyles = (mainColor: string, boxColor: string, font: string) => makeStyles((theme: Theme) =>
    createStyles({
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
        box: {
            margin: theme.spacing(1),
            background: mainColor,
            height: "1180px"
        },
        star: {
            marginTop: "-20px",
            marginLeft: "80px"
        },
        thumbNailBox: {
            marginLeft: theme.spacing(1),
            width: "243px",
            height: "233px",
            background: boxColor
        },
        thumbNail:{
            width: "243px",
            height: "233px",
        },
        nameBox: {
            display: "flex",
            flexDirection: "column",
            marginLeft: "150px",
            width: "500px",
            height: "233px",
            background: boxColor
        },
        playTimeImg: {
            marginTop: "20px",
            marginLeft: "15px"
        },
        deviceBox: {
            display: "flex",
            flexDirection: "column",
            alignContent: "left",
            marginLeft: "50px",
            width: "460px",
            height: "233px",
            background: boxColor
        },
        deviceDiv: {
            marginTop: -theme.spacing(2),
            display: "flex",
            justifyContent: "center",
        },
        input: {
            margin: theme.spacing(1),
            fontSize: "58px",
            fontFamily: font,
            minHeight: "130px"
        },
        fontSize: {
            fontSize: "20px",
        },
        nameTooltip:{
            fontSize: "50px",
        }
    })
);

export interface FirstRowProps {
    bgColor: string;
    boxColor: string;
    font: string;
}

export const FirstRow = (props: FirstRowProps) => {
    const [selectPc, setSelectPc] = useState(true);
    const [selectPhone, setSelectPhone] = useState(true);
    const [selectSwitch, setSelectSwitch] = useState(true);
    const [thumbNail, setThumbNail] = useState(imagePlaceHolder);
    const {acceptedFiles, getRootProps, getInputProps} = useDropzone();

    const {bgColor, boxColor, font} = props;
    const classes = useStyles(bgColor, boxColor, font)();

    useEffect(() => {
        acceptedFiles.forEach(file => {
            setThumbNail(URL.createObjectURL(file))
        });
    }, [acceptedFiles])
    return (
        <React.Fragment>
            <div>
                <img src={star} alt="star" className={classes.star}/>
            </div>
            <Box className={classes.thumbNailBox}>
                <Tooltip className={classes.nameTooltip} title="クリックして画像をアップロード" arrow>
                    <div {...getRootProps({className: 'dropzone'})}>
                        <input {...getInputProps()} />
                        <img src={thumbNail} alt="thumbNail" className={classes.thumbNail}/>
                    </div>
                </Tooltip>
            </Box>
            <Box className={classes.nameBox} borderRadius={16}>
                <div className={classes.flex}>
                    <img src={name} alt="name" className={classes.playTimeImg} />
                </div>
                <div contentEditable="true" className={classes.input}>
                    <span>名前</span>
                </div>
                {/*<FontResizableDiv placeHolder={"名前"} defaultFontSize={40} contentEditable="true" className={classes.input}/>*/}
            </Box>
            <Box className={classes.deviceBox} borderRadius={16}>
                <div className={classes.flex}>
                    <img src={playDevice} alt="playDevice" className={classes.playTimeImg} />
                </div>
                <Tooltip className={classes.nameTooltip} title="クリック・タップで選択" arrow>
                    <div className={classes.deviceDiv}>
                        <Button onClick={() => setSelectPc(!selectPc)}>
                            <img src={pc} alt="pc" className={classnames(classes.playTimeImg, {[classes.gray]: selectPc})} />
                        </Button>
                        <Button onClick={() => setSelectPhone(!selectPhone)}>
                            <img src={phone} alt="phone" className={classnames(classes.playTimeImg, {[classes.gray]: selectPhone})} />
                        </Button>
                        <Button onClick={() => setSelectSwitch(!selectSwitch)}>
                            <img src={switchImg} alt="switch" className={classnames(classes.playTimeImg, {[classes.gray]: selectSwitch})} />
                        </Button>
                    </div>
                </Tooltip>
            </Box>
        </React.Fragment>
    )
}