import React from "react";
import { shallow } from "enzyme";
import assert from "assert";
import Menu from "./Menu";

// unit tests for the Menu component
describe.skip('Menu component', () => {
  describe('render()', () => {
    it('should render the component', () => {
      const wrapper = shallow(<Menu/>);
      assert.equal(wrapper.length, 1);
    });
  });
});
