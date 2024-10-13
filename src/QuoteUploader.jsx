import useFetch from "react-fetch-hook"


const QuoteUploader = (text) => {

    const {isLoading, error} = useFetch("https://example.com/quoteoftheday", {
        method: "POST",
        body: JSON.stringify(text),
        headers: { "Content-Type": "application/json" },
    });

    

    return !error && !isLoading && <p>Successfully Sent</p>;
}

export default QuoteUploader