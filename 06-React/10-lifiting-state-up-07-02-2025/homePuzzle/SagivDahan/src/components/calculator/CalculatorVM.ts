import { useEffect, useMemo, useState } from "react";

export default function useCalculator() {
    const [values, setValues] = useState({
        P: 0,
        R: 4,
        T: 1
    });

    const changeInput = (key: keyof typeof values, value: number) => {
        setValues(prev => ({ ...prev, [key]: value }));
    };

    const sum = useMemo(() => {
        return Math.round(values.P * ((1 + values.R / 100) ** values.T) * 100) / 100;
    }, [values]);

    const ifRich = useMemo(() => sum - values.P > 1000, [sum, values.P]);

    return { changeInput, sum, ifRich };
}