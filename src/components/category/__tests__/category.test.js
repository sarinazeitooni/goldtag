import React from 'react';
import { shallow } from 'enzyme';
import Category from "../category";
describe("Category component" , ()=>{
    it("it should render a div",()=>{
        const container = shallow(<Category/>)
        expect(container).toMatchSnapshot();
    })
});