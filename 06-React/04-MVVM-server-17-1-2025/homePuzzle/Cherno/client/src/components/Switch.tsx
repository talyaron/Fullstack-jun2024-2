import styles from './Switch.module.scss'

export const ToggleSwitch = ( {label, state, onPress}: {label: string, state: boolean, onPress: () => void} ) => {
    console.log(state)
    console.log(onPress)
    return (
        <div className={styles["switch-container"]}>
            {label}{" "}
            <label className={styles.switch}>
                <input type="checkbox" checked={state} onChange={onPress}/>
                <span className={styles["slider"]}></span>
            </label>
        </div>
    );
};
