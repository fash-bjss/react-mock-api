import * as React from "react"

import { render, screen } from "@testing-library/react";
import { describe, expect } from "vitest";
import QuoteLoader from "./QuoteLoader";

//MockServiceWorker
import { HttpResponse, http } from "msw"
import { setupServer } from "msw/node"



//This will contain both real and mock api routes
const apiRoutes = [
    http.get("https://example.com/quoteoftheday", ()=> {
        return HttpResponse.json({
            text: "Hello everybody"
        });
    }),

]

const stubQuoteApi = setupServer(...apiRoutes)

describe("Quote Loader", () => {

    // Start fake loader at top level of test
    stubQuoteApi.listen();

    it("renders", ()=> {
        render(<QuoteLoader />)
    });

    it("fetches then renders quote text", async ()=> {

        render(<QuoteLoader />)

        const quoteText = await screen.findByText("Hello everybody");

        expect(quoteText).toBeInTheDocument()

    });

    // Scafollding added to check the mock-api loads correctly
    // it("tests the API was setup correctly", async () => {

    //     const response = await fetch("https://example.com/quoteoftheday")
    //     const quote = await response.json()

    //     const text = quote.text

    //     expect(text).toBe("Hello everybody")

    // })

    it("it shows spinner when loading", async() => {

        render(<QuoteLoader />)

        const status = await screen.getByRole("status")

        expect(status).toHaveTextContent(
            "Quote is loading..."
        );
    });

    it("informs user if there is an error", async() => {
        stubQuoteApi.use(
            http.get("https://example.com/quoteoftheday", () => {
                return HttpResponse.error();
              },
              { once: true }
            )
          );
    
        render(<QuoteLoader />)
        const alert = await screen.findByText("Error loading...")
        expect(alert).toBeInTheDocument()
    });
});
