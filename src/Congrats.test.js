import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";

import Congrats from "./Congrats";
import { findByTestAttr } from "../test/testUtils";

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * @function
 * @param {object} props
 * @return {ShallowWrapper}
 */
const setup = (props = {}) => {
  return shallow(<Congrats {...props} />);
};

test("render without error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-congrats");
  expect(component.length).toBe(1);
});

test("renders no text when `success` prop is false", () => {
  const wrapper = setup({ success: false });
  const component = findByTestAttr(wrapper, "component-congrats");
  expect(component.text()).toBe("");
});

test("renders non-empty congrats message", () => {
  const wrapper = setup({ success: true });
  const message = findByTestAttr(wrapper, "congrates-message");
  expect(message.text().length).not.toBe(0);
});
