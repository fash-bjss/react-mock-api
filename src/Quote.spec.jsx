import { render, screen} from "@testing-library/react";
import { describe } from "vitest";
import Quote from "./Quote";

describe("Quote is render", ()=> {

    it("renders heading text", ()=> {
        render(<Quote />)
    })
})
