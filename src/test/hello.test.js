import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

function Hello(props) {
  return <h1> Hello at {props.now}</h1>;
}

let moment = Date.now().toLocaleString();
var result;
describe("when testing directly", () => {
  beforeAll(() => {
    result = Hello({ now: moment });
  });

  it("return a value", () => {
    expect(result).not.toBeNull();
  });

  it("is a h1", () => {
    expect(result.type).toBe("h1");
  });

  it("has children", () => {
    expect(result.props.children).toBeTruthy();
  });
});

describe("when test with reactDOM", () => {
  it("renders without crash", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Hello now={moment} />, div);
  });
});

Enzyme.configure({ adapter: new Adapter() });

describe("testing with enzyme", () => {
  it("renders a h1", () => {
    const wrapper = shallow(<Hello now={moment} />);
    expect(wrapper.find("h1").length).toBe(1);
  });
});
