import useFetch from "react-fetch-hook"

const QuoteLoader = () => {

    const { data } = useFetch("https://mock-api.com/quoteoftheday")

    if (data){
        return "received " + data.text
    }
    console.log(data)
}

export default QuoteLoader