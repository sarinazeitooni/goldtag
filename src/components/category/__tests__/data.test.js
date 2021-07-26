import React from 'react';
import { shallow } from 'enzyme';
import categoryData from "../data/categoryData";
describe("categoryData text" , ()=>{
    it("it should render a div",()=>{
        const container = shallow(<categoryData/>)
        expect(container).toMatchSnapshot();
    });
});