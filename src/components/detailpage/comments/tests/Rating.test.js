import React from 'react';
import { shallow } from 'enzyme';
import Rating from "../Rating";
describe("Rating component" , ()=>{
    it("it should render a div",()=>{
        const container = shallow(<Rating />)
        expect(container).toMatchSnapshot();
    });
});