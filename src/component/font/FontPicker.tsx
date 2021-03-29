import React from 'react';
import {FormControl, InputLabel, MenuItem, Select} from "@material-ui/core";

interface Font{
    name: string;
    value: string;
}

const AvailableFonts: Font[] = [
    { name: "Dela Gothic One", value: "'Dela Gothic One', cursive"},
    { name: "DotGothic16", value: "'DotGothic16', sans-serif"},
    { name: "Hachi Maru Pop", value: "'Hachi Maru Pop', cursive"},
    { name: "Kiwi Maru", value: "'Kiwi Maru', serif"},
    { name: "New Tegomin", value: "'New Tegomin', serif"},
    { name: "Noto Sans TC", value: "'Noto Sans TC', sans-serif"},
    { name: "Potta One", value: "'Potta One', cursive"},
    { name: "Reggae One", value: "'Reggae One', cursive"},
    { name: "Shippori Mincho", value: "'Shippori Mincho', serif"},
    { name: "Stick", value: "'Stick', sans-serif"},
    { name: "Train One", value: "'Train One', cursive"},
]

export interface FontPickerProps{
    className: string;
    selectedFont: string;
    onChange: (font: string) => void;
}

export const FontPicker = (props: FontPickerProps) => {
    const {className, selectedFont, onChange} = props;

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        onChange(event.target.value as string);
    };

    return(
        <FormControl className={className} color={"secondary"}>
            <InputLabel id="demo-simple-select-label" variant="standard">Font</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectedFont}
                onChange={handleChange}
                >
                    {
                        AvailableFonts.map(f => {
                            return (<MenuItem value={f.value} style={{fontFamily: f.value}}>{f.name}</MenuItem>)
                        })
                    }
            </Select>
        </FormControl>
    )
}