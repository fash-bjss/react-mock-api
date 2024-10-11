import { render, screen} from "@testing-library/react";
import { describe, expect } from "vitest";
import Quote from "./Quote";

describe("Quote is render", ()=> {

    it("renders heading text", ()=> {
        render(<Quote />);

        const headerTwo = screen.getByRole("heading", {level: 2})

        expect(headerTwo).toHaveTextContent(
            "Quote of the Day"
        );
    });

    it("renders quote passed in as property", () => {
        render(<Quote text="Whatever" />)
        const expectedString = "Whatever"

        expect(screen.getByText(expectedString)).toBeInTheDocument()
    })
});
