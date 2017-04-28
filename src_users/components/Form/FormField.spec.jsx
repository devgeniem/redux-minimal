import React from "react";
import { shallow } from "enzyme";
import assert from "assert";
import FormField from "./FormField";

// unit tests for the FormField component
describe('FormField component', () => {
  describe('render()', () => {
    it('should render the component', () => {
      const wrapper = shallow(<FormField/>);
      assert.equal(wrapper.length, 1);
    });
  });
});
