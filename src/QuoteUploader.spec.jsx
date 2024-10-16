import * as React from "react"

import {render, screen} from "@testing-library/react"
import {expect, describe} from "vitest"

import { HttpResponse, http } from "msw"
import { setupServer } from "msw/node"

import QuoteUploader from "./QuoteUploader"


const apiRoutes = [
    http.post("https://example.com/quote", async ({request}) => {

        const req = await request.json()
        
        if(req.text == undefined){
            return new HttpResponse("Missing quote text", {status: 400});
        }

        if(typeof req.text != "string"){
            return new HttpResponse("String needed in text field", {status: 400})
        }

        return HttpResponse.json({status: 204});

    }),
]

const stubQuoteApi = setupServer(...apiRoutes)

describe("Quote Uploader", () => {

    stubQuoteApi.listen()

    it("uploads quote", async () => {
        
        render(<QuoteUploader text="Some quote" />)

        const success = await screen.findByText("Successfully Sent")

        expect(success).toBeInTheDocument()
    })

})