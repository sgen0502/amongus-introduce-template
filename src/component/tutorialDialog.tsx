import {
    Button,
    createStyles,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    makeStyles,
    Typography,
    Theme,
    Paper, MobileStepper, useTheme
} from "@material-ui/core";
import React from "react";
import {KeyboardArrowLeft, KeyboardArrowRight} from "@material-ui/icons";

import tutorial1 from '../resources/tutorial/tutorial1.png';
import tutorial2 from '../resources/tutorial/tutorial2.png';
import tutorial3 from '../resources/tutorial/tutorial3.png';
import tutorial4 from '../resources/tutorial/tutorial4.png';
import tutorial5 from '../resources/tutorial/tutorial5.png';
import tutorial6 from '../resources/tutorial/tutorial6.png';
import tutorial7 from '../resources/tutorial/tutorial7.png';
import tutorial8 from '../resources/tutorial/tutorial8.png';
import tutorial9 from '../resources/tutorial/tutorial9.png';
import tutorial10 from '../resources/tutorial/tutorial10.png';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        fontBold: {
            fontWeight: "bold"
        },
        header: {
            display: 'flex',
            alignItems: 'center',
            height: 50,
            maxWidth: 400,
            paddingLeft: theme.spacing(4),
            backgroundColor: theme.palette.background.default,
        },
        img: {
            height: 255,
            width: 400,
            overflow: 'hidden',
            display: 'block',
        },
    })
);

const tutorialSteps = [
    {label: "まずは画像をクリックしてサムネイルをアップロード！", img: tutorial1},
    {label: "名前を入力！", img: tutorial2},
    {label: "AmongUsをプレイするデバイスを選ぶ！", img: tutorial3},
    {label: "好きな色を選択！", img: tutorial4},
    {label: "その他貴方の好みを入力してください！", img: tutorial5},
    {label: "また上のFontから全体のFontを調整できます！", img: tutorial6},
    {label: "色変更ブタンから全体の色を好きに調節できます。", img: tutorial7},
    {label: "また、プリセットから選ぶことも出来ます。", img: tutorial8},
    {label: "自分の切り取りの甘さのせいで濃い色すると文字が滲みます。注意！（いつか修正します。）", img: tutorial9},
    {label: "最後にダウンロードを押せば画像として保存できます！ENJOY", img: tutorial10},
]

export const TutorialDialog = (props : {open: boolean, handleClose: () => void}) => {
    const { open, handleClose } = props;

    const classes = useStyles();
    const theme = useTheme();

    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = tutorialSteps.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
            <DialogTitle className={classes.fontBold}>
                    使い方説明！
            </DialogTitle>
            <DialogContent dividers>
                <Paper square elevation={0} className={classes.header}>
                    <Typography>{tutorialSteps[activeStep].label}</Typography>
                </Paper>
                <img
                    className={classes.img}
                    src={tutorialSteps[activeStep].img}
                    alt={tutorialSteps[activeStep].img}
                />
                <MobileStepper
                    steps={maxSteps}
                    position="static"
                    variant="text"
                    activeStep={activeStep}
                    nextButton={
                        <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                            Next
                            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                        </Button>
                    }
                    backButton={
                        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                            Back
                        </Button>
                    }
                />
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={handleClose} color="primary">
                    閉じる
                </Button>
            </DialogActions>
        </Dialog>
    );
}