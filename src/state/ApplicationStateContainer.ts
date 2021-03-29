import {useState} from 'react';
import {createContainer} from "unstated-next";

const ApplicationState = () => {
    const [font, setFont] = useState("'Hachi Maru Pop', cursive");

    return {
        font,
        setFont
    }
}

export default createContainer(ApplicationState);