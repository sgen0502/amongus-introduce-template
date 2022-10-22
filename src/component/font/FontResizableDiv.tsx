import {Button, ButtonGroup, createStyles, makeStyles, Paper, Theme} from "@material-ui/core";
import React, {useState} from "react";
import {FontPicker} from "./FontPicker";

const useDivStyles = makeStyles((theme: Theme) =>
    createStyles({
        parentDiv:{
            display: "flex",
            flexDirection: "row-reverse",
        },
        buttonGroup: {
            margin: "-40px 0px 0px 0px",
            position: "absolute"
        },
        fontPicker: {

        }
    })
);

interface FontResizableDivProps extends React.HTMLProps<HTMLDivElement>{
    placeHolder: string;
    defaultFontSize: number;
}

export const FontResizableDiv = (props: FontResizableDivProps) => {
    const classes = useDivStyles();
    const [fontSize, setFontSize] = useState(props.defaultFontSize);
    const [showFontControl, setShowFontControl] = useState(false);
    const [font, setFont] = useState("'");

    const onFocus = () => {
        setShowFontControl(true);
    }

    const onBlur = () => {
        setShowFontControl(false);
    }

    const changeSize = (num: number) => {
        setFontSize(fontSize + num);
    }

    return (
        <div onMouseLeave={onBlur} onMouseOver={onFocus}>
            <div className={classes.parentDiv} >
                {showFontControl ? (
                        <Paper className={classes.buttonGroup}>
                            <ButtonGroup color="primary" variant={"outlined"} size={"small"} aria-label="outlined small primary button group">
                                <FontPicker className={classes.fontPicker} selectedFont={font} onChange={setFont} />
                                <Button onClick={() => changeSize(2)}>+</Button>
                                <Button onClick={() => changeSize(-2)}>-</Button>
                            </ButtonGroup>
                        </Paper>
                    )
                    : <span/>}
            </div>
            <div {...props} style={{fontSize}}>
                <span>{props.placeHolder}</span>
            </div>
        </div>
    );
};