import {FC} from 'react'
import styles from './Image.module.scss'

interface ImageProps {
    src: string
    alt: string
    text:string
}

const Image:FC<ImageProps> = ({src, alt, text}) => {
    
    return (
        <div className={styles.image}>
            <img src={src} alt={alt} />
            <div>{text}</div>
        </div>
    )
}

export default Image