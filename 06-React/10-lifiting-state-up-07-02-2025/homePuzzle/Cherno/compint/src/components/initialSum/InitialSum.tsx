interface Props {
    changeInput: (value: number, type: string) => void;
}

export default function InitialSum({ changeInput }: Props) {
    function handleChange(e: React.ChangeEvent<HTMLInputElement>)
    {
        changeInput(Number(e.target.value) <= 0? 0: Number(e.target.value), "P")
    }

    return (
        <>
            <label>Initial Sum (Principal):</label>
            <input type="number" min="0" onChange={handleChange}/>
        </>
    )
}