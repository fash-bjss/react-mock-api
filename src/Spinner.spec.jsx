import { render, screen } from "@testing-library/react";
import { describe, expect } from "vitest";
import Spinner from "./Spinner";

describe("Spinner", async () => {

    it("Shows hidden ARIA reason", () => {
        render(<Spinner reason="reason for the delay" />)

        const status = screen.getByRole("status")

        expect(status).toHaveTextContent(
            "reason for the delay"
        )
    });
    
})