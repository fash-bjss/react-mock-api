import { useState } from "react"

const Quote = ({text}) => {

    const [liked, setLiked] = useState(false)

    const handleButton = () => {
        
        setLiked(!liked)
    }

    const btnText = liked ? "Liked" : "Like"

    return(
        <>
            <h2>Quote of the Day</h2>
            <p>{text}</p>
            <button onClick={handleButton}>{btnText}</button>
        </>
    )
}

export default Quote