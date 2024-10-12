import "./Spinner.css"

const Spinner = ({ reason }) => {
    return (
        <>
            <div role="status" className="spinner">
                <span>{reason}</span>
            </div>
        </>
    )
}

export default Spinner