import { useEffect, useState } from "react";

export default function useCalculator()
{
    const [ P, setP ] = useState<number>(0);
    const [ R, setR ] = useState<number>(4);
    const [ T, setT ] = useState<number>(1);
    const [ sum, setSum ] = useState<number>(0);
    const [ ifRich, setIfRich ] = useState<boolean>(false);

    const changeInput = (value: number, type: string) => {
        switch(type) {
            case 'P':
                setP(value);
                break;
            case 'R':
                setR(value);
                break;
            case 'T':
                setT(value);
                break;
            default:
                console.log('Invalid input field');
        }
    };

    useEffect(() => {
        const result = P * ((1 + R / 100) ** T);
        setSum(Math.round(result * 100) / 100);
        setIfRich(result - P > 1000);
        console.log("Calculated sum:", result);
      }, [P, R, T]); 

    return ( { changeInput, sum, ifRich } )
}
