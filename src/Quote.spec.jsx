import * as React from "react";
import { render, screen} from "@testing-library/react";
import { describe, expect, act} from "vitest";
import userEvent from "@testing-library/user-event";
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

    it("has a Like button", async () => {
      
        render(<Quote text="text" />);
      
        const likeButton = await screen.findByRole("button");
        expect(likeButton).toHaveTextContent("Like");
    });

    it("updates when the button is clicked", async () => {
        render(<Quote text="text" />);
        
        const user = userEvent.setup()
        const likeButton = await screen.findByRole("button");

        act(() => {
            user.click(likeButton)
        })

        await screen.findByText("Liked");
    })
});
