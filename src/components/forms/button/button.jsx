import styles from "./buttons.module.css"

export default function Button({ children, fullWidth }) {
    return(
        <button className={`${styles.button} ${fullWidth && styles.fullWidth}`}>{children}</button>
    )
}