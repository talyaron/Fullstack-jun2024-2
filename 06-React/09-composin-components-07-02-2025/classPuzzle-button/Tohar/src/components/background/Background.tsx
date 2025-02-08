import { FC } from 'react';
import styles from './Background.module.scss'

interface BackgroundProps {
    children: React.ReactNode;
}

const Background: FC<BackgroundProps> = ({ children }) => {
    return (
        <div className={styles.background}>{children}</div>

    )
}

export default Background;