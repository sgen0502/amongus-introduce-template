import React, {useEffect, useState} from "react";
import {useDropzone} from 'react-dropzone';
import star from "../resources/star.png";
import imagePlaceHolder from "../resources/imagePlaceHolder.png";
import {Box, Button, createStyles, Input, makeStyles, Theme} from "@material-ui/core";
import name from "../resources/name.png";
import playDevice from "../resources/playDevice.png";
import pc from "../resources/PC.png";
import classnames from "classnames";
import phone from "../resources/phone.png";
import switchImg from "../resources/switch.png";

const useStyles = (mainColor: string, boxColor: string) => makeStyles((theme: Theme) =>
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
            margin: theme.spacing(2),
            fontSize: "58px",
            //fontFamily: "'Noto Sans JP', sans-serif"
            fontFamily: "'Hachi Maru Pop', cursive"
        },
    })
);

export interface FirstRowProps {
    bgColor: string;
    boxColor: string;
}

export const FirstRow = (props: FirstRowProps) => {
    const [selectPc, setSelectPc] = useState(true);
    const [selectPhone, setSelectPhone] = useState(true);
    const [selectSwitch, setSelectSwitch] = useState(true);
    const [thumbNail, setThumbNail] = useState(imagePlaceHolder);
    const {acceptedFiles, getRootProps, getInputProps} = useDropzone();

    const {bgColor, boxColor} = props;
    const classes = useStyles(bgColor, boxColor)();

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
                {/*<input ref={imageUploadRef} type="file" onChange={(event) => {*/}
                {/*    const image = event && event.target && event.target.files;*/}
                {/*    if(image && image.length > 0) setThumbNail(URL.createObjectURL(image[0]))*/}
                {/*}}/>*/}

                <div {...getRootProps({className: 'dropzone'})}>
                    <input {...getInputProps()} />
                    <img src={thumbNail} alt="thumbNail" className={classes.thumbNail}/>
                </div>
            </Box>
            <Box className={classes.nameBox} borderRadius={16}>
                <div className={classes.flex}>
                    <img src={name} alt="name" className={classes.playTimeImg} />
                </div>
                <Input className={classes.input} disableUnderline={true} placeholder={"名前"}/>
            </Box>
            <Box className={classes.deviceBox} borderRadius={16}>
                <div className={classes.flex}>
                    <img src={playDevice} alt="playDevice" className={classes.playTimeImg} />
                </div>
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
            </Box>
        </React.Fragment>
    )
}