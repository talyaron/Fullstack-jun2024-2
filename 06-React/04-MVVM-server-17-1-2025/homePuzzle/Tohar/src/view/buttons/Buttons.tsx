import { useState } from "react";
import Switch from "react-switch";

function Buttons() {

    const ButtonsActivity: boolean[] = [false, false]
    const [buttonActive, setButtonsActive] = useState<boolean[]>(ButtonsActivity);

    const handleChange = (index: number) => {
        setButtonsActive(prev =>
            prev.map((button, i) => {
                //the current pressed button is tuggled on click
                if (i === index) {
                    return !button;
                }
                //if the current button is active, make the other button inactive
                return button ? !button : button
            }));
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <Switch onChange={() => handleChange(0)} checked={buttonActive[0]} />
            <Switch onChange={() => handleChange(1)} checked={buttonActive[1]} />
        </div>
    )
}

export default Buttons;