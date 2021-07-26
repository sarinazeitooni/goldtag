import React from 'react';
import { shallow } from 'enzyme';
import actionTypes from "../actionTypes";
describe("actionTypes hook" , ()=>{
    it("it should render",()=>{
        const container = shallow(<actionTypes/>)
        expect(container).toMatchSnapshot();
    });
});