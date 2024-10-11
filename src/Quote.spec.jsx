import { render, screen} from "@testing-library/react";
import { describe, expect } from "vitest";
import Quote from "./Quote";

describe("Quote is render", ()=> {

    it("renders heading text", ()=> {
        render(<Quote />);

        expect(screen.getByText("Quote of the Day")).toBeInTheDocument()
    });
});
