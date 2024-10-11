import { render, screen } from "@testing-library/react";
import { describe, expect } from "vitest";
import QuoteLoader from "./QuoteLoader";

describe("Quote Loader", () => {

    it("renders", ()=> {
        render(<QuoteLoader />)
    });
});
