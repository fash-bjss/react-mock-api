import { render, screen } from "@testing-library/react";
import { describe, expect } from "vitest";

describe("Quote Loader", () => {

    it("renders", ()=> {
        render(<QuoteLoader />)
    });
});
