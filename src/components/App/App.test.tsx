import React from "react"
import { shallow, ShallowWrapper } from "enzyme"
import App from "./App"
import Timer from "../Timer/Timer"

// Test Cases of App Component
describe("App", () => {
  let container: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>

  beforeEach(() => (container = shallow(<App />)))

  // Should have a div
  it("should render a <div />", () => {
    expect(container.find("div").length).toEqual(1)
  })

  // Should have a timer component
  it("should render the Timer Component", () => {
    expect(container.containsMatchingElement(<Timer />)).toEqual(true)
  })
})
