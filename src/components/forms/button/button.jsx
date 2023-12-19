import styles from "./buttons.module.css"

export default function Button({ children }) {
    return(
        <button className={styles.button}>{children}</button>
    )
}