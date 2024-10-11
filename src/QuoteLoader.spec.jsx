import { render, screen } from "@testing-library/react";
import { describe, expect } from "vitest";
import QuoteLoader from "./QuoteLoader";

describe("Quote Loader", () => {

    it("renders", ()=> {
        render(<QuoteLoader />)
    });

    it("fetches then renders quote text", async ()=> {

        render(<QuoteLoader />)

        const quoteText = await screen.findByText("Hello everybody");

        expect(quoteText).toBeInTheDocument()

    });
});
