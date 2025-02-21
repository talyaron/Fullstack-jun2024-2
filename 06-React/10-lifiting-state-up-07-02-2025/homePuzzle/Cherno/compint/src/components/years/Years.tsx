interface Props {
    changeInput: (value: number, type: string) => void;
}

export default function Years({ changeInput }: Props) {
    function handleChange(e: React.ChangeEvent<HTMLInputElement>)
    {
        changeInput(Number(e.target.value) <= 0? 0: Number(e.target.value), "T")
    }

    return (
        <>
            <label>Years:</label>
            <input type="number" min="0" onChange={handleChange}/>
        </>
    )
}