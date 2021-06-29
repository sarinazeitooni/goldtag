import React from 'react';
import {shallow} from 'enzyme';
import Divider from "../components/divider/Divider";
describe("divider component" , ()=>{
   it("should render correctly" , ()=>{
       const wrapper = shallow(<Divider className={'test'}/> );
       expect(wrapper.exists()).toBe(true);
   })
});