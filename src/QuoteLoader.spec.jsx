import * as React from "react"

import { render, screen } from "@testing-library/react";
import { describe, expect } from "vitest";
import QuoteLoader from "./QuoteLoader";

//MockServiceWorker
import { HttpResponse, http , httpResponse } from "msw"
import { setupServer } from "msw/node"


// https://quotes.rest/random

//This will contain both real and mock api routes
const apiRoutes = [
    http.get("https://mock-api.com/quoteoftheday", ()=> {
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
});
