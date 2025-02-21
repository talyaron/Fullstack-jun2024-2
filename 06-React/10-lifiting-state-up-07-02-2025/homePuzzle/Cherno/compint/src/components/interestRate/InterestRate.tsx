interface Props {
    changeInput: (value: number, type: string) => void;
}

export default function InterestRate({ changeInput }: Props) {
    function handleChange(e: React.ChangeEvent<HTMLInputElement>)
    {
        changeInput(Number(e.target.value) <= 0? 0: Number(e.target.value), "R")
    }

    return (
        <>
            <label>interest Rate:</label>
            <input type="number" min="0" onChange={handleChange}/>
        </>
    )
}