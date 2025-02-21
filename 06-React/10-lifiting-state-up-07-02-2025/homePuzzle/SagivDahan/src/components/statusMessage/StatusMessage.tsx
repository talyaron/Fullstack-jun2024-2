interface Props {
    ifRich: boolean;
    sum: number;
}

export default function StatusMessage({ ifRich, sum }: Props) {
    return (
        <div className={`status-message ${ifRich ? "rich" : "income"}`}>
            <h1>
                {`You will accumulate $${sum.toFixed(2)} and `}
                {ifRich ? (
                    <span className="rich-text">You're going to be rich! 💰</span>
                ) : (
                    <span className="income-text">You'll gain some income. 🌱</span>
                )}
            </h1>
        </div>
    );
}
