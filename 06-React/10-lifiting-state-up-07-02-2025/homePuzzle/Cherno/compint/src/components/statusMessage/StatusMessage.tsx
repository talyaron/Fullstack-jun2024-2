interface Props {
    ifRich: boolean;
    sum: number
}

export default function StatusMessage({ ifRich, sum }: Props){
    return (
        <h1> {"you will acumilate " + sum + " and "}{ifRich? "you will be rich!": "you will gain some income"} </h1>
    )
}