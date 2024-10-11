import { render, screen} from "@testing-library/react";
import { describe } from "vitest";

describe("Quote is render", ()=> {

    it("renders heading text", ()=> {
        render(<Quote />)
    })
})
