import React from 'react';
import { shallow } from 'enzyme';
import Card from "../card";
describe("Card component" , ()=>{
    it("it should render a div",()=>{
        const container = shallow(<Card/>)
        expect(container).toMatchSnapshot();
    });
    it("it should use number format",()=>{
        const container = shallow(<Card/>)
        expect(container.find('NumberFormat')).toHaveLength(1);
    });
});