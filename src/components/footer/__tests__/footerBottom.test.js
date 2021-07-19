import React from 'react';
import { shallow } from 'enzyme';
import FooterBottom from "../FooterBottom";
describe("FooterBottom component" , ()=>{
    it("it should render a div",()=>{
        const container = shallow(<FooterBottom/>)
        expect(container).toMatchSnapshot();
    })
});