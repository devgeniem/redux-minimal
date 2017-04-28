import React from "react";
import { shallow } from "enzyme";
import assert from "assert";
import { UserList } from "../../src_users/components/common/UserListElement";

// unit tests for the UserListElement component
describe('UserListElement component', () => {
  describe('render()', () => {
    it('should render the progressbar', () => {
      const props = {users: []};
      const wrapper = shallow(<UserList {...props} />);
      assert.equal(wrapper.length, 1);
    });
  });
});
