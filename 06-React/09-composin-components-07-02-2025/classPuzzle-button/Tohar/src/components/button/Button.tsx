import { FC } from 'react';
import styles from './Button.module.scss'

interface Props {
    children: React.ReactElement
    text: string;
}

const Button: FC<Props> = ({ children, text }) => {
    return (
        <button className={styles.container}>
            {children}
            <h3>{text}</h3>
        </button>

    )
}

export default Button