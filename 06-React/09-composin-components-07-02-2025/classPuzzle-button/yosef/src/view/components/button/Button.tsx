import { KeyRound  } from 'lucide-react';
import styles from "./Button.module.scss"

interface ButtonProps{
    children:React.ReactNode;
    text: string;
    link: string;
}

    const Button:FC<ButtonProps>=({text,children,link}) =>{
        return (
          <a href={link}>
          <button className={styles.button}>
            {text }
            <span className={styles.icon}>{children}</span>
          </button>
          </a>
        )
      }
      
      export default Button