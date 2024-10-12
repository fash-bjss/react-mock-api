import styles from "./Spinner.css"

const Spinner = ({ reason }) => {
    return (
        <>
            <div role="status" className={styles["spinner"]}>
                <span>{reason}</span>
            </div>
        </>
    )
}

export default Spinner