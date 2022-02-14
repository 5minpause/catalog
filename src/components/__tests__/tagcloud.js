import React from "react"
import renderer from "react-test-renderer"
import { useStaticQuery } from "gatsby"
import TagCloud from "../tagcloud"

beforeEach(() => {
  useStaticQuery.mockImplementationOnce(() => (
    {
        "allMarkdownRemark": {
          "group": [
            {
              "fieldValue": "ruby",
              "totalCount": 2
            },
          ],
        },
    }
  )
)})

describe("TagCloud", () =>
  it("renders correctly", () => {
    const tree = renderer.create(<TagCloud />).toJSON()
    expect(tree).toMatchSnapshot()
  }))